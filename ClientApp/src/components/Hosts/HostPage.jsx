import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Result from "../Search/Result.jsx";
import { Stack, Typography } from "@mui/material";

const HostPage = () => {
  const location = useLocation();
  // TODO: if no location.state, useParams to get the info about the person,
  // TODO:  otherwise just use the state props
  // location.state
  //   ? console.log("location.state:", location.state)
  //   : console.log("NO LOCATION STATE");

  // const params = useParams();
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
