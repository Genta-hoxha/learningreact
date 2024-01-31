// import React from "react";
// import Reuse from "./Reuse";
// import Component1 from "./components/Component1";
// const App = () => {
//   const userData = { name: "John Doe", email: "john@example.com" };
//   const postData = {
//     title: "First Post",
//     body: "This is the content of the first post.",
//   };

//   return (
//     <>
//       <Component1 imageUrl="images/component1.jpg" />
//       <div>
//         <Reuse type="user" data={userData} />
//         <Reuse type="post" data={postData} />
//       </div>
//     </>
//   );
// };

// export default App;

// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/Routes/routes";

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
