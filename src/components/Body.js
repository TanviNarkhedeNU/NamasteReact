import RestoCard from "./RestaurantCards";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => }>Top Rate Resto</button>
      </div>
      <div className="res-container">
        {/* Resto card component to handle multiple cards */}
        <RestoCard />
      </div>
    </div>
  );
};

export default Body;
