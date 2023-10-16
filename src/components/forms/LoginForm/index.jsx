import { useForm } from "react-hook-form";
import Button from "../../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import HeaderForm from "../HeaderForm";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginFormSchema from "./login.form.schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = ({ to, buttonText1, buttonText2, setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (payload) => {
    try {
      setloading(true);

      const { data } = await api.post("/sessions", payload);

      localStorage.setItem("@TOKEN", data.acessToken);
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

  const submit = (payLoad) => {
    userLogin(payLoad);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(submit)}>
          <HeaderForm title="Login" />

          <Input
            placeholder="Digite aqui seu email"
            id="Email"
            label="Email"
            type="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            placeholder="Digite aqui sua senha"
            id="Password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />

          <Button style="pink" type="submit" text={buttonText1} />
          <span>Ainda não possui uma conta?</span>
          <Link to={to}>
            <Button style="biggrey" disabled={loading} text={buttonText2} />
          </Link>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
