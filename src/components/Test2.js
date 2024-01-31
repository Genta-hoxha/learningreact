import React from "react";
import Test1 from "./Test1";

const Test2 = ({
  column1BackgroundColor,
  textColor,
  column3BackgroundColor,
  column4BackgroundColor,
  textColor3,
}) => {
  return (
    <div>
      <Test1
        backgroundColor="pink"
        column1BackgroundColor={column1BackgroundColor}
        column3BackgroundColor={column3BackgroundColor}
        column4BackgroundColor={column4BackgroundColor}
        textColor={textColor}
        textColor3="brown"
        title1="Genta Hoxha"
        title2="Jonida Okshtuni"
        title3="Desara Xhikola"
        title4="Megi Kaba"
        description1="FrontEnd Developer"
        description2="Senior Developer"
        description3="QA Engineer"
        description4="BackEnd Developer"
      />
    </div>
  );
};

export default Test2;
