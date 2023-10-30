import { useContext } from "react";
import {
  Header,
  Button,
  TechList,
  EditModal,
  CreateModal,
} from "../../components";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";

const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { isModalOpen, isEditModalOpen } = useContext(TechContext);

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
            <TechList />
          </section>
          {isModalOpen && <CreateModal />}
          {isEditModalOpen && <EditModal />}
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
