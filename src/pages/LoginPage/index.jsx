import { Header, LoginForm } from "../../components";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.yContainer}>
          <Header style="headerWithoutButtons" />
          <main>
            <LoginForm />
          </main>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
