import { Link } from "wouter";
import * as styles from "./Nav.css";

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a className={styles.item}>
        <h1>Valentin Manceaux-Panot</h1>
      </a>
    </Link>
  </nav>
);

export default Nav;
