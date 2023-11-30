"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { CloseSharp, MenuSharp } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import logo from "../../../../public/images/TuTurns_Logo.svg"
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };
  let Links = [
    { name: "Who We Serve", link: "/whoWeServe" },
    { name: "Become A Tutor", link: "/bookACall" },
    // { name: "Resources", link: "/resources" },
    { name: "About", link: "/about" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="navbar-logo">
          <Link href="/" aria-label="Home">
            <div>
              <Image
                className="logo-image"
                src={logo}
                alt="TuTurns logo image"
                height={80}
                style={{width: "auto"}}
              />
            </div>
          </Link>
        </div>
        <div onClick={() => setOpen(!open)} className="hamburger">
          {open ? <CloseSharp /> : <MenuSharp />}
        </div>
        <ul className={`ul-items ${open ? "expand" : "close"}`}>
          {Links.map((link) => (
            <li key={link.name} className="nav-li">
              <Link href={link.link} className="nav-li-a">
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-divider"></li>
          {session.status === "authenticated" && session.data.user.picture && (
            <li className="nav-li-auth">
              <img
                src={session.data.user.picture}
                alt={session.data.user.name}
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </li>
          )}
          {/* {session.status === "authenticated" && !session.data.user.picture && (
            <li className="nav-li-auth">
              <img
                src={session.data.user.image}
                alt={session.data.user._doc.username}
                style={{ width: "50px", borderRadius: "50%" }}
              />
            </li>
          )} */}
          {session.status === "authenticated" && !session.data.user.name && (
            <li className="nav-li-auth">{session.data.user._doc.username}</li>
          )}
          {session.status === "authenticated" && (
            <li className="nav-li-auth">{session.data.user.name}</li>
          )}
          {session.status === "authenticated" ? (
            <li className="nav-li">
              <Link onClick={handleSignOut} href="/" className="nav-li-a">
                Log Out
              </Link>
            </li>
          ) : (
            <li
              className={
                session.status === "authenticated" ? "nav-li-auth" : "nav-li"
              }
            >
              <Link href="/login" className="nav-li-a">
                Log In
              </Link>
            </li>
          )}

          <li>
            <button
              onClick={() => {
                router.push("/bookACall");
              }}
              className="nav-button"
            >
              Book A Call
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
