import React from "react";
import styles from "../css/right.module.css";

function RightSideBar() {
  return (
    <div className={"px-3 " + styles.main + " " + styles.cont}>
      <div className={"modal-content rounded-2 shadow px-2 py-2 " + styles.container}>
        <div className="modal-header p-2 pb-2 border-bottom-0 text-center ">
          <h5 className="fw-bold mb-0">Email me for jobs</h5>
        </div>

        <div className="modal-body p-2 py-4">
          <small className="text-body-secondary">
            Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
            ea foes.
          </small>
          <form className="">
            <div>
            <input
                type="email"
                className="form-control rounded-3 my-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>
            <button
              className={"w-100 mb-2 btn btn-lg rounded-3 btn-primary " + styles.btn}
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={"modal-content rounded-2 shadow px-2 py-2 " + styles.container}>
        <div className="modal-header p-2 pb-2 border-bottom-0 text-center ">
          <h5 className="fw-bold mb-0">Get noticed faster</h5>
        </div>

        <div className="modal-body p-2 py-4">
          <small className="text-body-secondary">
          Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.
          </small>
          <form className="">
            <button
              className={"w-100 mb-2 btn btn-lg rounded-3 btn-primary my-3 " + styles.btn}
              type="submit"
            >
              Upload your resume
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
