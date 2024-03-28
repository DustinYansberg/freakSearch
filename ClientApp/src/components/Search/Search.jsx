//? functional imports
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

//? UI Imports
import Result from "./Result.jsx";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

//* This one seems to actually grab the search term from the URL

//! The following commented out code is not working as expected.
//! I thought it would return the search term from the URL, but it doesn't.
// const searchParams = new URLSearchParams(location.search);
// console.log(searchParams.entries());
// const searchTerm = searchParams.get("q");
// console.log(`searchTerm: ${searchTerm}`);
// const history = useHistory();
const Search = () => {
  const location = useLocation();
  const searchRegion = location.search;
  searchRegion.length > 0 && console.log(location.search);

  const [hasResult, setHasResult] = useState(false);
  const [result, setResult] = useState([]);
  const searchButtonClicked = (e) => {
    e.preventDefault();

    const query = document.getElementById("searchInput").value;
    // history.push(`/search/${encodeURIComponent(query)}`);
    const url = `https://localhost:7099/api/Episode/search/${encodeURIComponent(
      query
    )}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // returns an array of episode objects with the following properties:
        // id, title, episodeNumber, summary, link, transcript
        setResult(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setHasResult(true);
    // TODO make a search route that puts the search terms inside the URL
    // TODO read up on why form or Input leads to a specific URL
  };
  return (
    <>
      <form onSubmit={searchButtonClicked}>
        <Input
          sx={{ marginBottom: 10 }}
          type="text"
          autoFocus={true}
          id="searchInput"
          name="searchInput"
        />
        {/* <Input type="submit" value="Search" /> */}

        <Button type="button" onClick={searchButtonClicked}>
          <SearchIcon />
        </Button>
      </form>

      {hasResult &&
        result.map((result, index) => <Result key={index} result={result} />)}
    </>
  );
};

export default Search;
