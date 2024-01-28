import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsCreditCard } from "react-icons/Bs";
import { PiPlantLight } from "react-icons/pi";
import styles from "../style";

const Benefits = () => {
  const content = [
    {
      symbol: <LiaShippingFastSolid size={24} />,
      header: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
    },
    {
      symbol: <IoIosCheckmarkCircleOutline size={24} />,
      header: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      symbol: <BsCreditCard size={24} />,
      header: "Unbeatable prices",
      text: "For our materials and quality you won't find better prices anywhere",
    },
    {
      symbol: <PiPlantLight size={24} />,
      header: "Recycled packaging",
      text: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];
  return (
    <div className={`flex flex-col items-center text-primary-dark py-16 ${styles.boxWidth}`}>
      <h3 className="mb-12">What makes our brand different</h3>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {content.map((item, id) => {
          return (
            <li className="bg-lightGray p-3 lg:bg-transparent" key={id}>
              <div>{item.symbol}</div>
              <h4 className="my-4">{item.header}</h4>
              <p className="bodyMedium">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Benefits;
