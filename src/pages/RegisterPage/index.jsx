import { Header, RegisterForm, Button } from "../../components";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header>
          <Link to={"/"}>
            <Button text="Voltar" />
          </Link>
        </Header>

        <main>
          <RegisterForm buttonText="Cadastrar" />
        </main>
      </div>
    </>
  );
};
export default RegisterPage;
