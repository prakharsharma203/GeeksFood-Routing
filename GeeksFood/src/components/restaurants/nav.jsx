import { useEffect, useState } from "react";
import "./nav.css";

export function Navbar({ filterData, setfilterData, data }) {
  const [searchValue, setsearchValue] = useState("");
  const [searchRating, setsearchRating] = useState(0);

  function filterHandler() {
    let newArr = [...data];
    if (searchValue != "") {
      newArr = newArr.filter((el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (searchRating > 0) {
      newArr = newArr.filter((el) => el.rating >= searchRating);
    }
    setfilterData(newArr);
  }
  useEffect(() => {
    filterHandler();
  }, [searchValue, searchRating]);
  return (
    <>
      
      <div className="data">
        <input
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          className="inputtext"
          type="text"
          placeholder="Search restaurants..."
        />
        <p>
          Minimum Rating:{" "}
          <input
            min={0}
            value={searchRating}
            onChange={(e) => setsearchRating(e.target.value)}
            className="number"
            type="number"
          />
        </p>
      </div>
    </>
  );
}