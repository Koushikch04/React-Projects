import { useState } from "react";
import classes from "./SideBar.module.css";
import SearchIcon from "../Icons/SearchIcon";
import SideBarIcon from "../Icons/SideBarIcon";
import Inbox from "../Mail/Inbox/Inbox";
import IndividualMessage from "../Mail/IndividualMessage/IndividualMessage";
import MailBox from "../Mail/MailBox/MailBox";
const SideBar = () => {
  const [isActive, setIsActive] = useState({
    button: false,
    hover: false,
  });
  const expandBar = (params) => {
    setIsActive((prev) => {
      if (params === "button") {
        return {
          ...prev,
          button: !prev.button,
        };
      } else {
        return {
          ...prev,
          hover: !prev.hover,
        };
      }
    });
  };
  return (
    <>
      <div className={classes.navBar}>
        <div
          className={classes.hamburg}
          onClick={expandBar.bind(null, "button")}
        >
          <SideBarIcon />
        </div>
        <div className={classes.Mail}>Mail</div>
        <div className={classes.searchBar}>
          <SearchIcon />
          <input type="text" className={classes.input} />
        </div>
      </div>
      <div className={classes.MailSection}>
        <div className={classes.Mailboxes}>
          <MailBox isActive={isActive} expand={expandBar} />
        </div>
        <div className={classes.Inbox}>
          <Inbox />
        </div>
        <div className={classes.selectedMail}>
          <IndividualMessage />
        </div>
      </div>
    </>
  );
};
export default SideBar;
