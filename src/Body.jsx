import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerMenu from "./ShimmerMenu.jsx";
import "./shimmer.css";
import { MAIN_API } from "./utils/constants.js";
import resList from "./utils/resList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // 🔹 added

  const fetchData = async () => {
    // const response = await fetch(MAIN_API);
    // const json = await response.json();
    // console.log(json);

    const restaurants = await resList;
    console.log(restaurants);

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
    setLoading(false); // 🔹 stop shimmer
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Show shimmer until data loads
  if (loading) {
    return <ShimmerMenu />;
  }

  return (
    <div className="body">
      <div className="lbuttons">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.rating?.rating_text > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((resItem) => (
          <ResCard key={resItem?.info?.resId} resDetail={resItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
