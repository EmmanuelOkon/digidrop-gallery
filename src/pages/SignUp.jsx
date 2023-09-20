import React, { useState } from "react";
import Locker from "../assets/locker.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { db } from "../utils/firebase";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import Spinner from "../assets/spinnerWhite.svg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  const [isLoading, setIsLoading] = useState(false);

//   const position = "top-right";
//   const duration = 3000;
//   const others = {
//     closeButton: false,
//   };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true)

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      // delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      Toastify({
        text: "Signup Successful",
        duration: 3000,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        className:
          "p-2 md:px-5 md:py-4 md:text-xl rounded-md font-medium font-poppins tracking-wide  shadow-xl outline-none",
        style: {
          background: "#DCFCE7",
          border: "2px solid #16a34a",
          color: "#16a34a",
        },
        onClick: function () {},
      }).showToast();
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      // console.log(error);
      Toastify({
        text: "Error creating account",
        duration: 3000,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        className:
          "p-2 md:px-5 md:py-4 md:text-xl rounded-md font-medium font-poppins text-center shadow-xl outline-none",
        style: {
          background: "#FEE2E2",
          border: "2px solid #FF0000",
          color: "#FF0000",
        },
        onClick: function () {},
      }).showToast();
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <h1 className="text-xl md:text-3xl text-center mt-6 font-bold text-red uppercase md:tracking-widest">
        Create account
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locker} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-re py-6  lg:px-6 ">
          <form className="w-full" onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6 font-poppins placeholder:font-poppins "
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
            />
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6 font-poppins placeholder:font-poppins"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter e-mail address"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6 font-poppins placeholder:font-poppins"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-4 top-[.6rem] md:top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-4 top-[.6rem] md:top-[.8rem] text-2xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="mb-4 flex justify-between whitespace-nowrap text-sm lg:text-base font-normal md:font-medium">
              <p className="font-poppins ">
                Have an account?
                <Link
                  to="/signin"
                  className="text-red hover:text-opacity-90 transition duration-200 ease-in-out pl-1"
                >
                  Sign In
                </Link>
              </p>
              
            </div>
            {isLoading ? (
              <button
                className="w-full bg-red h-20  text-white px-2 py3 rounded-md transition duration-150 ease-in-out hover:bg-opacity-90 active:bg-red-900  shadow-xl flex items-center"
                type="submit"
              >
                <img className=" mx-auto" src={Spinner} alt="Loading" />
              </button>
            ) : (
              <button
                className="w-full bg-red text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-opacity-90 active:bg-red-900 uppercase shadow-xl font-poppins"
                type="submit"
              >
                Sign Up
              </button>
            )}
           
            
          </form>
        </div>
      </div>
    </section>
  );
}
