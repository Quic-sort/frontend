import React from "react";
import styles from "./css/footer.module.css";
function Footer() {
  return (
    <div class={"container px-5 " + styles.dark}>
      <footer class="py-3">
        <div className="d-flex pt-2 mt-3">
          <div className="">
            <h3>QuicSort</h3>
            <p>QuicSort Find your ideal internship with ease.</p>
          </div>
          {/* <div class="col-md-5 offset-md-1 mb-3 ms-auto">
            <form>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control rounded-5 "
                  placeholder="Enter email address"
                />
                <button class={"btn rounded-5 " + styles.btn} type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>
        {/* <div class={"row pt-4 d-flex justify-content-around " + styles.border}>
          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_171_78)">
                      <path
                        d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 5.25L12 13.5L3 5.25"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_78">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Email me
                  </div>
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  <div style={{"max-width":"fit-content"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_171_84)">
                      <path
                        d="M7.58595 11.7013C8.26667 13.2918 9.39476 14.5752 10.7895 15.3459C10.8916 15.4012 11.0045 15.4251 11.1171 15.4154C11.2297 15.4056 11.3381 15.3626 11.4317 15.2904L13.4854 13.7253C13.5763 13.6561 13.6808 13.6138 13.7895 13.6024C13.8982 13.591 14.0077 13.6108 14.108 13.6599L17.9501 15.5418C18.0807 15.6051 18.1896 15.7152 18.2606 15.8555C18.3316 15.9958 18.3608 16.1587 18.3437 16.3196C18.2223 17.4056 17.7587 18.4038 17.0396 19.1272C16.3206 19.8507 15.3955 20.2498 14.4375 20.2498C11.4787 20.2498 8.64104 18.9065 6.54884 16.5155C4.45664 14.1244 3.28125 10.8814 3.28125 7.49985C3.2813 6.40501 3.63053 5.34773 4.26356 4.52598C4.89658 3.70423 5.76999 3.17435 6.72025 3.03557C6.86102 3.0161 7.00352 3.04944 7.12628 3.13057C7.24903 3.21171 7.34539 3.33624 7.40083 3.4854L9.04888 7.8802C9.09151 7.99388 9.10888 8.11783 9.09944 8.24104C9.09001 8.36424 9.05406 8.48287 8.9948 8.58635L7.63009 10.9694C7.56798 11.0767 7.53126 11.2004 7.52352 11.3287C7.51579 11.457 7.53729 11.5853 7.58595 11.7013V11.7013Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_171_84">
                        <rect width="21" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> +917833382832
                  </div>
                </a>
              </li>
              
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  Discover
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  Wishlist
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/" class="nav-link p-0 text-white">
                  Terms and condintions
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2 d-flex">
                <a href="/" class={"nav-link p-0 text-white me-3 "+ styles.logo}>
                  <span><svg height={"2rem"} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" class="bi bi-linkedin"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path> </g></svg></span>
                </a>
                <span className="ms-3">
                Linkdein
                </span>
              </li>
            </ul>
          </div>
        </div> */}

        <div
          class={
            "d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 mb-0 " +
            styles.border
          }
          style={{ color: "grey" }}
        >
          <p>©2024 QuicSort Pvt Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
