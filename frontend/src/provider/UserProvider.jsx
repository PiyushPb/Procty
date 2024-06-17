import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserProvider;
