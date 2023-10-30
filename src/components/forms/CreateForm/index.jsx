import { useForm } from "react-hook-form";
import Input from "../Input";
import Select from "../Select";
import Button from "./../../Button/index";

const CreateForm = ({ onFormSubmit }) => {
  const { register, handleSubmit } = useForm();

  const statusOptions = ["Iniciante", "Intermediário", "Avançado"];

  const onSubmit = async (data) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Nome" type="text" {...register("title")} />
      <Select
        label="Selecionar status"
        name="status"
        options={statusOptions}
        register={register}
      />
      <Button style="pink" text=" Cadastrar Tecnologia" type="submit" />
    </form>
  );
};

export default CreateForm;
