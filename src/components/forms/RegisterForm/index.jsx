import { useForm } from "react-hook-form";
import { Button, Input, Select, HeaderForm } from "../../index";
import { useContext, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterFormSchema from "./register.form.schema";
import { UserContext } from "../../../providers/UserContext";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
  });

  const moduleSelected = useRef;

  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);

  const submit = (payLoad) => {
    registerUser(payLoad, setLoading);
  };

  const moduleOptions = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(submit)}>
          <HeaderForm
            title="Crie sua conta"
            text="Rapido e grátis, vamos nessa"
          />

          <Input
            placeholder="Digite aqui seu nome"
            id="Name"
            label="Nome"
            type="text"
            required
            error={errors.name}
            {...register("name")}
          />

          <Input
            placeholder="Digite aqui seu email"
            id="Email"
            label="Email"
            type="Email"
            required
            error={errors.email}
            {...register("email")}
          />

          <Input
            placeholder="Digite aqui sua senha"
            id="password"
            label="Senha"
            type="password"
            required
            error={errors.password}
            {...register("password")}
          />

          <Input
            placeholder="Digite novamente sua senha"
            id="confirmPassword"
            label="Confirmar senha"
            type="password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />

          <Input
            placeholder="Fale sobre você"
            id="bio"
            label="Bio"
            type="text"
            error={errors.bio}
            {...register("bio")}
          />
          <Input
            placeholder="Opção de contato"
            id="contact"
            label="Contato"
            type="text"
            error={errors.contact}
            {...register("contact")}
          />

          <div>
            <Select
              error={errors.course_module}
              name="course_module"
              options={moduleOptions}
              ref={moduleSelected}
              register={register}
            />
          </div>
          <Button
            disabled={loading}
            style="defaultpink"
            type="submit"
            text="Cadastrar"
          />
        </form>
      </div>
    </>
  );
};
export default RegisterForm;
