import React from "react";
import styles from "../css/discoverItem.module.css";
import mapPinLine from "../images/MapPinLine.jpg";
import clock from "../images/Clock.jpg";
import disc from "../images/disc.jpg";
import Link from "../images/link.jpg";
import elipse from "../images/Ellipse.jpg";
import GetStringList from "../getStringList";

function DiscoverItems(props) {
  const {data} = props;
  console.log(data.total_jd)
  const getDate = () =>{
    // Given date in the format "MM/DD/YY"
    const givenDate = new Date(data.job_posting_date);

    // Current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - givenDate;

    // Convert milliseconds to days and months
    const millisecondsInDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    const millisecondsInMonth = millisecondsInDay * 30.436875; // Average number of milliseconds in a month (30.436875 days)

    var days = Math.floor(differenceInMilliseconds / millisecondsInDay);
    const months = Math.floor(differenceInMilliseconds / millisecondsInMonth);
    if(months===0){
      if(days===0){
        days = 1;
      }
      return `${days} days ago`;
    }

    return `${months} months ago`
  }
  return (
    <div className="d-flex justify-content-center">
        <div className={styles.main}>
      <div className="col">
        <div class="card card-cover h-100 w-60 rounded-4 shadow-lg mb-0">
          <div class="d-flex flex-column h-100 px-4 py-4 pb-3 text-shadow-1">
            <ul class="d-flex flex-wrap list-unstyled mt-auto mb-0">
              <li className="me-auto">
                <p className="fs-4">{data.company}</p>
              </li>
              {/* <li className="me-2">
                <div className={"px-2 py-1 card card-cover rounded-5 shadow-sm mb-0 "+ styles.btn}>
                <span className="me-2 mb-1 ">
                  <img src={clock} alt="folder" />
                </span>
                    {getDate()}
                </div>
              </li> */}
            </ul>

            <h3>{data.title}</h3>

            <ul class="d-flex flex-wrap list-unstyled mt-auto">
              {data.location && <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mapPinLine} alt="map" />
                </span>
                {data.location}
              </li>}
              {data.stipend && (<>
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={disc} alt="folder" />
                </span>{" "}
                {data.stipend}
              </li>
              </>
            )}

            {data.site_name && (<>
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={Link} alt="folder" />
                </span>{" "}
                {data.site_name}
              </li>
              
              </>)}

              {/* {data.duration && (<>
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={disc} alt="folder" />
                </span>{" "}
                {data.duration}
              </li>
              </>)} */}
            </ul>

            {/* <ul class="d-flex flex-wrap list-unstyled mt-auto">
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mail} alt="map" />
                </span>
                data.mail_id
              </li>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={person} alt="folder" />
                </span>
                data.Name
              </li>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={Linkedin} alt="folder" />
                </span>{" "}
                data.linkedin
              </li>
            </ul> */}
              <div>

                { GetStringList(data.total_jd)}
              </div>
      
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DiscoverItems;
