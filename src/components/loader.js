import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";


function Loader() {

    const override= {
        display: "flex",
        margin: "20 0 0 0",
        "justify-content":"center"
    };

    return (
    <div>
        <BounceLoader
        color= "#36d7b7"
        loading={true}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader