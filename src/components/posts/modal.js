import React from "react";
import styles from "./css/modal.module.css";
import mail from "../images/mail.jpg";
import person from "../images/user.jpg";
import disc from "../images/disc.jpg";
import elipse from "../images/Ellipse.jpg";

function ModalItem(props) {
  const {data} = props;

  
  const getTitle = (obj)=>{
    
    const array = obj.replace(/'/g, '"');
    const result = JSON.parse(array);

    return <h5>{result[0]} | {result[1]}</h5>
  }
  const getEmail = (obj)=>{
    const array = obj.replace(/'/g, '"');
    const result = JSON.parse(array);
    return result[0];
  }

  return (
    <div className="d-flex justify-content-center">
        <div className={styles.main}>
      <div className="col">
        <div class="card card-cover h-100 w-60 rounded-4 shadow-lg mb-0">
          <div class="d-flex flex-column h-100 px-4 py-4 pb-3 text-shadow-1">
          <ul class="d-flex list-unstyled mt-auto mb-0">
              <li className="me-auto">
                <p className="fs-4">{data.post_person}</p>
              </li>
              
            </ul>
            <h3>{getTitle(data.title)}</h3>

            <ul class="d-flex list-unstyled mt-auto flex-wrap">
              {data.email && <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mail} alt="map" />
                </span>
                {getEmail(data.email)}
              </li>}
              {data.email &&
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>
              }
              {data.phone_number &&
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={person} alt="folder" />
                </span>
                {data.phone_number}
              </li>
              }
              {data.phone_number &&

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>
              }

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={disc} alt="folder" />
                </span>{" "}
                {data.stipend}
              </li>
            </ul>

            <p>{data.content}</p>
      
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ModalItem;
