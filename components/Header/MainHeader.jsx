


import Link from "next/link";
import Image from "next/image";
import logoimg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import MainBackground from "./MainBackground";
import Navlink from "./Nav-link";

export default function MainHeader() {
 
  return (
    <>
    <MainBackground/>
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoimg.src} alt="Next level Food" width={100} height={50} priority />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
           <Navlink href='/meals'>Browse Meals</Navlink>
          </li>
          <li>
          <Navlink href='/community'>Foodies Community</Navlink>
          </li>
         
        </ul>
      </nav>
    </header>
    </>
  );
}

 