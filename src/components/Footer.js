import React from "react";
import "./Footer.css";

const Footer = ({ showOnlySecondColumn }) => {
  const renderColumns = () => {
    if (showOnlySecondColumn) {
      return (
        <div
          className="column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="images/footSantaCasa.png" />
        </div>
      );
    }

    return (
      <>
        <div className="column">
          <h4>Column 1</h4>
          <p>Content for column 1</p>
        </div>
        <div className="column">
          <img src="images/footSantaCasa.png" />
        </div>
        <div className="column">
          <h4>Column 3</h4>
          <p>Content for column 3</p>
        </div>
      </>
    );
  };

  return <footer className="footer-container">{renderColumns()}</footer>;
};

export default Footer;
