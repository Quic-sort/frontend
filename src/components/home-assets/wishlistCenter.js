import React, {useState, useEffect} from "react";
import styles from "../css/center.module.css";
import WishlistItems from "./wishlistItems";
import Filters from "./filter";
import Loader from "../loader";
// require('dotenv').config();

function WishlistCenter() {
  // const symbol1 = "<";
  // const symbol2 = ">";

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.REACT_APP_BACKEND_URL + "discover";
        // console.log(process.env.REACT_APP_BACKEND_URL)
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  
  return (
    <div className="px-3 py-3 mt-3">
      <div className={"mb-3 " + styles.top}>
        {!loading && <h3 className={styles.heading}>{data.length} Jobs</h3>}
        <Filters />
        {!loading && <select
          className={"form-select " + styles.drop}
          aria-label="Default select example"
        >
          <option selected> Sort by</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>}
      </div>
      {loading && <div className="d-flex justify-content-center"> <Loader /></div>}
      <div className={" " + styles.items}>
        { !loading && <>
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
