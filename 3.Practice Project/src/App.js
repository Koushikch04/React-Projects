import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  let [userData, setuserData] = useState([]);
  const AddData = (data) => {
    setuserData((prev) => {
      userData = [data, ...prev];
      return userData;
    });
  };
  return (
    <div>
      <AddUser addData={AddData}></AddUser>
      <UsersList data={userData}></UsersList>
    </div>
  );
}

export default App;
