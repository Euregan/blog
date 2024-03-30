import * as style from "./Header.css";

type HeaderProps = {
  children: string;
};

const Header = ({ children }: HeaderProps) => (
  <h3 className={style.header}>{children}</h3>
);

export default Header;
