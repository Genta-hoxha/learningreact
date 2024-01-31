import React from "react";
import "./Test1.css";

const Test1 = ({
  backgroundColor,
  column1BackgroundColor,
  textColor,
  column3BackgroundColor,
  column4BackgroundColor,
  textColor3,
  title1,
  title2,
  title3,
  title4,
  description1,
  description2,
  description3,
  description4,
}) => {
  return (
    <div style={{ backgroundColor, padding: "20px", marginBottom: "10px" }}>
      <div className="four-columns-container">
        <div
          className="column1"
          style={{ backgroundColor: column1BackgroundColor }}
        >
          <h2>{title1}</h2>
          <p>{description1}</p>
        </div>
        <div className="column2" style={{ color: textColor }}>
          <h2>{title2}</h2>
          <p>{description2}</p>
        </div>
        <div
          className="column3"
          style={{ backgroundColor: column3BackgroundColor, color: textColor3 }}
        >
          <h2>{title3}</h2>
          <p>{description3}</p>
        </div>
        <div
          className="column4"
          style={{ backgroundColor: column4BackgroundColor }}
        >
          <h2>{title4}</h2>
          <p>{description4}</p>
        </div>
      </div>
    </div>
  );
};

export default Test1;
