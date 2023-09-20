import { useState } from "react";
import SpinnerIcon from "../assets/spinner.svg"

export default function Spinner() {
  const [showSpinner, setShowSpinner] = useState(true);

  const setTime = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 7000);
  };

  setTime();

  return showSpinner ? (
    <div className="bg-black opacity-50 flex items-center justify-center fixed inset-0 z-50">
      <SpinnerIcon />
    </div>
  ) : null;
}
