import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <div>
        <img className="logo" src={LOGO_URL}></img>
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

export default Header;
