import React from "react";
import { NavLink, Routes, Route, useParams, Navigate } from "react-router-dom";

function App() {
  const usersId = [1, 2, 3, 4, 5];
  const HomePage = () => {
    return (
      <>
        <h2>Home page</h2>
        <NavLink to="/users">Users list page</NavLink>
      </>
    );
  };

  const UsersList = () => {
    return (
      <>
        <h2>Users list page</h2>
        <ul>
          {usersId.map((el) => (
            <li key={el}>
              <NavLink to={`${el}`}>User: {el}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
        </ul>
      </>
    );
  };

  const UserPage = () => {
    const { userId } = useParams();

    return (
      <>
        <h2>User #{userId} page </h2>
        <ul>
          <li>
            <NavLink to="/users">Users list page</NavLink>
          </li>
          <li>
            <NavLink to={`edit`}>User edit page</NavLink>
          </li>
        </ul>
      </>
    );
  };

  const UserEditPage = () => {
    const { userId } = useParams();
    const nextUserId = (id) => {
      if (+id < usersId.length) {
        return +id + 1;
      } else {
        id = 1;
        return id;
      }
    };
    return (
      <>
        <h2>User #{userId} edit page</h2>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users list page</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`/users/${userId}`}>Go back to user page</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`/users/${nextUserId(userId)}`}>Another user page</NavLink>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="App">
      <h1>React router 6 app</h1>
      <Routes>
        <Route path="users/:userId/edit" element={<UserEditPage />} />
        <Route path="users/:userId" element={<UserPage />} />
        <Route path="users" element={<UsersList />} />
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
}

export default App;
