import React from "react";
import styles from "./css/details.module.css";
import image1 from "./images/landing/image1.jpg";

function ProfileDetails() {
  return (
    <div>
      <div className={`${styles.main} px-3 py-3 mx-2 my-4`}>
        <div className={`${styles.first}`}>
          <h2 className="ms-2">Just one more step...</h2>
          
          <form>
          <div>
            <div class="modal-body py-5 pe-5  pt-0">
              
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
              
            </div>
          </div>
          <h1 class="fw-bold mb-2 fs-2 ms-2">Interests</h1>
          <p className="fs-5 mt-3 ms-2 mb-5">
            Note: You can have at max 3 areas of interest
          </p>
          <div>
            <div class={"modal-body py-5 pe-5 pt-0 "+ styles.form}>
              
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
                
          <button className={`btn ${styles.signup} px-3 py-0 rounded-5 me-4`} type="submit">Continue</button>
              
            </div>
          </div>
          </form>
        </div>
        <div className={`${styles.second}`}>
          <span>
            <img className={`${styles.img}`} src={image1} alt="person" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
