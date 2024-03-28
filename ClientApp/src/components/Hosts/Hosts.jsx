import React, { useEffect, useState, useContext } from "react";
import HostCard from "./HostCard";
import { HostContext } from "../../Context/Context";
import "../../custom.css";

const Hosts = () => {
  const { hostData, setHostData } = useContext(HostContext);
  // const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const url = "https://localhost:7099/api/host/GetAll";

    !(hostData.length > 0)
      ? fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setHostData(data);
            console.log(data);
          })
          .catch((err) => console.error(err))
      : console.log("hostData already loaded");

    setLoaded(true);
  }, []);

  return (
    <>
      <h1>Hosts</h1>
      <div className="host-list">
        {loaded
          ? hostData.map((e) => (
              <HostCard
                key={e.presenter.id}
                name={e.presenter.name}
                episodeCount={e.episodes.length}
                episodeList={e.episodes}
              />
            ))
          : "loading..."}
      </div>
    </>
  );
};

export default Hosts;
