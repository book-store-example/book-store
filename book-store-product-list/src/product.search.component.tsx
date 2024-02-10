import { useState } from "react";

export default function ProductSearchComponent(props) {
  const [search, setSearch] = useState(props.searchPhrase);

  return (
    <div style={{ width: "300px", margin: "4px", marginLeft: "30px" }}>
      <div className="input-group w-100">
        <span className="input-group-text" id="basic-addon1">
          🔍
        </span>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") props.doSearch(search);
          }}
          value={search}
          onChange={(val) => {
            if (val.target.value == "") {
              props.doSearch("");
            }
            setSearch(val.target.value);
          }}
          className="form-control me-2"
          type="search"
          placeholder="Genre, Title and Keywords"
          aria-label="Search"
        ></input>
      </div>
    </div>
  );
}
