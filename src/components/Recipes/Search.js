import React from "react";
import SearchBar from "material-ui-search-bar";

export default function Search(props) {
  return (
    <div>
      <SearchBar
        onChange={props.handleCheck}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
    </div>
  );
}
