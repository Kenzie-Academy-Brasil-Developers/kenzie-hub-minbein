import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";
import { MdOutlineModeEditOutline, MdOutlineDelete } from "react-icons/md";

const TechCard = () => {
  const { userTechnologies } = useContext(UserContext);
  const { deleteTechnology, openEditModal } = useContext(TechContext);

  const handleDeleteTech = (techId) => {
    deleteTechnology(techId);
  };

  return (
    <>
      {userTechnologies.map((tech) => (
        <li className={styles.itemContainer} key={tech.id}>
          <div className={styles.techContainer}>
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => openEditModal(tech)}>
              <MdOutlineModeEditOutline />
            </button>
            <button onClick={() => handleDeleteTech(tech.id)}>
              <MdOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default TechCard;
