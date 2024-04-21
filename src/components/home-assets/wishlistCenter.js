import React from "react";
import styles from "../css/center.module.css";
import WishlistItems from "./wishlistItems";
import Filters from "./filter";

function WishlistCenter(props) {
  // const symbol1 = "<";
  // const symbol2 = ">";

  const {data} = props;
  return (
    <div className="px-3 py-3 mt-3">
      <div className={"mb-3 " + styles.top}>
        {<h3 className={styles.heading}>{data.length} Jobs</h3>}
        <Filters />
        {/* <select
          className={"form-select " + styles.drop}
          aria-label="Default select example"
        >
          <option selected> Sort by</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
      </div>
      <div className={" " + styles.items}>
        {<>
            {data.map((item)=>{
               return <WishlistItems data={item} />
            })}
          </>
        }
        
      </div>
      {/* <div className="mt-3">
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
      </div> */}
    </div>
  );
}

export default WishlistCenter;
