import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ItemPage,
  ListingPage,
  ShoppingBasket,
  LoginPage,
  ProfilePage,
  Checkout
} from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useVerifyMutation } from "./features/api";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [localStorageChanged, setLocalStorageChanged] = useState(0);

  const updateTokenVerification = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user?.token;
    return token;
  };

  const [verify] = useVerifyMutation();

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        const response = await verify({"token": token});
        setIsLogged(response.data.success);
      } catch (error) {
        console.error('Verification failed:', error);
        setIsLogged(false);
      }
    };

    const token = updateTokenVerification();
    if (token) {
      verifyToken(token);
    } else {
      setIsLogged(false);
    }
  }, [localStorageChanged, verify]);

  useEffect(() => {
    const handleStorageChange = () => {
      setLocalStorageChanged(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="item/:id" element={<ItemPage />}></Route>
        <Route path="listing" element={<ListingPage />}></Route>
        <Route path="shoopingCart" element={<ShoppingBasket />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route
          path="login"
          element={isLogged ? <ProfilePage /> : <LoginPage onLogIn={setIsLogged} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
