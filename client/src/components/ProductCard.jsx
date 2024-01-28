import { Link } from "react-router-dom";

const ProductCard = ({ item}) => {
  return (
    <li className="text-primary-dark min-w-[120px]">
      <Link to={`/item/${item._id}`}>
        <img
          crossOrigin="anonymous"
          src={`http://localhost:3001/assets/${item.picturePath}`}
        />
        <h4 className="mt-6 ">{item.name}</h4>
        <p className="bodyLarge mt-2">${item.price}</p>
      </Link>
    </li>
  );
};
export default ProductCard;
