import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import Recommendations from "../components/Recommendations";
import Benefits from "../components/Benefits";
import Join from "../components/Join";
import Counter from "../components/Counter";
import { addItem } from "../redux/slices/basket";
import { useDispatch, useSelector } from "react-redux";
import { useGetItemQuery } from "../features/api";
import LoadingSpinner from "./../components/LoadingSpinner";

const ItemPage = () => {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const { id } = useParams();
  const { data: productData, isLoading, isError } = useGetItemQuery(id);
  useEffect(() => {
    if (productData) {
      setData(productData[0]);
      console.log(data);
    }
  }, [productData, data]);
  console.log(productData, isLoading, isError);

  const handleSubmit = () => {
    const { _id, name, price, description, picturePath } = data;
    const ifAdded = basket.some((item) => item._id === _id);
    if (!ifAdded) {
      dispatch(
        addItem({
          _id,
          name,
          price,
          description,
          picturePath,
          quantity: counter,
        })
      );
    }
  };

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <>
      <div
        className={`max-w-[1440px] w-full  mx-auto flex flex-col gap-4 md:flex-row md:gap-0 md:p-12`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[200px] min-w-[50%] bg-gray-300 rounded dark:bg-gray-700 animate-pulse mb-4">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        ) : (
          <img
            crossOrigin="anonymous"
            src={`http://localhost:3001/assets/${data.picturePath}`}
            alt="mainImage"
            className="min-w-[50%] object-cover"
          />
        )}
        <div className="px-6 md:px-12 py-4 text-primary-dark">
          <h1 className="mb-4 text-xl md:text-3xl">
            {isLoading ? (
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-1/2 mb-2.5"></div>
            ) : (
              data.name
            )}
          </h1>
          <h3 className="mb-6 md:mb-12 text-lg md:text-2xl">
            {isLoading ? (
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-1/3 mb-2.5"></div>
            ) : (
              <>${data.price}</>
            )}
          </h3>
          <div className="mb-9">
            <h4 className="mb-2 md:mb-6 text-lg md:text-xl">Description</h4>
            {isLoading ? (
              <>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
              </>
            ) : (
              <p className="text-primary-dark text-sm md:text-lg">
                {data.description}
              </p>
            )}
          </div>
          <div className="mb-9">
            <h4 className="mb-6 text-base md:text-lg">Dimensions</h4>
            <ul className="flex">
              <li className="flex flex-col gap-4 pr-4 md:pr-16 border-r-1 border-r-lightGray">
                <h6 className="text-sm md:text-base">Height</h6>
                {isLoading ? (
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                ) : (
                  <h5 className="text-base md:text-lg">{data.height}cm</h5>
                )}
              </li>
              <li className="flex flex-col gap-4 px-4 md:px-16 border-r-1 border-r-lightGray">
                <h6 className="text-sm md:text-base">
                  {data.depth === 0 ? "Radius" : "Width"}
                </h6>
                {isLoading ? (
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                ) : (
                  <h5 className="text-base md:text-lg">{data.width}cm</h5>
                )}
              </li>
              {data.depth !== 0 && (
                <li className="flex flex-col gap-4 pl-4 md:pl-16">
                  <h6 className="text-sm md:text-base">Depth</h6>
                  {isLoading ? (
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-full mb-2.5"></div>
                  ) : (
                    <h5 className="text-base md:text-lg">{data.depth}cm</h5>
                  )}
                </li>
              )}
            </ul>
          </div>
          {!isLoading && (
            <>
              <div className="mb-14">
                <h4 className="mb-6">Quantity</h4>
                <Counter counter={counter} setCounter={setCounter} />
              </div>
              <div className="flex gap-6">
                <button
                  className={`${styles.primaryDark} ${styles.button}`}
                  onClick={handleSubmit}
                >
                  Add to cart
                </button>
                <button className={`${styles.secondary} ${styles.button}`}>
                  Save to favorites
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Recommendations />
      <Benefits />
      <Join />
    </>
  );
};
export default ItemPage;
