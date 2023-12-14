"use client";
import NavBar from "../navBar/NavBar";
import styles from "./header.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logo}
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <NavBar navOpen={nav} onClick={toggleNav} />
        <button className={styles.hamburger} onClick={toggleNav}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}
