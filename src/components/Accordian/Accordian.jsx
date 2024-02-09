import React, { useState } from "react";
import data from "./data";

import "./style.css";
const Accordian = () => {
  const [selected, setSeleted] = useState(null);
//handle to selected item
  const handleseletedItem = (getSeletedId) => {
    setSeleted(getSeletedId === selected ? null : getSeletedId);
  };

  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                key={dataItem.id}
                onClick={() => handleseletedItem(dataItem.id)}
                className="item"
              >
                <div className="title">
                  <h3> {dataItem.quesion}</h3>
                  {selected === dataItem.id ? <span>-</span> : <span>+</span>}
                </div>
                {selected === dataItem.id ? (
                  <div className="contentSection">
                    <div className="content">{dataItem.answer}</div>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>Data Not Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
