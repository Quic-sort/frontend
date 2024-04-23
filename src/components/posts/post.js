import React from 'react'
import styles from "./css/post.module.css";
import PostItems from './postItems';
// import WishlistItems from "./wishlistItems";
// import Filters from "../home-assets/filter";

function Post(props) {
  
    const {data} = props;
    return (
      <div className="px-3 py-3 mt-3">
        <div className={"mb-3 " + styles.top}>
          {<h3 className={styles.heading}>{data.length} Jobs</h3>}
          {/* <Filters /> */}
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
                 return <PostItems data={item} />
              })}
            </>
          }
          
        </div>
        
      </div>
    );  
}

export default Post