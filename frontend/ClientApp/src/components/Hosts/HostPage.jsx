import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Result from "../Search/Result.jsx";
import { Context } from "../../Context/Context.js";
import { Typography } from "@mui/material";

const HostPage = () => {
  const params = useParams();
  const { hostData } = useContext(Context);

  const [currHost, setCurrHost] = useState(undefined);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setCurrHost(hostData.find((host) => host.id === parseInt(params.id)));
  }, [hostData, params.id]);

  useEffect(() => {
    if (currHost) {
      setEpisodes(currHost.episodes);
    }
  }, [currHost]);
  return (
    <>
      {currHost ? (
        <>
          <Typography variant="h3" sx={{ marginBottom: "1em" }}>
            {currHost.name}
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "1em" }}>
            {currHost.name} has been on {episodes.length} episodes:
          </Typography>

          {episodes.map((episode, index) => (
            <Result key={index} result={episode} />
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default HostPage;
