import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import Result from "../Search/Result.jsx";
import { HostContext } from "../../Context/Context";
import { Stack, Typography } from "@mui/material";

const HostPage = () => {
  const location = useLocation();
  const params = useParams();
  const { hostData } = useContext(HostContext);

  // location.state
  //   ? console.log("location.state:", location.state)
  //   : console.log("NO LOCATION STATE");
  if (!location.state) {
    // get host with API call for the One host we are accessing
    console.log("NO LOCATION STATE");
    console.log(params["*"]);
    console.log(hostData);
  }

  const { episodeList, name } = location.state;
  console.log(episodeList, name);
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "1em" }}>
        {name}
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "1em" }}>
        {name} has been on {episodeList.length} episodes:
      </Typography>

      {episodeList.map((episode, index) => (
        <Result key={index} result={episode} />
      ))}

      {/* {episodeList.map((episode) => (
        <div key={episode.id}>{episode.title}</div>
      ))} */}
    </>
  );
};

export default HostPage;
