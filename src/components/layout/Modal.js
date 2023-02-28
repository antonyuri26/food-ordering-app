import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import { GrClose } from "react-icons/gr";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <span className={classes.close_icon}>
        <GrClose
          onClick={props.onClose}
          cursor={"pointer"}
          // className={classes.close_icon}
        />
      </span>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalPlaceholderElement = document.getElementById("modal-placeholder");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        modalPlaceholderElement
      )}

      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        modalPlaceholderElement
      )}
    </>
  );
};

export default Modal;
