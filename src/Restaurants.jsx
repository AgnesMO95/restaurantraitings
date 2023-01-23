import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [randomRestaurant, setRandomRestaurant] = useState({});
  const fetchRestaurantsData = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.entries))
      .catch((error) => console.log("error", error));
  };

  const getRandomRestaurant = (restaurants) => {
    setRandomRestaurant(
      restaurants[Math.floor(Math.random() * restaurants.length)]
    );
  };

  console.log(randomRestaurant);

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  console.log(restaurants);

  return (
    <div className="restaurants">
      <h1>Restauranter i Trondheim</h1>
      <div>
        <button
          className="random-button"
          onClick={() => getRandomRestaurant(restaurants)}
        >
          random restaurant
        </button>
        {randomRestaurant && (
          <>
            <h1>{randomRestaurant.navn}</h1>
          </>
        )}
      </div>
      <div className="restaurants-wrapper">
        {restaurants && (
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
