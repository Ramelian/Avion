import { useDispatch } from "react-redux";
import Counter from "./Counter";
import { useState } from "react";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
} from "../redux/slices/basket";
import { RxCross2 } from "react-icons/rx";

const BasketItem = ({ data }) => {
  const [counter, setCounter] = useState(data.quantity);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(data._id));
  };

  return (
    <>
      <tr className="relative hidden lg:table-row">
        <td className="pt-4">
          <div className="flex">
            <img
              crossOrigin="anonymous"
              src={`http://localhost:3001/assets/${data.picturePath}`}
              alt="Product Image"
              className="max-w-[110px]"
            />
            <div className="px-6 py-2 max-w-[300px]">
              <h4 className="mb-2">{data.name}</h4>
              <p className="bodySmall mb-6">
                {data.description.slice(0, 65)}...
              </p>
              <p className="bodyMedium">${data.price}</p>
            </div>
          </div>
        </td>
        <td>
          <Counter
            counter={counter}
            setCounter={setCounter}
            increment={() => dispatch(incrementQuantity(data._id))}
            decrement={() => dispatch(decrementQuantity(data._id))}
          />
        </td>
        <td>${data.price * data.quantity}</td>
        <button onClick={handleDelete} className="absolute top-2 right-2">
          <RxCross2 size={20} />
        </button>
      </tr>
      <div className="relative text-primary-dark lg:hidden">
        <div className="flex">
          <img
            crossOrigin="anonymous"
            src={`http://localhost:3001/assets/${data.picturePath}`}
            alt="Product Image"
            className="max-w-[110px]"
          />
          <div className="px-6">
            <h4 className="mb-1 text-base">{data.name}</h4>
            <p className="text-sm mb-2">{data.description.slice(0, 50)}...</p>
            <p className="bodyMedium mb-4 md:mb-2">${data.price}</p>
            <Counter
              counter={counter}
              setCounter={setCounter}
              increment={() => dispatch(incrementQuantity(data._id))}
              decrement={() => dispatch(decrementQuantity(data._id))}
            />
          </div>
        </div>
        <button onClick={handleDelete} className="absolute top-0 right-0">
          <RxCross2 size={16} />
        </button>
      </div>
    </>
  );
};
export default BasketItem;
