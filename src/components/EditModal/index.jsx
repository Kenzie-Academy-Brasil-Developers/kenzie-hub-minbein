import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import EditForm from "../forms/EditForm";
import styles from "../CreateModal/styles.module.scss";

const EditModal = () => {
  const { isEditModalOpen, closeEditModal, editingTech, updateTechnology } =
    useContext(TechContext);

  return (
    <>
      {isEditModalOpen && (
        <div className={styles.backdrop} role="dialog">
          <div className={styles.modalContainer}>
            <div className={styles.headerModalContainer}>
              <h3>Tecnologia Detalhes</h3>
              <button onClick={closeEditModal}>X</button>
            </div>

            <EditForm tech={editingTech} onSubmit={updateTechnology} />
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
