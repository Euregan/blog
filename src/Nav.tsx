import { Link } from "wouter";
import * as style from "./Nav.css";
import { Github, Twitter, Linkedin } from "lucide-react";

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.internals}>
      <li>
        <Link href="/">
          <a className={style.link}>
            <h1 className={style.linkContent}>Valentin Manceaux-Panot</h1>
          </a>
        </Link>
      </li>
    </ul>

    <ul className={style.externals}>
      <li>
        <a
          target="_blank"
          rel="noref noopener"
          href="https://github.com/euregan/"
          className={style.link}
        >
          <Github className={style.linkContent} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noref noopener"
          href="https://twitter.com/Euregan"
          className={style.link}
        >
          <Twitter className={style.linkContent} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noref noopener"
          href="https://www.linkedin.com/in/valentin-manceaux-panot-0b160a67/"
          className={style.link}
        >
          <Linkedin className={style.linkContent} />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
