import { useForm } from "react-hook-form";
import Input from "../Input";
import styles from "./styles.module.scss";
import Button from "./../../Button/index";

const EditForm = ({ onFormSubmit, tech }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        defaultValue={tech.title}
        label="Nome do projeto"
        type="text"
        {...register("title")}
      />
      <div className={styles.inputContainer}>
        <label>Selecionar status</label>
        <select
          name="status"
          id="status"
          {...register("status")}
          defaultValue={tech.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <Button text="Salvar alterações " style="pink" type="submit" />
    </form>
  );
};

export default EditForm;
