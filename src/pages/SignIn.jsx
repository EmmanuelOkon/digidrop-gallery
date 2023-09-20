import { useState } from "react";
import Locked from "../assets/signin.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import Toastify from "toastify-js";
import Spinner from "../assets/spinnerWhite.svg";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }


  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        Toastify({
          text: "Login Successful",
          duration: 3000,
          close: false,
          gravity: "top",
          position: "center",
          stopOnFocus: true,
          className:
            "p-2 md:px-5 md:py-1 md:text-xl rounded-md font-medium font-poppins tracking-wide  shadow-xl outline-none",
          style: {
            background: "#DCFCE7",
            border: "2px solid #16a34a",
            color: "#16a34a",
          },
          onClick: function () {},
        }).showToast();
        setIsLoading(false);
        navigate("/");
      }
    } catch (error) {
      Toastify({
        text: "Invalid login creditials",
        duration: 3000,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        className:
          "p-2 md:px-5 md:py-1 md:text-xl rounded-md font-medium font-poppins text-center shadow-xl outline-none",
        style: {
          background: "#FEE2E2",
          border: "2px solid #FF0000",
          color: "#FF0000",
        },
        onClick: function () {},
      }).showToast();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <h1 className="text-xl md:text-3xl text-center mt-6 font-bold text-red uppercase  md:tracking-widest">
        Log in
      </h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-full md:w-[50%] lg:w-[50%] ">
          <img className="w-full" src={Locked} alt="locker" />
        </div>
        <div className="w-full md:w-[50%] bg-rd-700 py-6 lg:px-6">
          <form className="w-full" onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6 placeholder:font-poppins"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter e-mail address"
            />
            <div className="relative">
              <input
                className="w-full px-4 py-2 md:text-lg text-grey bg-white border-[2px] border-grey border-opacity-25 rounded-md outline-none focus:border-fadeGreen focus:ring-transparent transition ease-in-out mb-6 placeholder:font-poppins"
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
            
            {isLoading ? (
              <button
                className="w-full bg-red h-11  text-white px-2 rounded-md transition duration-150 ease-in-out hover:bg-opacity-90  shadow-xl flex items-center"
                type="submit"
              >
                
                <img src={Spinner} alt="spinner" className="w-32 h-auto mx-auto" />
              </button>
            ) : (
              <button
                className="w-full bg-red text-white px-7 py-3 rounded-md font-medium text-sm transition duration-150 ease-in-out hover:bg-opacity-90 active:bg-red-900 uppercase shadow-xl"
                type="submit"
              >
                Log In
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
