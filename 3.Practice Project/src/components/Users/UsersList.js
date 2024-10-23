import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
  console.log("Hello");
  return (
    <Card className={styles.users}>
      <ul>
        {props.data.map((dat) => (
          <li key={dat.id}>
            {dat.name} ({dat.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
