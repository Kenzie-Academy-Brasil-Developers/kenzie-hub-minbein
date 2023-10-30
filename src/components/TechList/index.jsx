import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import TechCard from "../TechCard";
import { BsPlus } from "react-icons/bs";
import styles from "./styles.module.scss";

const TechList = () => {
  const { openModal } = useContext(TechContext);

  const handleAddTechClick = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className={styles.techContainer}>
      <div className={styles.divContainer}>
        <h2>Tecnologias</h2>
        <button onClick={handleAddTechClick}>
          <BsPlus />
        </button>
      </div>
      <ul>
        <TechCard />
      </ul>
    </div>
  );
};

export default TechList;
