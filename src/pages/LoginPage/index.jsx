import { Header, LoginForm } from "../../components";
import styles from "./styles.module.scss";

const LoginPage = ({ setUser }) => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header showButtons={false} />
        <main>
          <LoginForm
            setUser={setUser}
            buttonText1="Entrar"
            to="/register"
            buttonText2="Cadastrar"
          />
        </main>
      </div>
    </>
  );
};
export default LoginPage;
