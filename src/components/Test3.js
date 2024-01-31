import React from "react";
import Test2 from "./Test2";

const Test3 = () => {
  return (
    <div
      style={{
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <Test2
        column1BackgroundColor="green"
        textColor="red"
        column3BackgroundColor="grey"
        column4BackgroundColor="yellow"
      />
    </div>
  );
};

export default Test3;
