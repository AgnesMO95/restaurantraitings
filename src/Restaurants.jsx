import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const fetchRestaurantsData = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.entries))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  console.log(restaurants);

  return (
    <div className="restaurants">
      <h1>Restauranter i Trondheim</h1>
      <div className="restaurants-wrapper">
        {restaurants.length > 0 && (
          <>
            {restaurants.map((restaurant, index) => (
              <Restaurant key={index} restaurant={restaurant} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Restaurants;
