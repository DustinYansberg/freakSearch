import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [hostData, setHostData] = useState([]);
  const [guestData, setGuestData] = useState([]);

  useEffect(() => {
    const url = "https://localhost:7099/api/host/GetAll";

    !(hostData.length > 0)
      ? fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setHostData(data);
          })
          .catch((err) => console.error(err))
      : console.log("hostData already loaded");
    console.log(hostData);
  }, [hostData, setHostData]);

  useEffect(() => {
    const url = "https://localhost:7099/api/Guest/GetAll";

    !(guestData.length > 0)
      ? fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setGuestData(data);
          })
          .catch((err) => console.error(err))
      : console.log("data already loaded");
    console.log(guestData);
  }, [guestData, setGuestData]);

  return (
    <Context.Provider value={{ hostData, guestData }}>
      {children}
    </Context.Provider>
  );
};
