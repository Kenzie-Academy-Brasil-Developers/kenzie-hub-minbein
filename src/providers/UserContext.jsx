import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const loadUser = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      userLogout(false);
      return false;
    }

    try {
      const { data } = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
    } catch (error) {
      userLogout();
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const userLogout = (showToast = true) => {
    setUser(null);
    localStorage.removeItem("@TOKEN");

    if (showToast) {
      toast.success("Você deslogou da sua conta");
    }

    navigate("/");
  };

  const userLogin = async (payload, setloading) => {
    try {
      setloading(true);

      const { data } = await api.post("/sessions", payload);

      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);

      navigate("/dashboard");
      toast.success("Login bem-sucedido");
    } catch (error) {
      if (
        error.response?.data?.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Credenciais invalidas");
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
      toast.success("Cadastro realizado");
    } catch (error) {
      if (error.responde?.data === "Email already exists") {
      }
      toast.error("Usuário já cadastrado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
