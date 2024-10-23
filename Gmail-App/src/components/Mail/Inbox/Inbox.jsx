import React from "react";
import SearchIcon from "../../Icons/SearchIcon";
import classes from "./Inbox.module.css";
import FilterIcon from "../../Icons/FilterIcon";

const Inbox = () => {
  const messages = 596;
  const unread = 0;
  return (
    <div className={classes.inbox}>
      <div className={classes.search}>
        <span className={classes.searchIcon}>
          <SearchIcon color="#157efb" scale={1.3} />
        </span>
        <FilterIcon />
      </div>
      <p className={classes.title}>Inbox</p>
      <p className={classes.stat}>
        {messages} messages, {unread} unread
      </p>
      <div className={classes.searchBar}>
        <SearchIcon />
        <input type="text" className={classes.input} />
      </div>
    </div>
  );
};

export default Inbox;
