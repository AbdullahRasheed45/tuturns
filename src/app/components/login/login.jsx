"use client";

import "./login.css";
import React from "react";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import LoginPageImage from "../../../../public/images/loginPage.jpg";
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

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
      width="80"
      color="#f5f5f5"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
  const router = useRouter();
  // const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  async function onSubmit(values) {
    try {
      setLoading(true);
      const status = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });
      console.log(status);

      if (status.ok) {
        router.push(status.url);
      }
      toast.success("Login Success");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <>
      <ScrollToTop />
      <div className="login-div-main">
        <div className="login-div-2">
          <Image src={LoginPageImage} className="image-class" />
        </div>
        <div className="login-div-3">
          <h1 className="login-div-3-h1">Interactive Brand</h1>
          <div className="login-div-4">
            <div className="login-div-4-1">
              <h3 className="login-div-4-1-h3">Login</h3>
              <p className="login-div-4-1-p">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="login-div-4-1-2" title="Email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...formik.getFieldProps("email")}
                  placeholder="Email"
                  className="login-input"
                  aria-label="Enter Email"
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="login-input-span ">
                    {formik.errors.email}
                  </span>
                ) : (
                  <></>
                )}
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className="login-input"
                  aria-label="Enter Password"
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="login-input-span">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="login-div-5">
                <div className="login-div-5-1"></div>
                <p className="login-div-5-1-p">Forgot Password ?</p>
              </div>
              <div className="login-div-5-2">
                <button type="submit" className="login-div-5-btn">
                  {loading ? loader : "Log in"}
                </button>

                <Link href="/signup" title="Sign Up Now">
                  <button className="login-div-5-btn-signup">Register</button>
                </Link>
              </div>
            </form>
            <div className="login-div-6">
              <div className="login-div-6-1"></div>
              <p className="login-div-6-1-p">or</p>
            </div>
            <button onClick={handleGoogleSignIn} className="login-div-6-btn">
              <Image
                src={GoogleSvg}
                alt="google icon"
                className="login-div-6-icon-1"
              />
              Sign In With Google
            </button>
            <div className="login-div-6-2">
              <FacebookIcon
                sx={{ fontSize: "30px", borderRadius: "50%" }}
                className="login-div-6-2-icons"
              />
              Sign In With Facebook
            </div>
          </div>
          <div className="login-div-7">
            <p className="login-div-7-p">
              Dont have account?{" "}
              <Link href="/signup" title="Sign up">
                <span className="login-div-7-span">Sign up for free</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
