import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
// import Link from "@mui/material/Link";

const Result = (props) => {
  const { result } = props;
  const hasExcerpt = Boolean(result.highlight);
  // if (result.highlight) {
  //   setHasExcerpt(true);
  // }

  return (
    <Link
      to={`${result.link}`}
      style={{
        textDecoration: "none",
        // pointerEvents: "none",
        width: "100%",
        maxWidth: "1296px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className="hover-card"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          width: "100%", // Set width to 100% to make the card responsive
          height: "100%",
          padding: "1rem",
          margin: "1rem",
          overflow: "hidden",
          // pointerEvents: "auto",
          // TODO pointerEvents on the Typography elements might fix the click and drag to highlight issue
        }}
      >
        <CardContent>
          <Typography variant="h5" onMouseDown={(e) => e.stopPropagation()}>
            {result.title}
          </Typography>
          <Typography variant="body1" onMouseDown={(e) => e.stopPropagation()}>
            Episode: {result.episodeNumber}
          </Typography>
          <Typography variant="body1">Summary: {result.summary}</Typography>
          {hasExcerpt && (
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                width: "100%", // Set width to 100% to make the card responsive
                height: "100%",
                padding: "1rem",
                marginTop: "1rem",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: `Excerpt: ${result.highlight}`,
                }}
              />
            </Card>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default Result;
