import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Context } from "../../Context/Context.js";
import { Link } from "react-router-dom";

const HostCard = ({ host }) => {
  const { setCurrHost } = useContext(Context);
  return (
    <Link
      to={`./${host.id}`}
      style={{ textDecoration: "none", maxWidth: "304.08px" }}
      onClick={() => setCurrHost(host)}
    >
      <Card
        className="host-card hover-card"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minWidth: "272.09px",
          maxWidth: "304.08px",
          height: "100%",
          padding: "1rem",
          margin: "1rem",
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Typography variant="h5">{host.name}</Typography>
          <Typography variant="body1">
            Episodes: {host.episodes.length}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HostCard;
