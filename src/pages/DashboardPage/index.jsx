import { Header, Button } from "../../components";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";
import { useContext } from "react";

const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <div className={styles.pageContainer}>
        <Header>
          <Button onClick={userLogout} text="Sair" />
        </Header>
        <main>
          <div className={styles.borderContainer}></div>
          <section className={styles.sectionContainer}>
            <div className={styles.divUserContainer}>
              <h2>Olá, {user?.name}</h2>

              <p>{user?.course_module}</p>
            </div>
          </section>
          <div className={styles.borderContainer}></div>
          <section className={styles.sectionContainer}>
            <div className={styles.messageContainer}>
              <h2>Que pena! Estamos em desenvolvimento :( </h2>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default DashboardPage;
