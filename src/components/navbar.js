import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/Logo.jpg";
import styles from "./css/navbar.module.css"
const Navbar = () => {
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className={"navbar-brand " + styles.logo} to="/">
            <img src={logo} style={{ height: "7vh" }} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + styles.nav} id="navbarSupportedContent">
            <ul className={'navbar-nav me-auto mb-6 mb-lg-0 ' + styles.middle}>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/discover">
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/tools">
                  Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/creators">
                  Creators
                </Link>
              </li> */}
              <li  className={`nav-item ` }>
                
                <NavLink exact to="/"  activeClassName={styles.active} className="nav-link">Curated Jobs</NavLink>
              </li>
              <li className={`  nav-item` }>
                
                <NavLink  to="/curated-posts" activeClassName={styles.active} className="nav-link" >Curated Posts</NavLink>
              </li>
            </ul>
            {/* <div className="d-flex mt-2" role="search">
            <Link className="btn btn-outline-dark me-3" to='/profile'>
                <span>
                <svg height={"2rem"}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </span>
              </Link>
              <Link className="btn btn-outline-dark me-3 d-flex align-items-center" to='/login'>
                Log in
              </Link>
              <Link className="btn btn-primary me-3 d-flex align-items-center" to='/register'>
                Sign up
              </Link>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
