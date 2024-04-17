import React from "react";
import {Link} from "react-router-dom"
import styles from "./css/login.module.css";
import image5 from "./images/landing/login_img.png"

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className={`${styles.main} mx-4 my-5 rounded-3 shadow-lg`}>
        <div className={`${styles.first} `}>
          <img className={`${styles.img} mb-4`} src={image5} alt="person"/>
          <h3>Welcome aboard my friend</h3>
          <p>just a couple of clicks and we start</p>
        </div>
        <div className={`${styles.second} `}>
          <div class="">
            <div class="modal-header p-5 pb-4 border-bottom-0 mt-5">
              <h1 class="fw-bold mb-0 fs-2 mx-auto">Welcome</h1>
            </div>

            <div class="modal-body p-5 pt-0">
              <form class="mt-5">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class={"form-control rounded-3 " +styles.input}
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">
                  <span style={{"margin-bottom":"2px"}}>
                  <svg className="me-2" height={"1.5rem"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#616161"></path> </g></svg>
                  </span>
                  Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class={"form-control rounded-3 " +styles.input}
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">
                  <span style={{"margin-bottom":"4px"}}>
                  <svg className="me-2" height={"1.5rem"}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fcfcfc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#6b6b6b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </span>
                  Password</label>
                </div>
                <button
                  class={"w-100 mb-2 btn btn-lg rounded-5 mt-4 " + styles.btn}
                  type="submit"
                >
                  Log in
                </button>
                
                <div class="d-flex align-items-center justify-content-center">
                  <div className={`${styles.line} me-1`}></div>
                  <span>Or</span>
                  <div className={`${styles.line} ms-1`}></div>
                </div>
                
                <div className="d-flex mt-3 gap-2">
                  <button
                    class={`w-100 py-2 mb-2 btn btn-outline-secondary rounded-5 ${styles.google}`}
                    type="submit"
                  >
                    <span>
                    <svg height={"1.5rem"} className="me-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>
                    </span>
                    Google
                  </button>
                  
                  <button
                    class={`w-100 py-2 mb-2 btn btn-outline-secondary rounded-5 ${styles.github}`}
                    type="submit"
                  >
                  <span>
                  <svg height={"1.5rem"} className="me-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
                  </span>
                    GitHub
                  </button>
                </div>
              </form>
              <div className={"mt-3 " + styles.reg}>
                Don't have an account?
              </div>
              <div className="mt-4 mb-5">
              <Link class={`w-100 py-2 mb-2 btn btn-outline-secondary rounded-5 ${styles.signup}`} to='/register'>
              Sign up 
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
