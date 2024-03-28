import { createContext, useState } from "react";

export const HostContext = createContext();

export const HostContextProvider = ({ children }) => {
  const [hostData, setHostData] = useState([]);
  return (
    <HostContext.Provider value={{ hostData, setHostData }}>
      {children}
    </HostContext.Provider>
  );
};
