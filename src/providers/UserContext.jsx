import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userTechnologies, setUserTechnologies] = useState([]);
  const navigate = useNavigate();

  const updateUserTechnologies = (newTechnologies) => {
    setUserTechnologies(newTechnologies);
  };

  const loadUser = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      userLogout();
      return;
    }

    try {
      const { data } = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);

      setUserTechnologies(data.techs);
    } catch (error) {
      userLogout();
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const userLogout = () => {
    setUser(null);
    setUserTechnologies([]);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const userLogin = async (payload, setloading) => {
    try {
      setloading(true);

      const { data } = await api.post("/sessions", payload);

      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);

      setUserTechnologies(data.user.techs);

      navigate("/dashboard");
      toast.success("Login bem-sucedido");
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Credenciais inválidas");
      }
    } finally {
      setloading(false);
    }
  };

  const registerUser = async (payload, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", payload);

      navigate("/");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      if (error.response?.data === "Email already exists") {
        toast.error("E-mail já cadastrado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userTechnologies,
        userLogin,
        userLogout,
        registerUser,
        updateUserTechnologies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
