import { Header, RegisterForm, Button } from "../../components";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

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
          <RegisterForm />
        </main>
      </div>
    </>
  );
};
export default RegisterPage;
