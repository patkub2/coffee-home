import React, { useState } from "react";

// export default React.createContext({
//   token: null,
//   userId: null,
//   login: (token, userId) => {},
//   logout: () => {},
// });
const AuthContext = React.createContext({
  token: null,
  userId: null,
  username: null,
  login: (token, userId, username) => {},
  logout: () => {},
});

function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUserName] = useState(null);
  function login(token, userId, username) {
    setToken(token);
    setUserId(userId);
    setUserName(username);
  }
  function logout() {
    setToken(null);
    setUserId(null);
  }
  return (
    <AuthContext.Provider
      value={{
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        username: username,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
