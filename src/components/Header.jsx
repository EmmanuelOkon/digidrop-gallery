import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Logo from "../assets/logo96.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("Sign In");
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setPageState("Gallery");
      } else {
        setPageState("Sign In");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  function onLogout() {
    auth.signOut();
    navigate("/signin");
  }

  return (
    <div className="bg-white border-b border-b-red shadow-sm sticky top-0 z-30">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div
          className="flex items-center font-raleway font-bold text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="h-10 " />
          <span className="hidden md:flex ml-1">DigiDrop</span>
        </div>
        <ul className="flex space-x-10">
          <li
            className={`font-poppins cursor-pointer py-3 text-sm font-semibold text-grey hover:text-red border-b-[3px] border-b-white hover:border-b-red  transition-all ${
              (pathMatchRoute("/signin") || pathMatchRoute("/gallery")) &&
              "border-b-[#BF212F] text-red font-bold"
            }`}
            onClick={() => navigate("/gallery")}
          >
            {pageState}
          </li>
          {user ? (
            <li
              className={`font-poppins cursor-pointer py-3 text-sm font-semibold text-grey hover:text-red border-b-[3px] border-b-white hover:border-b-red  transition-all`}
              onClick={onLogout}
            >
              Sign Out
            </li>
          ) : null}
        </ul>
      </header>
    </div>
  );
}
