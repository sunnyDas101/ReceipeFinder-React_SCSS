import React, { useEffect, useState } from "react";
import "./tabs.scss";

import { CiPizza } from "react-icons/ci";
import { GiNoodles, GiFruitBowl, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { fetchTabData } from "../../api/api";

const Tabs = ({ loader, setLoader }) => {
  const [active, setActive] = useState("Pizza");
  const [tabData, setTabData] = useState("");
  const [tabLabel] = useState([
    {
      name: "Pizza",
      icon: <CiPizza />,
      id: "0209cb28fc05320434e2916988f47b71",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "c7657780aec8ce44886fa9288f707dfb",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "bc865476ffe2b8a03fbe9aee2f739740",
    },
    {
      name: "Ice Cream",
      icon: <MdOutlineIcecream />,
      id: "7c5a5ced83523b4dc49adbc78471cc38",
    },
  ]);

  const handleClick = (name, id) => {
    setActive(name);
    fetchTabData(id).then((res) => {
      setTabData(res);
      setLoader(false)
    });
  };

  useEffect(() => {
    fetchTabData(tabLabel[0].id).then((res) => {
      setTabData(res);
      console.log(res);
      setLoader(false)
    });
  }, []);

  return (
    <div className="container">
      <h1 className="receipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            key={index}
            className={`tablist ${active === item.name ? "active" : ""}`}
            onClick={() => (handleClick(item.name, item.id), setLoader(true))}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="receipe-banner">
        {tabData !== "" && (
          <>
            <div className="left-col">
              <span className="badge">
                {tabData?.recipe?.cuisineType[0].toUpperCase()}
              </span>
              <h1>{tabData?.recipe?.label}</h1>
              <p>
                <strong>Receipe : </strong>
                <small>{tabData?.recipe?.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {tabData?.recipe?.ingredientLines.map((list, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="right-col">
              <div className="image-wrapper">
                <img
                  src={tabData?.recipe?.image}
                  alt={tabData?.recipe?.label}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
