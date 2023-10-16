import Button from "../../components/Button";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <main>
          <section>
            <h1>404</h1>
            <span>Página não encontrada.</span>

            <Link to="/">
              <Button
                style="defaultpink"
                text="Voltar para a página de login"
              />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};
export default ErrorPage;
