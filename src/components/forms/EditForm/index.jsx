import { useForm } from "react-hook-form";
import Input from "../Input";
import styles from "./styles.module.scss";
import Button from "./../../Button/index";
import { toast } from "react-toastify";

const EditForm = ({ tech, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(tech.id, data);

    toast.success("O status da tecnologia foi atualizado com sucesso");
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        label="Nome do projeto"
        type="text"
        {...register("title")}
        defaultValue={tech.title}
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

      <Button text="Salvar alterações" style="pink" type="submit" />
    </form>
  );
};

export default EditForm;
