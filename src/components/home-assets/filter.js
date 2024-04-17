import React from "react";
import styles from "../css/filter.module.css";

function Filters() {
  const handlesubmit = () => {};

  return (
    <div className={styles.top}>
      <button
        class={`btn ${styles.filter}`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <div className="d-flex mb-2">
          <span className="pb-2">
            <svg
              height={20}
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </span>

          <span className={" " + styles.icon}>Filter</span>
        </div>
      </button>

      <div
        class={"offcanvas offcanvas-start " + styles.top + " "+ styles.off}
        data-bs-scroll="false"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header mx-3 my-3">
          <h2 class="offcanvas-title " id="offcanvasWithBothOptionsLabel">
            Filters
          </h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className={"pb-3 ps-0 " + styles.cont}>
            <div className={"rounded-3 py-3 ps-2 " + styles.main}>
              <hr
                className=""
                style={{ "border-color": "red", "border-width": "2px" }}
              />
              <form>
                <div className="d-flex align-items-center">
                  <h4>Type</h4>
                  <div className="ms-auto me-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="remote"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Remote Job
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="onsite"
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        On-site
                      </label>
                    </div>
                  </div>
                </div>
                <hr
                  className=""
                  style={{ "border-color": "red", "border-width": "2px" }}
                />
                <div className="d-flex align-items-center">
                  <h4>Apply Site</h4>
                  <div className="ms-auto me-1">
                    <div class="form-check mt-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="linkedin"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Linkedin
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="simplyHired"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        SimplyHired
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="indeed"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        indeed
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="career"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Company career page
                      </label>
                    </div>
                  </div>
                </div>
                <hr
                  className=""
                  style={{ "border-color": "red", "border-width": "2px" }}
                />
                <div className="d-flex align-items-center">
                  <h4>Date of posting</h4>
                  <div className="ms-auto me-2">

                <div class="form-check mt-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="all"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    All time
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="hrs24"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Last 24 hours
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="days3"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    last 3 Days
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="days7"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    last 7 Days
                  </label>
                </div>
                  </div>
                </div>

                <hr
                  className=""
                  style={{ "border-color": "red", "border-width": "2px" }}
                />
                <div className="d-flex align-items-center">
                  <h4>Location</h4>
                  <div className="ms-auto me-2">

                <div class="form-check mt-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="banglore"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bengalore
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="gurugram"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Gurugram
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="mumbai"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Mumbai
                  </label>
                </div>
                  </div>
                </div>
                <hr
                className="m5-3"
                style={{ "border-color": "red", "border-width": "2px" }}
              />
                <div className={"mt-3 " + styles.results}>
                  <button className={"rounded-1 " + styles.btn2}>Cancel </button>
                  <button
                    className={"btn rounded-1 fw-b  ms-3 me-3 px-5 "+ styles.btn}
                    data-bs-dismiss="offcanvas"
                    onClick={handlesubmit}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
