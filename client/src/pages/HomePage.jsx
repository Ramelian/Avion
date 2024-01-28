import Card from "./../components/Card";
import Benefits from "./../components/Benefits";
import Recommendations from "../components/Recommendations";
import styles from "../style";
import sofa from "../assets/sofaChair.png";
import Join from "../components/Join";
import HomePhoto from "../assets/HomePhoto.jpg";

const HomePage = () => {
  return (
    <>
       <div
        className="flex flex-col lg:relative mx-auto max-w-[1440px] md:h-[85vh]"
      >
        <img className="h-full w-full" src={HomePhoto} alt="Home" />
        <div className="mx-auto md:absolute right-20 top-1/2 md:-translate-y-1/2 max-w-[530px]">
          <Card
            mode="light"
            header="Luxury homeware for people who love timeless design quality"
            text="Shop the new Spring 2022 collection today"
          />
        </div>
      </div>

      <Benefits />
      <Recommendations />
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 py-14 ${styles.boxWidth}`}>
        <Card
          header="It started with a small idea"
          text="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
          mode="dark"
        />
        <img src={sofa} alt="sofa" />
      </div>
      <Join />
    </>
  );
};
export default HomePage;
