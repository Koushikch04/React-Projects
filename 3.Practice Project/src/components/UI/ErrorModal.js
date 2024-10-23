import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDelete} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onDelete}>Okay!</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;

// import React from "react";

// import Card from "./Card";
// import Button from "./Button";
// import classes from "./ErrorModal.module.css";

// const ErrorModal = (props) => {
//   return (
//     <div>
//       <div className={classes.backdrop} onClick={props.onDelete} />
//       <Card className={classes.modal}>
//         <header className={classes.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//           <Button onClick={props.onDelete}>Okay</Button>
//         </footer>
//       </Card>
//     </div>
//   );
// };

// export default ErrorModal;
