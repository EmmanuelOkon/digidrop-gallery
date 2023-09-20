import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
// import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  // const [showSpinner, setShowSpinner] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setShowSpinner(true), 3000);
  // }, []);

  if (checkingStatus) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
}
