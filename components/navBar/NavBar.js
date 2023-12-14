import styles from "./navbar.module.css";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

export default function NavBar({ navOpen, onClick }) {
  return (
    <nav className={navOpen ? `${styles.nav} ${styles.openNav}` : styles.nav}>
      <ul>
        <li>
          <Link href="/#about" onClick={onClick}>
            About us
          </Link>
        </li>
        <li>
          <Link href="/#services" onClick={onClick}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/#prices" onClick={onClick}>
            Prices
          </Link>
        </li>
        <li>
          <Link href="/#contact" onClick={onClick}>
            Contact
          </Link>
        </li>
      </ul>
      <button className={styles.close_nav_btn} onClick={onClick}>
        <GrClose className={styles.icon} />
      </button>
    </nav>
  );
}
