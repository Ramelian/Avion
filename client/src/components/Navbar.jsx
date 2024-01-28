import { HiOutlineSearch } from "react-icons/Hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../style";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const mobileLinks = ["All Products", "About Us", "Shopping Cart", "Account"];

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky z-50 top-0 left-0 right-0 px-6 mx-auto xl:max-w-[1386px]">
      <div className={`${styles.flexBetween} py-5 border-black-100`}>
          <div className="flex order-last md:order-none gap-4">
            <HiOutlineSearch className="" size={18} />
            <div
              className="lg:none"
              onClick={() => setToggleNavbar((prev) => !prev)}
            >
              <CiMenuBurger className="block lg:hidden" />
            </div>
          </div>
        <Link to="/">
        <h3 className="text-primary-dark order-first lg:order-none">Avion</h3>
        </Link>
        <div className="gap-x-3 hidden lg:flex">
          <Link to="shoopingCart">
            <PiShoppingCartThin size={18} />
          </Link>
          <Link to="login">
            <MdOutlineAccountCircle size={18} />
          </Link>
        </div>
      </div>
      <ul
        className={`${
          scrollPosition > 23 && "invisible"
        } gap-11 justify-center border-t-[1px] py-5 hidden lg:flex `}
      >
        <li className="bodyMedium text-primary hover:text-primary-dark transition">
          <Link to="/listing">All Products</Link>
        </li>
        <li className="bodyMedium text-primary hover:text-primary-dark transition">
          <Link>Furniture</Link>
        </li>
        <li className="bodyMedium text-primary hover:text-primary-dark transition">
          <Link>Crockery</Link>
        </li>
        <li className="bodyMedium text-primary hover:text-primary-dark transition">
          <Link>Lightning</Link>
        </li>
      </ul>

      <div
        className={`fixed bg-lightGray inset-0 duration-300 ${
          toggleNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute right-4 top-4 text-primary-dark"
          onClick={() => setToggleNavbar((prev) => !prev)}
        >
          <RxCross1 />
        </div>
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-primary-dark">
          {mobileLinks.map((link, id) => {
            return (
              <Link key={id}>
                <h4 className="mb-4">{link}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
