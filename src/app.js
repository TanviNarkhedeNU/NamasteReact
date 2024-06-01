import React from "react"; // importing react from node module
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

// react element => js object => root.render => becomes html element => will replace everything written in root div

const AppLayout = () => {
  return (
    <div className="app">
      {/* header */} <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
