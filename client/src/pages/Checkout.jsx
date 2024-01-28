import { useEffect } from "react";
import styles from "../style";
import { useForm } from "react-hook-form";
import {
  cardNumberValidationSchema,
  expirationDateValidationSchema,
  cvvValidationSchema,
} from "../ValidationSchemas";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../features/api"

const CheckoutPage = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const userInfo = userStr ? JSON.parse(userStr) : null;
  const { data: user, isFetching, isError } = useGetUserQuery(userInfo._id);
  console.log(user, isError);

  const basketItems = useSelector((state) => state.basket);
  const subtotal = basketItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    // Process checkout data here
    console.log(data);
    // Assuming the checkout process is successful
    toast.success("Checkout successful!");
    setTimeout(() => {
      navigate("/thank-you");
    }, 3000);
  };

  if (isFetching) {
    return <div>Loading user data...</div>;
  }

  if (isError) {
    toast.error('Error fetching user data');
  }

  return (
    <div className="container mx-auto py-10 p-4">
      <ToastContainer />
      <div className="mb-4">
        <h3 className="text-primary-dark text-lg">User Information:</h3>
        <p>Name: {user.user.firstName}</p>
        <p>Address: {user.address}</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-10 bg-primary-dark text-lightGray rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Card Number"
            {...register("cardNumber", cardNumberValidationSchema)}
            className="w-full p-2 border rounded text-primary-dark"
          />
          {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message}</span>}

          <input
            type="month"
            {...register("expirationDate", expirationDateValidationSchema)}
            className="w-full p-2 border rounded text-primary-dark"
          />
          {errors.expirationDate && <span className="text-red-500">{errors.expirationDate.message}</span>}

          <input
            type="text"
            placeholder="CVC"
            maxLength="3"
            {...register("cvv", cvvValidationSchema)}
            className="w-full p-2 border rounded text-primary-dark"
          />
          {errors.cvv && <span className="text-red-500">{errors.cvv.message}</span>}
        </div>

        {/* Order Summary */}
        <div className="text-right mt-4">
          <span className="text-primary-light">Subtotal:</span>
          <span className="text-primary-dark ml-2">${subtotal.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className={`${styles.button} bg-primary hover:bg-lightGray hover:text-primary !w-full mt-6`}
        >
          Confirm and Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
