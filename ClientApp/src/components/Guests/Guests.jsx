import React, { useContext, useState } from "react";
import GuestCard from "./GuestCard.jsx";
import { Context } from "../../Context/Context.js";
import { Divider, Pagination } from "@mui/material";
import "../../custom.css";

const Guests = () => {
  const { guestData } = useContext(Context);

  const [page, setPage] = useState(1);
  const guestsPerPage = 21;

  const handleChange = (e, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <>
      <h1>Guests</h1>
      <Pagination
        count={Math.ceil(guestData.length / guestsPerPage)}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
      <Divider component="div" />
      <div className="host-list">
        {guestData
          .slice((page - 1) * guestsPerPage, page * guestsPerPage)
          .map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
      </div>
    </>
  );
};

export default Guests;
