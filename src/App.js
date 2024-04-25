import "./App.css";
import { BrowserRouter as Router, Routes, Route , useLocation , Navigate } from "react-router-dom";
import Discover from "./components/discover";
import Wishlist from "./components/wishlist";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Tools from "./components/tools";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Creators from "./components/creators";
// import LandingPage from "./components/landingPage";
import Profile from "./components/profile";
import Home from "./components/mvp/home";
import PostHome from "./components/posts/postHome";
import ReactGA from 'react-ga4'; // Use react-ga4 for Google Analytics 4
import React, { useEffect } from 'react';

const TRACKING_ID = process.env.REACT_APP_GA_LINK; // Replace with your GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

function TrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
    <TrackPageViews />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/jobs" />} />
          <Route exact path="/jobs" element={<Home />}></Route>
          <Route exact path="/discover" element={<Discover />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/tools" element={ <Tools /> }></Route>
          <Route exact path="/creators" element={<Creators />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<SignUp />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/curated-posts" element={<PostHome />}></Route>
        </Routes>
        <Footer />
      </div>
      {/* <Redirect from="/" to="/jobs" /> */}
    </Router>
  );
}

export default App;
