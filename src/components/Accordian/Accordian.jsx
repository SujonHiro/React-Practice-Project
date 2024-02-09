import React, { useState } from "react";
import data from "./data";

import "./style.css";
const Accordian = () => {
  const [selected, setSeleted] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);
  //handle to selected item
  const handleseletedItem = (getSeletedId) => {
    setSeleted(getSeletedId === selected ? null : getSeletedId);
  };

  const handleMultiSelection=(getSeletedId)=>{
      let copyMultiple=[...multiple];
      const findMultipleIndex=copyMultiple.indexOf(getSeletedId);
      if(findMultipleIndex=== -1){
        copyMultiple.push(getSeletedId)
      }else{
        copyMultiple.splice(findMultipleIndex,1)
      }
      setMultiple(copyMultiple)
  }
  console.log(multiple)
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelected(!enableMultiSelected)}>
          {enableMultiSelected? 'Multi Selection Disable':'Multi Selection Enable'}
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                key={dataItem.id}
                onClick={
                  enableMultiSelected
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleseletedItem(dataItem.id)
                }
                className="item"
              >
                <div className="title">
                  <h3> {dataItem.quesion}</h3>
                  {selected === dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? <span>-</span> : <span>+</span>}
                </div>
                {enableMultiSelected ? multiple.indexOf(dataItem.id)!==-1 && <div className="contentSection">
                    <div className="content">{dataItem.answer}</div>
                  </div>:
                  selected === dataItem.id && <div className="contentSection">
                  <div className="content">{dataItem.answer}</div>
                </div>
                }
                {
                /*selected === dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? (
                  <div className="contentSection">
                    <div className="content">{dataItem.answer}</div>
                  </div>
                ) : null*/}
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
