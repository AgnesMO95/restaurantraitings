const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <h3>{restaurant.navn}</h3>
      <p> Tilstand: {restaurant.total_karakter}</p>
    </div>
  );
};

export default Restaurant;
