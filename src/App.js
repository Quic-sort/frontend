import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
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
    </Router>
  );
}

export default App;
