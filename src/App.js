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
import React from "react";
import TextComponent from "./components/TextComponent";
import ImageComponent from "./components/ImageComponent";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Reusable Components with Redux Toolkit</h1>
        <TextComponent />
        <ImageComponent />
      </div>
    </Provider>
  );
};

export default App;
