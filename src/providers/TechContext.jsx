import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { showSuccessToast, showErrorToast } from "../components/Toast";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { userTechnologies, updateUserTechnologies, loadUser } =
    useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editingTech, setEditingTech] = useState(null);

  const updateTechnology = async (techId, newData) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      await api.put(`/users/techs/${techId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEditingTech({ ...editingTech, ...newData });

      loadUser();
    } catch (error) {
      console.error("Erro ao atualizar a tecnologia:", error);
    }
  };

  const openEditModal = (tech) => {
    setEditingTech(tech);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingTech(null);
    setIsEditModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createTechnology = async (title, status) => {
    const formData = {
      title,
      status,
    };

    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        showSuccessToast("Tecnologia criada com sucesso!");
        updateUserTechnologies([...userTechnologies, response.data]);
      } else {
        showErrorToast("Erro ao criar a tecnologia.");
      }
    } catch (error) {
      showErrorToast("Erro ao criar a tecnologia.");
      console.error(error);
    }
  };
  const deleteTechnology = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        showSuccessToast("Tecnologia excluída com sucesso!");
        const updatedTechnologies = userTechnologies.filter(
          (tech) => tech.id !== techId
        );
        updateUserTechnologies(updatedTechnologies);
      } else {
        showErrorToast("Erro ao excluir a tecnologia.");
      }
    } catch (error) {
      showErrorToast("Erro ao excluir a tecnologia.");
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        updateTechnology,
        openEditModal,
        deleteTechnology,
        createTechnology,
        isModalOpen,
        openModal,
        closeModal,
        closeEditModal,
        isEditModalOpen,
        editingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
