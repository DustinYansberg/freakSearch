import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GuestCard = ({ guest }) => {
  return (
    <Link
      to={`./${guest.id}`}
      style={{ textDecoration: "none", maxWidth: "304.08px" }}
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
          <Typography variant="h5">{guest.name}</Typography>
          <Typography variant="body1">
            Episodes: {guest.episodes.length}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GuestCard;
