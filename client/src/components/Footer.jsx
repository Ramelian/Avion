import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import styles from "../style";

const Footer = () => {
  const col1 = [
    "21 New York Street",
    "New York City",
    "United States of America",
    "432 34",
  ];
  const col2 = [
    <FaLinkedin size={24} />,
    <FaFacebookSquare size={24} />,
    <FaInstagram size={24} />,
    <FaTwitter size={24} />,
    <FaSkype size={24} />,
    <FaPinterest size={24} />,
  ];

  const col3 = ["About us", "Profile", "Start shopping", "Shopping cart"];

  return (
    <footer className="bg-primary-dark py-6 ">
      <div className={`text-white ${styles.boxWidth}`}>
        <div className="flex flex-row items-end justify-between">
          <ul className="flex flex-col gap-3">
            <h1>Avion</h1>
            {col1.map((item, id) => {
              return (
                <li key={id} className="bodySmall">
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-3 text-lg">
            {col3.map((item, id) => {
              return <li className="hover:cursor-pointer hover:text-primary" key={id}>{item}</li>;
            })}
          </ul>
          <ul className="flex flex-col gap-3">
            <p className="bodyMedium">Social links</p>
            <ul className="grid grid-cols-3 gap-5 xl:grid-cols-6">
              {col2.map((item, id) => {
                return <li key={id}>{item}</li>;
              })}
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
