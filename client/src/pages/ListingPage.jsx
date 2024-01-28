import Select from "../components/Select";
import styles from "../style";
import { useEffect, useReducer, useState } from "react";
import ProductCard from "./../components/ProductCard";
import PriceSlider from "../components/PriceSlider";
import ModalFilter from "../components/ModalFilter";
import { useGetItemsQuery } from "../features/api";
import LoadingSpinner from "./../components/LoadingSpinner";

const initialState = {
  items: [],
  sortedItems: [],
  sortBy: "Newest",
  sortCategory: "All Products",
  priceGap: [0, 250],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY": {
      return { ...state, sortCategory: action.payload };
    }
    case "SET_PRICE": {
      return { ...state, priceGap: action.payload };
    }
    case "SET_SORTBY": {
      return { ...state, sortBy: action.payload };
    }
    case "SORT_ITEMS": {
      const sortedItems = [...state.items];
      switch (state.sortBy) {
        case "Name": {
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }
        case "Newest": {
          sortedItems.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        }
        case "Price (Lowest)": {
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        }
        case "Price (Highest)": {
          sortedItems.sort((a, b) => b.price - a.price);
          break;
        }
        default:
          break;
      }
      const filteredItems = sortedItems.filter((item) => {
        const inCategory =
          state.sortCategory === "All Products" ||
          item.type.toLowerCase() === state.sortCategory.toLowerCase();
        const inPriceGap =
          item.price >= state.priceGap[0] && item.price <= state.priceGap[1];
        return inCategory && inPriceGap;
      });
      return { ...state, sortedItems: filteredItems };
    }
    case "SET_ITEMS": {
      return { ...state, items: action.payload, sortedItems: action.payload };
    }
    default:
      return state;
  }
};

const ListingPage = () => {
  const [itemsState, dispatchItems] = useReducer(reducer, initialState);
  const [modal, setModal] = useState(false);

  const { data, isLoading } = useGetItemsQuery();

  useEffect(() => {
    if (data) {
      dispatchItems({ type: "SET_ITEMS", payload: data });
    }
  }, [data, dispatchItems]);

  useEffect(() => {
    dispatchItems({ type: "SORT_ITEMS" });
  }, [itemsState.sortBy, itemsState.sortCategory, itemsState.priceGap]);

  const handleCategory = (payload) => {
    dispatchItems({ type: "SET_CATEGORY", payload });
  };

  const handleSortBy = (payload) => {
    dispatchItems({ type: "SET_SORTBY", payload });
  };

  const handleOpenModal = () => {
    return setModal((prev) => !prev);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className={`${styles.boxWidth} text-center py-12 text-primary-dark`}>
        <h1 className="mb-6">View all products</h1>
        <div className="flex items-center md:px-6 py-6">
          <div className="max-w-[35%] justify-between items-center mr-6 hidden md:block">
            <Select
              types={["All Products", "Crockery", "Furniture", "Lightning"]}
              currentCategory={itemsState.sortCategory}
              onChange={handleCategory}
            />
          </div>
          <PriceSlider
            dispatchItems={dispatchItems}
            itemsState={itemsState}
            additionalStylesSlider={"!hidden md:!block"}
            additionalStylesSpan={"!hidden md:!block"}
          />
          <div className="block w-full md:w-auto md:flex md:gap-3 md:ml-auto items-center bg-lightGray md:bg-transparent">
            <span className="text-sm hidden md:inline">Sorting by:</span>
            <Select
              types={["Newest", "Name", "Price (Lowest)", "Price (Highest)"]}
              currentCategory={itemsState.sortBy}
              onChange={handleSortBy}
            />
          </div>
          <button
            className="px-6 py-3 ml-4 w-full bg-lightGray md:hidden"
            onClick={handleOpenModal}
          >
            Filter
          </button>
        </div>
        <ul className={`grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4`}>
          {itemsState.sortedItems.map((item, id) => {
            return <ProductCard key={id} item={item} />;
          })}
        </ul>
      </div>
      <ModalFilter
        itemsState={itemsState}
        handleCategory={handleCategory}
        dispatchItems={dispatchItems}
        isOpened={modal}
        onOpen={handleOpenModal}
      />
    </>
  );
};
export default ListingPage;
