"use client";
import React from "react";
import "./Footer.css";
import {
  FacebookSharp,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../../../../public/images/TuTurns_Logo.svg";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="footer">
        <div className="footer-logo-left">
          <div>
            <Link href="/" title="Go to Home Page">
              <div>
                <Image
                  className="footer-image"
                  src={logo}
                  alt="TuTurns logo image"
                  height={150}
                  style={{width: "350px"}}
                  />
              </div>
            </Link>
          </div>
          <div className="footer-social-icons">
            <Link href="/" title="Visit our Facebook Page">
              <span>
                <FacebookSharp />
              </span>
            </Link>
            <Link href="/" title="Visit our Instagram Profile">
              <span>
                <Instagram />
              </span>
            </Link>
            <Link href="/" title="Follow us on Twitter">
              <span>
                <Twitter />
              </span>
            </Link>
            <Link href="/" title="Connect on LinkedIn">
              <span>
                <LinkedIn />
              </span>
            </Link>
          </div>
        </div>
        <div className="footer-left">
          <div className="footer-left-div1">
            <h2>Who We Serve</h2>
            <Link href="/">
              <h3>K-12 School or District</h3>
            </Link>
            <Link href="/">
              <h3>Olevel Alevel</h3>
            </Link>
          </div>
          <div className="footer-left-div2">
            <h2>Resources</h2>
            <Link href="/">
              <h3>Visit Resource Hub</h3>
            </Link>
            <Link href="/">
              <h3>Articles</h3>
            </Link>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-center-div">
            <h2>About</h2>
            <Link href="/">
              <h3>Company</h3>
            </Link>
            <Link href="/">
              <h3>Newsroom</h3>
            </Link>
            <Link href="/">
              <h3>Privacy And Trust</h3>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-div">
            <h2>Support</h2>
            <Link href="/">
              <h3>Become a Tutor</h3>
            </Link>
            <Link href="/">
              <h3>Contact Us</h3>
            </Link>
            <Link href="/">
              <h3>Help Center</h3>
            </Link>
            <Link href="/">
              <h3>Code Of Conduct</h3>
            </Link>
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="footer-btn"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          &copy; 2023. Tuturn | All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
