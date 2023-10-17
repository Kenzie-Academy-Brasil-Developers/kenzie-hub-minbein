import { useForm } from "react-hook-form";
import { Button, Input, HeaderForm } from "../../index";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginFormSchema from "./login.form.schema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const submit = (payLoad) => {
    userLogin(payLoad, setLoading);
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

          <Button style="pink" type="submit" text="Entrar" disabled={loading} />
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">
            <Button style="biggrey" text="Cadastre-se" />
          </Link>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
