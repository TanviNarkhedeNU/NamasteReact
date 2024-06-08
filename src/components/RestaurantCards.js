import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestoCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo, id } =
    resData;
  return (
    <div className="flex flex-wrap w-[250px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-md" alt="Img" src={CDN_URL + cloudinaryImageId} />
      <Link to={"/restaurants/" + id}>
        <h3 className="font-medium">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime}min</h4>
      </Link>
    </div>
  );
};

export default RestoCard;
