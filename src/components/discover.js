import React from "react";
import DiscoverItems from "./home-assets/discoverItem";
import styles from "./css/discover.module.css";

function Discover() {
  const symbol1 = "<";
  const symbol2 = ">";

  return ( 
    <div className={styles.main}>

    <div className="container py-5 ">
      <DiscoverItems />

      <div className={"mt-4 " + styles.btn}>
        <button className={styles.item}>
          <span className={`me-1 `}>
            <svg
                height={"2rem"}
              viewBox="-3.12 -3.12 30.24 30.24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.144"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0501 7.04419C15.4673 5.79254 14.5357 4.5 13.2163 4.5C12.5921 4.5 12.0062 4.80147 11.6434 5.30944L8.47155 9.75H5.85748L5.10748 10.5V18L5.85748 18.75H16.8211L19.1247 14.1428C19.8088 12.7747 19.5406 11.1224 18.4591 10.0408C17.7926 9.37439 16.8888 9 15.9463 9H14.3981L15.0501 7.04419ZM9.60751 10.7404L12.864 6.1813C12.9453 6.06753 13.0765 6 13.2163 6C13.5118 6 13.7205 6.28951 13.627 6.56984L12.317 10.5H15.9463C16.491 10.5 17.0133 10.7164 17.3984 11.1015C18.0235 11.7265 18.1784 12.6814 17.7831 13.472L15.8941 17.25H9.60751V10.7404ZM8.10751 17.25H6.60748V11.25H8.10751V17.25Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </span>
          <span className="mt-1">

          Interested
          </span>
        </button>
        <button className={"pb-1 "+styles.item}>
          <span className={`me-1`}>
          <svg  height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21V3.90002C5 3.90002 5.875 3 8.5 3C11.125 3 12.875 4.8 15.5 4.8C18.125 4.8 19 3.9 19 3.9V14.7C19 14.7 18.125 15.6 15.5 15.6C12.875 15.6 11.125 13.8 8.5 13.8C5.875 13.8 5 14.7 5 14.7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </span>
          <span className="mt-1">

          Report
          </span>
        </button>
      </div>
      
      <div className="mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled me-3">
              <a class="page-link" href="/">
                {" "}
                {symbol1}{" "}
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                4
              </a>
            </li>
            <li class="page-item me-3">
              <a class="page-link" href="/">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                {symbol2}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  );
}

export default Discover;
