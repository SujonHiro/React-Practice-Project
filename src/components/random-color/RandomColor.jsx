import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  const handleHexRandomColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgbRandomColor = () => {
    const r= randomColorUtility(255);
    const g= randomColorUtility(255);
    const b= randomColorUtility(255);
   setColor(`rgb(${r},${g},${b})`);
  };
  const copyColor=()=>{
    navigator.clipboard.writeText(color)
  }

  useEffect(()=>{
    if(typeOfColor==="rgb") handleRgbRandomColor();
    else handleHexRandomColor();
  },[typeOfColor])
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:color}}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleHexRandomColor
            : handleRgbRandomColor
        }
      >
        Create Random Color
      </button>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"#ffffff",marginTop:"50px",fontSize:"20px"}}>
        <h4>{typeOfColor==="rgb"?"RGB COLOR : ": "HEX COLOR : "}</h4>
        <h5>{color}</h5>
        <button style={{marginLeft:"10px"}} onClick={copyColor}>Copy Color</button>
      </div>
    </div>
  );
};

export default RandomColor;
