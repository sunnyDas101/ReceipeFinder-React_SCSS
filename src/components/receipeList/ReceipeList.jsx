import React, { useEffect, useState } from "react";
import "./receipeList.scss";

import { BsSearch } from "react-icons/bs";
import { fetchData } from "../../api/api";

const ReceipeList = ({ loader, setLoader }) => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  const searchrecipe = (searchQuery) => {
    fetchData(searchQuery).then((res) => {
      setData(res.hits);
      setLoader(false);
    });
  };

  useEffect(() => {
    fetchData(query).then((res) => {
      setData(res.hits);
      setLoader(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
          />
          <button onClick={() => (searchrecipe(searchedTerm), setLoader(true))}>
            <BsSearch />
          </button>
        </div>
      </div>

      <div className="flexbox">
        {data &&
          data.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item?.recipe?.image} alt={item?.recipe?.label} />
              </div>
              <p>{item?.recipe?.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReceipeList;
