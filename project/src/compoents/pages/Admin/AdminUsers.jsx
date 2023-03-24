import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { UserAuth } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import firebase from "firebase/compat/app";

function AdminUsers() {
  const { user } = UserAuth();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userRef = await firebase.auth().listUsers();
      const userListData = await userRef;
      setUserList(userListData);
    };
    getUsers();
  }, []);

  console.log(userList, "dsdd");

  return (
    <div>
      <table>
        <tr>
          <th>Email</th>
          <th>Name</th>
        </tr>
      </table>
    </div>
  );
}

export default AdminUsers;
