import { Header, LoginForm } from "../../components";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Header showButtons={false} />
        <main>
          <LoginForm />
        </main>
      </div>
    </>
  );
};
export default LoginPage;
