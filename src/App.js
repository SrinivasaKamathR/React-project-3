// import React, { useState } from "react";
// import { AddUser } from "./Components/Users/AddUser";
// import UserList from "./Components/Users/UserList";

// function App() {
//   const [usersList, setUserList] = useState([]);
//   const addUserHandler = (uName, uAge) => {
//     setUserList((prev) => {
//       return [
//         ...prev,
//         { name: uName, age: uAge, id: Math.random().toString() },
//       ];
//     });
//   };
//   return (
//     <React.Fragment>
//       <AddUser onAddUser={addUserHandler} />
//       <UserList users={usersList} />
//     </React.Fragment>
//   );
// }

// export default App;

import React, { useState, Fragment } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          college: uCollege,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
