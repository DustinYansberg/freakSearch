import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <>
      <ButtonGroup
        sx={{ marginTop: 10, marginBottom: 5 }}
        variant="contained"
        aria-label="Navigation buttons"
      >
        <Link to="/search">
          <Button>Episodes</Button>
        </Link>
        <Link to="/hosts">
          <Button>Hosts</Button>
        </Link>
        <Link to="/guests">
          <Button>Guests</Button>
        </Link>
      </ButtonGroup>
    </>
  );
};

export default NavBar;
