import React from "react";
import styles from "./css/postItem.module.css";
import elipse from "../images/Ellipse.jpg";
import mail from "../images/mail.jpg";
import person from "../images/user.jpg";
import disc from "../images/disc.jpg";
import ModalItem from "./modal";

function PostItems(props) {
  const { data } = props;
  
  // const getLink = () => {
  //   const url = process.env.REACT_APP_LINKEDIN_IFRAME + data.post_id;

  //   return url;
  // };

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
  const handleApply = async () => {
    const link = process.env.REACT_APP_LINKEDIN_POST_LINK + data.post_id;
    window.open(link, "_blank");

    try {
      const url =
        process.env.REACT_APP_BACKEND_URL +
        `posts/apply-analytics/${data.job_id}`;
      const response = await fetch(url, {
        method: "PATCH",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className={" " + styles.main}>
      <div className="col">
        <div
          class={
            "card card-cover h-100 rounded-4 shadow-lg mb-0 " + styles.width
          }
        >
          <div class="d-flex flex-column h-100 px-4 py-4 pb-3 text-shadow-1">
            <ul class="d-flex list-unstyled mt-auto mb-0">
              <li className="me-auto">
                <p className="fs-4">{data.post_person}</p>
              </li>
              
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

            <button
              type="button"
              class={"btn " + styles.modalbtn}
              data-bs-toggle="modal"
              data-bs-target={"#staticBackdrop" + data.job_id}
            >
              <div>{data.summary_content}</div>
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
                      Post Source
                    </h1>
                  </div>
                  <hr
                    className="mt-0 mb-4 mx-4"
                    style={{ "border-color": "red", "border-width": "3px" }}
                  />
                  <div class="modal-body d-flex justify-content-center align-items-center">
                    {/* <iframe
                      src={getLink()}
                      height="343"
                      width="504"
                      frameborder="0"
                      allowfullscreen=""
                      title="Embedded post"
                      className="border border-2 shadow-sm p-3 mb-5 bg-white rounded"
                    ></iframe> */}
                  <ModalItem data={data} />
                  </div>
                  <hr
                    className="mt-0 mb-4 mx-4"
                    style={{ "border-color": "red", "border-width": "3px" }}
                  />
                  <div class="modal-footer" style={{ border: "none" }}>
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={handleApply}
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

export default PostItems;
