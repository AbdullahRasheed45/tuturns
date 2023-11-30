"use client";
import React from "react";
import dynamic from "next/dynamic";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./signup.css";
import { useRouter } from "next/navigation";
import SignupPageImage from "../../../../public/images/whoWeServe_image3.jpg";
import GoogleSvg from "../../../../public/images/google.svg";
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));
const FacebookIcon = dynamic(() => import("@mui/icons-material/Facebook"));
const ScrollToTop = dynamic(() => import("../ScrollToTop/ScrollToTop"));
const toast = dynamic(() =>
  import("react-hot-toast").then((module) => module.toast)
);
const Bars = dynamic(() =>
  import("react-loader-spinner").then((module) => module.Bars)
);
const axios = dynamic(() => import("axios"));

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters")
        .required("Password is required"),
    }),
    onSubmit,
  });
  const loader = (
    <Bars
      height="25"
      width="25"
      color="#060606"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(values) {
    console.log(values);
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", values);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className="signup-div-main">
        <div className="signup-div-2">
          <Image
            src={SignupPageImage}
            alt="student studying from the phone with Online classs"
            className="signup-image-class"
          />
          {/* <img src="images/serve3.jpg" alt="" className="signup-image-class" /> */}
        </div>
        <div className="signup-div-3">
          <h1 className="signup-div-3-h1">Interactive Brand</h1>
          <div className="signup-div-4">
            <div className="signup-div-4-1">
              <h3 className="signup-div-4-1-h3">Register</h3>
              <p className="singup-div-4-1-p">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} title="form submission">
              <div className="signup-div-4-1-2">
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  {...formik.getFieldProps("username")}
                  placeholder="Username"
                  aria-label="Username"
                  className="signup-input"
                />
                {formik.touched.username && formik.errors.username ? (
                  <span className="signup-input-span ">
                    {formik.errors.username}
                  </span>
                ) : null}

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...formik.getFieldProps("email")}
                  placeholder="Email"
                  aria-label="Email"
                  className="signup-input"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="signup-input-span">
                    {formik.errors.email}
                  </span>
                ) : null}
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                  placeholder="Password"
                  aria-label="Password"
                  className="signup-input"
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="signup-input-span">
                    {formik.errors.password}
                  </span>
                ) : null}
              </div>
              <div className="signup-div-5 ">
                <div className="signup-div-5-1">
                  <input type="checkbox" className="signup-div-5-1-checkbox" />
                  <p className="signup-div-5-1-p">Remember Me</p>
                </div>
                <p className="signup-div-5-1-1-p">Forgot Password ?</p>
              </div>
              <div className="signup-div-5-2">
                <button
                  title="submit form"
                  type="submit"
                  className="signup-div-5-btn"
                >
                  {loading ? loader : "Sign up"}
                </button>
              </div>
            </form>
            <div className="signup-div-6">
              <div className="signup-div-6-1"></div>
              <p className="signup-div-6-1-p">or</p>
            </div>
            <div className="signup-div-6-btn">
              <Image
                src={GoogleSvg}
                className="signup-div-6-icon-1"
                alt="google icon"
              />
              Sign In With Google
            </div>
            <div className="signup-div-6-2">
              <FacebookIcon
                sx={{ fontSize: "30px", borderRadius: "50%" }}
                className="signup-div-6-2-icon"
                title="Facebook icon"
              />
              Sign In With Facebook
            </div>
          </div>
          <div className="signup-div-7">
            <p className="signup-div-7-p">
              Already have an account ?{" "}
              <Link href="/login" title="go to login page">
                <span className="signup-div-7-span">Login Now!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
