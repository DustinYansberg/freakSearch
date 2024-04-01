import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Result from "../Search/Result.jsx";
import { Context } from "../../Context/Context.js";
import { Typography } from "@mui/material";

const GuestPage = () => {
  const params = useParams();
  const { guestData } = useContext(Context);

  const [currGuest, setCurrGuest] = useState(undefined);
  const [episodes, setEpisodes] = useState([]);
  const [name, setName] = useState("");

  console.log(typeof params.id);

  useEffect(() => {
    setCurrGuest(guestData.find((guest) => guest.id === parseInt(params.id)));
  }, [guestData, params.id]);

  useEffect(() => {
    if (currGuest) {
      setEpisodes(currGuest.episodes);
      setName(currGuest.name);
    }
  }, [currGuest]);
  return (
    <>
      {currGuest ? (
        <>
          <Typography variant="h3" sx={{ marginBottom: "1em" }}>
            {currGuest.name}
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: "1em" }}>
            {currGuest.name} has been on {episodes.length} episodes:
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

export default GuestPage;
