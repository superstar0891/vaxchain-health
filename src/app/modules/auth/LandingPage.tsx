import React, { useEffect, useState } from "react";
import { toAbsoluteUrl } from "_start/helpers";
import { Auth } from 'aws-amplify';

// import { useDispatch } from "react-redux";
// import * as auth from "setup/redux/actions/auth.action";
// import { login } from "setup/request/auth.request";

// const initialValues = {
//   email: "admin@demo.com",
//   password: "demo",
// };

export function LandingPage() {
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   setLoading(true);
  //     setTimeout(() => {
  //       login(initialValues.email, initialValues.password)
  //         .then(({ data: { accessToken } }) => {
  //           setLoading(false);
  //           dispatch(auth.login(accessToken));
  //         })
  //         .catch(() => {
  //           setLoading(false);
  //           // setSubmitting(false);
  //           // setStatus("The login detail is incorrect");
  //         });
  //     }, 1000);
  // }

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex row h-100 w-100 m-0 landing" style={{backgroundImage: "url(/media/pages/landing/landing-bg.jpg)"}}>
      <div className="w-50 landing-left">
        <div className="logo-title">
          <img alt="logo" src={toAbsoluteUrl("/media/logos/logo-title.png")} className="img-logo-title" />
        </div>
        <p className="sub-title">Login to Hopblox</p>
        <p className="main-title">Making Safe Travel A Reality</p>
        <div className="auth-group">
          <div className="d-flex">
            <button
              type="submit"
              id="hb_login_signin_form_submit_button"
              className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
              onClick={() => Auth.federatedSignIn()}
              // onClick={handleClick}
              // disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && <span className="indicator-label">Login</span>}
              {loading && (
                <span className="indicator-progress" style={{ display: "block" }}>
                  Please wait...{" "}
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              )}
            </button>
            <p id="forgot_password_button" className="my-auto">Forgot Password?</p>
          </div>
        </div>
      </div>
      <div className="w-50 landing-right">
        <img alt="vector" src={toAbsoluteUrl("/media/pages/landing/landing-right-vector.png")} className="landing-right-vector" />
      </div>
    </div>
  );
}
