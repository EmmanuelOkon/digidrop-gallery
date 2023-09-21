import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import SignIn from "./pages/SignIn";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading logic (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed
  }, []);

  if (isLoading) {
    return <Loading />; // Display the Loading component while loading
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<PrivateRoute />}>
            <Route path="/gallery" element={<Gallery />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
