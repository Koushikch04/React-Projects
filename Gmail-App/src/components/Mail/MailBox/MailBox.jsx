import icons from "./MailIcons";
import classes from "./MailBox.module.css";
const MailBox = (props) => {
  return (
    <div
      className={`${classes.options}  ${
        (props.isActive.hover || props.isActive.button) && classes.selected
      }`}
      onMouseEnter={() => {
        props.expand("hover");
      }}
      onMouseLeave={() => {
        props.expand("hover");
      }}
    >
      {icons.map((icon) => (
        <div className={classes.option}>
          <span className={classes.icon}>{icon.icon}</span>
          <span className={classes.title}>
            {(props.isActive.hover || props.isActive.button) && icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default MailBox;
