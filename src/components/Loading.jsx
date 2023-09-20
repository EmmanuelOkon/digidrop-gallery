import { useState } from "react";
import Spinner from "../assets/spinner.svg";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(true);

  const setTime = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 7000);
  };

  setTime();

  return showSpinner ? (
    <div className="bg-fadeOrange flex items-center justify-center fixed inset-0 z-50 h-screen">
      <img src={Spinner} alt="spinner" className="w-32 h-auto" />
    </div>
  ) : null;
}
