import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from "../style";

const Join = () => {
  const benefits = ["Exclusive offers", "Free events", "Large discounts"];
  return (
    <div className="px-6 lg:bg-lightGray lg:py-20">
      <div className="bg-white flex flex-col justify-items-center mx-auto text-primary-dark md:w-2/3 md:px-20 xl:w-3/4 xl:px-80 py-20">
        <h2 className="text-center">Join the club and get the benefits</h2>
        <p className="bodyLarge text-center py-4 mb-4">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="hidden md:flex justify-between py-2 mb-20">
          {benefits.map((benefit, id) => {
            return (
              <li className="flex items-center gap-1" key={id}>
                <IoIosCheckmarkCircleOutline size={16} />
                <p className="bodyMedium">{benefit}</p>
              </li>
            );
          })}
        </ul>
        <form className="flex md:px-4">
          <input className="bg-lightGray pl-4 flex-auto min-w-[250px]" placeholder="your@email.com"/>
          <button className={`${styles.primaryDark} ${styles.button}`}>Sign up</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
