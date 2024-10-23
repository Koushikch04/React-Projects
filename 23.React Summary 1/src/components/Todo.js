import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const confirmHandler = () => {
    setVisible(false);
  };
  console.log(visible);
  return (
    <div>
      {visible && (
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
            <button className="btn" onClick={deleteHandler}>
              Delete
            </button>
          </div>
          {modalIsOpen && (
            <Modal onCancel={closeModalHandler} onConfirm={confirmHandler} />
          )}
          {modalIsOpen && <BackDrop onClick={closeModalHandler} />}
        </div>
      )}
    </div>
  );
}
export default Todo;
