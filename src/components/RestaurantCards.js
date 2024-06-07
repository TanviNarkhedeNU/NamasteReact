import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestoCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo, id } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="Img" src={CDN_URL + cloudinaryImageId} />
      <Link to={"/restaurants/" + id}>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime}min</h4>
      </Link>
    </div>
  );
};

export default RestoCard;
