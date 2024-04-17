import React from "react";
import styles from "./css/profile.module.css";

function Profile() {
  return (
    <div className={styles.main}>
      <div className="mt-3 ">
        <button className={"ms-auto me-5 px-3 py-2 rounded-4 " + styles.item}>
          <span className={`me-1`}>
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
                  d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <span className={"mt-0 " + styles.log}>Log Out</span>
        </button>
      </div>
      <div
        className={`container card card-cover rounded-4 shadow-lg my-4 py-3 px-4 ${styles.box} ${styles.cont}`}
      >
        <h3>Anany Sharma</h3>
        <div style={{ width: "2rem", height: "1px", background: "red" }}></div>

        <span>
          <svg
            height={"2rem"}
            fill="#000000"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
            </g>
          </svg>{" "}
          +918932762190
        </span>

        <span>
          <svg
            height={"2rem"}
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
              <rect width="24" height="24" fill="white"></rect>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
                fill="#323232"
              ></path>{" "}
            </g>
          </svg>{" "}
          example123@gmail.com
        </span>

        <span>
          <svg
            height={"2rem"}
            fill="#000000"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
            class="cf-icon-svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path>
            </g>
          </svg>{" "}
          IIT (BHU) Varanasi
        </span>

        {/* Modal to edit profile details */}
        <span className="ms-auto">
          <button
            type="button"
            class="btn "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <span>
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
                    d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 21H12"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </button>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class={"modal-dialog " + styles.modal}>
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h1 class="fw-bold mb-0 fs-2">Update Profile</h1>
                </div>
                <hr
                  className="mt-2 mb-4 mx-5"
                  style={{ "border-color": "red", "border-width": "3px" }}
                />
                <div class="modal-body p-5 pt-0">
                  <form class="">
                    <div class={"form-floating mb-3 "}>
                      <input
                        type="text"
                        class={"form-control " + styles.input}
                        id="floatingInput"
                        placeholder="First Name"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>

                    <div class={"form-floating mb-3 "}>
                      <input
                        type="text"
                        class={"form-control " + styles.input}
                        id="floatingInput"
                        placeholder="Last Name"
                      />
                      <label for="floatingInput">Last Name</label>
                    </div>
                    <div class={"form-floating mb-3 "}>
                      <input
                        type="text"
                        class={"form-control " + styles.input}
                        id="floatingInput"
                        placeholder="Branch/ Degree"
                      />
                      <label for="floatingInput">Degree</label>
                    </div>
                    <div class={"form-floating mb-3 "}>
                      <input
                        type="phone number"
                        class={"form-control " + styles.input}
                        id="floatingInput"
                        placeholder="Phone Number"
                      />
                      <label for="floatingInput">Phone</label>
                    </div>
                    <hr
                      className="mt-5 mb-4 mx-0"
                      style={{ "border-color": "red", "border-width": "3px" }}
                    />
                    <div className="d-flex">
                      <button
                        type="button"
                        class={`btn py-2 px-3 rounded-3 ms-auto me-3 ${styles.item}`}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span className="me-2">
                          <svg
                            height={"1.2rem"}
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
                                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                                fill="#000000"
                              ></path>{" "}
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                fill="#000000"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <span style={{ "margin-top": "1px" }}>Close</span>
                      </button>
                      <button
                        class=" mb- btn btn-lg rounded-3 btn-primary px-3 py-2"
                        style={{ fontSize: "0.9rem" }}
                        type="submit"
                      >
                        <span className="me-2">
                          <svg
                            height={"1rem"}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
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
                                fill="#ffffff"
                                fill-rule="evenodd"
                                d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>

      <div
        className={`container card card-cover rounded-4 shadow-lg my-4 py-3 px-4 ${styles.box} ${styles.cont}`}
      >
        <h3>Interests</h3>
        <div style={{ width: "2rem", height: "1px", background: "red" }}></div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <p>Frontend Development</p>
          </li>

          <li>
            <p>Backend Development</p>
          </li>

          <li>
            <p>Full Stack Development</p>
          </li>

          <li>
            <p>Software Development</p>
          </li>

          <li>
            <p>UI/UX Development</p>
          </li>
        </ul>
        {/* Modal to edit Interest details */}
        <span className="ms-auto mt-0">
          <button
            type="button"
            class="btn "
            data-bs-toggle="modal"
            data-bs-target="#interest"
          >
            <span>
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
                    d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21 21H12"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </button>

          <div
            class="modal fade"
            id="interest"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class={"modal-dialog modal-dialog-scrollable " + styles.modal}>
              <div class="modal-content rounded-4 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0  d-flex flex-column align-items-start">
                  <h1 class="fw-bold mb-0 fs-2">Chose Your Interests</h1>
                  <p>Only 3 preferences can be selected at a time</p>
                </div>
                <hr
                  className="mt-2 mb-4 mx-5"
                  style={{ "border-color": "red", "border-width": "3px" }}
                />
                <div class="modal-body p-5 pt-0">
                  <form class={` ${styles.form}`}>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="app"
                      />
                      <label class="form-check-label" for="app">
                        App Development
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="business"
                        checked
                      />
                      <label class="form-check-label" for="business">
                        Business Role
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="designer"
                      />
                      <label class="form-check-label" for="designer">
                        Designer
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="analytics"
                        checked
                      />
                      <label class="form-check-label" for="analytics">
                        Data Analytics
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="dataScience"
                      />
                      <label class="form-check-label" for="dataScience">
                        Data Science
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="product"
                        checked
                      />
                      <label class="form-check-label" for="product">
                        Product Management
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="web"
                      />
                      <label class="form-check-label" for="web">
                        Web Development
                      </label>
                    </div>
                    
                    <hr
                      className="mt-5 mb-4 mx-0"
                      style={{ "border-color": "red", "border-width": "3px" }}
                    />
                    <div className="d-flex">
                      <button
                        type="button"
                        class={`btn py-2 px-3 rounded-3 ms-auto me-3 ${styles.item}`}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <span className="me-2">
                          <svg
                            height={"1.2rem"}
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
                                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                                fill="#000000"
                              ></path>{" "}
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                fill="#000000"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        <span style={{ "margin-top": "1px" }}>Close</span>
                      </button>
                      <button
                        class=" mb- btn btn-lg rounded-3 btn-primary px-3 py-2"
                        style={{ fontSize: "0.9rem" }}
                        type="submit"
                      >
                        <span className="me-2">
                          <svg
                            height={"1rem"}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
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
                                fill="#ffffff"
                                fill-rule="evenodd"
                                d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                              ></path>{" "}
                            </g>
                          </svg>
                        </span>
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Profile;
