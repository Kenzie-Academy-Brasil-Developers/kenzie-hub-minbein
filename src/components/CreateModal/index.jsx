import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import CreateForm from "../forms/CreateForm";
import styles from "./styles.module.scss";

const CreateModal = () => {
  const { isModalOpen, closeModal, createTechnology } = useContext(TechContext);

  const handleFormSubmit = async (data) => {
    try {
      const success = await createTechnology(data.title, data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.backdrop} role="modal">
          <div className={styles.modalContainer}>
            <div className={styles.headerModalContainer}>
              <h3>Cadastrar tecnologia</h3>
              <button onClick={closeModal}>X</button>
            </div>
            <CreateForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateModal;
