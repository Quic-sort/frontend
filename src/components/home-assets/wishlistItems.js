import React from "react";
import styles from "../css/items.module.css";
import mapPinLine from "../images/MapPinLine.jpg";
import clock from "../images/Clock.jpg";
import disc from "../images/disc.jpg";
import Link from "../images/link.jpg";
// import mail from "../images/mail.jpg";
// import person from "../images/user.jpg";
// import Linkedin from "../images/linkedin.jpg";
import elipse from "../images/Ellipse.jpg";
import DiscoverItems from "./discoverItem";
import GetStringList from "../getStringList";

function WishlistItems(props) {

  const {data} = props;
  const req = data.requirments;
  // if(req)
  console.log(req.length)
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

  const handleApply = ()=>{
    window.open(data.apply_link, '_blank');
  }
  return (
    <div className={" "+styles.main}>
      <div className="col">
        <div class="card card-cover h-100 rounded-4 shadow-lg mb-0">
          <div class="d-flex flex-column h-100 px-4 py-4 pb-3 text-shadow-1">
            <ul class="d-flex list-unstyled mt-auto mb-0">
              <li className="me-auto">
                <p className="fs-4">{data.company}</p>
              </li>
              {/* <li class={"d-flex align-items-center "}>
                <button className={styles.item}>
                  <span className="me-1">
                    <svg
                      height={"1.4rem"}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 10V16M12 16L10 14M12 16L14 14M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <span style={{ "margin-top": "2px" }}>Archive</span>
                </button>
              </li>
              <li class={"d-flex align-items-center "}>
                <button className={styles.item}>
                  <span className="me-1">
                    <svg
                      height={"1.5rem"}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                          fill="#000000"
                        ></path>{" "}
                        <path
                          d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="mt-1">Mark as done</span>
                </button>
              </li> */}
              <li class={`d-flex align-items-center`}>
                <button className={styles.item2} onClick={handleApply}>
                  <span className="me-1">
                    <svg
                      height={"1.4rem"}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M20 4L3 11L10 14L13 21L20 4Z"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  Apply
                </button>
              </li>
            </ul>

            <h3>{data.title}</h3>

            <ul class={"list-unstyled mt-auto d-flex flex-wrap"}>
              {data.type_of_intern && (<>
              <li className={"me-2 " + styles.text}>
                <span className="me-2 mb-1">
                  <img src={mapPinLine} alt="map" />
                </span>
                {data.type_of_intern}
              </li>
              </>)}
              {data.location && (<>
                { data.type_of_intern && <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>}
              <li className={"me-2 " + styles.text}>
                <span className="me-2 mb-1">
                  <img src={disc} alt="map" />
                </span>
                {data.location}
              </li>
              </>) }
              {data.job_posting_date && (<>

              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={clock} alt="folder" />
                </span>
                {getDate()}
              </li>
              </>)}

              {data.stipend && (<>
              <li className="mx-3">
                <span>
                  <img src={elipse} alt="dot" />
                </span>
              </li>

              <li className={"me-2 " + styles.text}>
                <span className="me-2 mb-1">
                  <img src={disc} alt="folder" />
                </span>{" "}
                {data.stipend}
              </li>
              </>)}

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

              {data.duration && (<>
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
              </>)}
            </ul>

            {/* <ul class="d-flex list-unstyled mt-auto">
              <li className="me-2">
                <span className="me-2 mb-1">
                  <img src={mail} alt="map" />
                </span>
                abc@gmail.com
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
                Name
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
                linkedin
              </li>
            </ul> */}
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              class={"btn " + styles.modalbtn}
              data-bs-toggle="modal"
              data-bs-target={"#staticBackdrop" + data.job_id}
            >
              {data.requirments.length !==0 &&(<><h6>Requirements:</h6><ul>
                {GetStringList(data.requirments)}
                </ul> </>) }
              {data.requirments.length ===0 && (<>
                <h6>Responsibility:</h6><ul>
                {GetStringList(data.responsibility)}
                </ul>
              </>)}
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id={"staticBackdrop" + data.job_id}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby={"staticBackdrop" + data.job_id + "Label"}
              aria-hidden="true"
            >
              <div class="modal-dialog modal-fullscreen">
                <div class={"modal-content " + styles.modal}>
                  <div class="modal-header" style={{ border: "none" }}>
                    <h1
                      class={"modal-title ms-4 " + styles.head}
                      id={"staticBackdrop" + data.job_id + "Label"}
                    >
                      Job Description
                    </h1>
                  </div>
                  <hr
                    className="mt-0 mb-4 mx-4"
                    style={{ "border-color": "red", "border-width": "3px" }}
                  />
                  <div class="modal-body">
                    <DiscoverItems key={data.job_id} data={data}/>
                  </div>
                  <hr
                    className="mt-0 mb-4 mx-4"
                    style={{ "border-color": "red", "border-width": "3px" }}
                  />
                  <div class="modal-footer" style={{"border":"none"}}>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <span className="me-2">
                        <svg
                          height={"1.4rem"}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                              fill="#ffffff"
                            ></path>{" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                              fill="#ffffff"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      Close
                    </button>
                    {/* <button className={"btn " + styles.archive}>
                      <span className="me-2">
                        <svg
                          height={"1.4rem"}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#ffffff"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M12 10V16M12 16L10 14M12 16L14 14M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      Archive
                    </button> */}
                    {/* <button type="button" className={"btn " + styles.greenbtn}>
                      <span className="me-2">
                        <svg
                          height={"1.5rem"}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                              fill="#000000"
                            ></path>{" "}
                            <path
                              d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                              fill="#000000"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      Mark as done
                    </button> */}
                    <button type="button" class="btn btn-primary" onClick={handleApply}>
                      <span className="me-2">
                        <svg
                          height={"1.4rem"}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M20 4L3 11L10 14L13 21L20 4Z"
                              stroke="#ffffff"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistItems;
