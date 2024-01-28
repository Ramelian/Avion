import styles from "../style";
import BasketItem from "../components/BasketItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShoppingBasket = () => {
  const basketItems = useSelector((state) => state.basket);
  const subtotal = basketItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  if (basketItems.length === 0)
    return (
      <h2 className="px-4 h-screen flex justify-center items-center text-center md:px-40 text-primary-dark">
        Shopping Cart is empty!
      </h2>
    );

  return (
    <div className="max-w-[1386px] mx-auto lg:p-20 lg:bg-lightGray my-16">
      <div className="px-6 md:p-28 bg-white">
        <table className="text-primary-dark w-full hidden lg:table">
          <thead>
            <tr className="border-b border-lightGray">
              <th className="text-left pb-4 ">Product</th>
              <th className="text-left pb-4">Quantity</th>
              <th className="text-left pb-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((item, id) => {
              return <BasketItem key={id} data={item} />;
            })}
          </tbody>
        </table>

        <div className="flex lg:hidden">
          {basketItems.map((item, id) => {
            return <BasketItem key={id} data={item} />;
          })}
        </div>

        <div className="flex flex-col justify-between pt-4 border-t border-lightGray mt-12">
          <p className="text-primary text-sm self-end md:text-base mb-2 lg:mb-0">
            Taxes and shipping are calculated at checkout
          </p>
          <div className="text-right flex flex-col">
            <div className="flex justify-end mb-6 items-center">
              <h4 className="text-primary inline">Subtotal:</h4>
              <h3 className="text-primary-dark inline ml-5">${subtotal}</h3>
            </div>
            <button className={`${styles.button} ${styles.primaryDark}`} 
            onClick={() => navigate("/checkout")}>
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingBasket;
