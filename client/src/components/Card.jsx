import { Link } from "react-router-dom";
import styles from "../style";


const Card = ({ header, text, mode }) => {
  return (
    <div
      className={`p-6 lg:p-14 ${
        mode === "dark" ? "bg-primary-dark text-white" : "bg-white text-primary"
      }`}
    >
      <h2 className="text-2xl mb-4 md:text-3xl">{header}</h2>
      <p className="text-base mb-8 md:mb-24 md:bodyLarge">{text}</p>
      <Link>
        <button
          className={`w-full ${styles.button}
            ${mode === "dark" ? styles.secondaryDark : styles.secondary 
          }`}
        >
          View collection
        </button>
      </Link>
    </div>
  );
};
export default Card;
