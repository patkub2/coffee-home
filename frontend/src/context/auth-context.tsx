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
  login: (token, userId) => {},
  logout: () => {},
});

function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  function login(token, userId) {
    setToken(token);
    setUserId(userId);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
