import React, { useState } from "react";
const AuthContext = React.createContext({});

function AuthContextProvider(props) {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  function toggleEdit(p) {
    setToken(p.token);
    setUserId(p.UserId);
  }
  function Login(p) {
    setToken("");
    setUserId("");
  }
  function Logout(p) {
    setToken("");
    setUserId("");
  }

  return (
    <AuthContext.Provider
      value={{
        toggleEdit,
        token,
        userId,
        setToken,
        setUserId,
        Login,
        Logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
