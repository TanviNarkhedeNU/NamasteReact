import { CDN_URL } from "../utils/constant";

const RestoCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, sla, costForTwo, id } =
    resData;
  return (
    <div className="w-[250px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-md" alt="Img" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-medium">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}min</h4>
    </div>
  );
};

export default RestoCard;

export const RestaurantCardsOffer = (RestoCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props?.resData;
    return (
      <>
        <h3 className="absolute text-black font-semibold text-lg bg-blue-100 rounded-md px-3">
          {aggregatedDiscountInfoV3?.subHeader !== ""
            ? aggregatedDiscountInfoV3?.header +
              " " +
              aggregatedDiscountInfoV3?.subHeader
            : aggregatedDiscountInfoV3?.header}
        </h3>
        <RestoCard {...props} />
      </>
    );
  };
};
