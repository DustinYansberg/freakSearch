import React, { useContext } from "react";
import HostCard from "./HostCard";
import { Context } from "../../Context/Context.js";
import "../../custom.css";

const Hosts = () => {
  const { hostData } = useContext(Context);

  return (
    <>
      <h1>Hosts</h1>
      <div className="host-list">
        {hostData.map((host) => (
          <HostCard key={host.id} host={host} />
        ))}
      </div>
    </>
  );
};

export default Hosts;
