import { useState, useEffect } from "react";
import styles from "../style";
import { useForm } from "react-hook-form";
import {
  emailValidationSchema,
  passwordValidationSchema,
  nameValidationSchema,
  phoneValidationSchema,
} from "../ValidationSchemas";
import { useLoginMutation, useSignupMutation } from "../features/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginPage = ({onLogIn}) => {
  const navigate = useNavigate();
  const [isSignUp, setSignUp] = useState(false);

  const options = {
    autoClose: 2500,
    pauseOnHover: false,
  };

  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (credentials) => {
    console.log(credentials);
    if (isSignUp) {
      try {
        const result = await signup(credentials);
        if (result.data) {
          toast.success("Successfully", options);
        } else if (result.error.data.msg) {
          return toast.error(result.error.data.msg, options);
        }
        localStorage.setItem("user", JSON.stringify(result.data));
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (err) {
        console.error("Signup error:", err);
      }
    } else if (!isSignUp) {
      try {
        const result = await login(credentials);
        if (result.data) {
          toast.success("Successfully", options);
        } else if (result.error.data.msg) {
          return toast.error(result.error.data.msg, options);
        }
        localStorage.setItem("user", JSON.stringify(result.data));
        setTimeout(() => {
          onLogIn(true)
          navigate("/");
        }, 3000);
      } catch (err) {
        console.error("Login error:", err);
      }
    }
  };

  const changeMode = () => {
    setSignUp((prev) => !prev);
    reset();
  };

  return (
    <div className="container mx-auto py-10 p-4">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-10 bg-primary-dark text-lightGray rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <div className={isSignUp && `grid grid-cols-2 gap-4`}>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
              placeholder="Your email"
              {...register("email", emailValidationSchema)}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
              placeholder="Your password"
              {...register("password", isSignUp && passwordValidationSchema)}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          {isSignUp && (
            <>
              <div className="mt-4">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  placeholder="Confirm your password"
                  {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                {errors.confirm_password && (
                  <span className="text-red-500">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  placeholder="Enter your first name"
                  {...register("firstName", nameValidationSchema)}
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="secondName">Second Name</label>
                <input
                  type="text"
                  id="secondName"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  placeholder="Enter your first name"
                  {...register("secondName", nameValidationSchema)}
                />
                {errors.secondName && (
                  <span className="text-red-500">
                    {errors.secondName.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  placeholder="Enter your phone number"
                  {...register("phone", phoneValidationSchema)}
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  placeholder="Enter your first name"
                  {...register("address", {
                    required: "Address can not be empty.",
                  })}
                />
                {errors.address && (
                  <span className="text-red-500">{errors.address.message}</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  min="1940-01-01"
                  max="2015-12-31"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  {...register("dateOfBirth", {
                    required: "Selecting Date of Birth is required",
                  })}
                />
                {errors.dateOfBirth && (
                  <span className="text-red-500">
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className="w-full mt-2 p-2 border rounded placeholder-primary-dark text-primary-dark"
                  {...register("gender", {
                    required: "Selecting a gender is required",
                  })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500">{errors.gender.message}</span>
                )}
              </div>
            </>
          )}
        </div>
        <div
          className="mt-10 text-lightGray cursor-pointer select-none"
          onClick={changeMode}
        >
          {isSignUp ? "You have already account?" : "You don`t have account?"}
        </div>
        <div className="mt-2">
          <button
            type="submit"
            className={`${styles.button} bg-primary hover:bg-lightGray hover:text-primary !w-full`}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
