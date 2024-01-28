import { useState } from "react";
import PriceSlider from "./PriceSlider";
import Select from "./Select";
import styles from "../style";

const ModalFilter = ({ itemsState, handleCategory, dispatchItems, onOpen, isOpened }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-[0.5] z-50 ${!isOpened && "hidden"}`}
        onClick={onOpen}
      ></div>
      <div className={`fixed inset-y-0 right-0 ${isOpened ? "left-1/2" : "left-full"} bg-white py-32 px-4 z-50 duration-500`}>
        <PriceSlider
          dispatchItems={dispatchItems}
          itemsState={itemsState}
          additionalStylesSlider={"max-w-[90%] mx-2 mb-6"}
          additionalStylesSpan={`mt-0 mb-2 ml-6 block`}
        />
        <div className="bg-lightGray md:bg-transparent">
        <Select
              types={["All Products", "Crockery", "Furniture", "Lightning"]}
              currentCategory={itemsState.sortCategory}
              onChange={handleCategory}
            />
        </div>
        <button
          className={`${styles.button} ${styles.primaryDark} w-full mt-44`}
          onClick={onOpen}
        >
          To Products
        </button>
      </div>
    </>
  );
};
export default ModalFilter;
