import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  const createRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
      setColor(hexColor);
    }
  };
  const createRandomRgbColor = () => {
    const r = RandomColorUtility(255);
    const g = RandomColorUtility(255);
    const b = RandomColorUtility(255);

    setColor(`rgb(${r},${g},${b})`);
  };

// eslint-disable-next-line 
  useEffect(() => {
    // eslint-disable-next-line 
    if (typeOfColor === "rgb") createRandomRgbColor();
    else createRandomHexColor();
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? createRandomHexColor : createRandomRgbColor}
      >
        Create Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          marginTop: "50px",
          color: "white",
        }}
      >
        <h4>{typeOfColor === "rgb" ? "RGB COLOR: " : "HEX COlOR: "}</h4>
        <h4>{color}</h4>
      </div>
    </div>
  );
};

export default RandomColor;
