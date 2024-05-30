import React from "react"; // importing react from node module
import ReactDOM from "react-dom";

// react element => js object => root.render => becomes html element => will replace everything written in root div
const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <div>
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/1000v/76/66/burger-delivery-service-logo-template-vector-31037666.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestoCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://www.infinitimall.com/wp-content/uploads/2022/01/Chinese-Wok-Food-Court-Malad-Infiniti-Mall-1-1024x683.jpg"
      />
      <h3>Wok Of China</h3>
      <h4>Asian, Chinese, Continental</h4>
      <h5>4.5 stars</h5>
      <h5>48 min</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {/* Resto card component to handle multiple cards */}
        <RestoCard />
      </div>
    </div>
  );
};
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
