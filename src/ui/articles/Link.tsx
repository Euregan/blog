import { Link as WouterLink } from "wouter";
import * as style from "./Link.css";
import { ExternalLink } from "lucide-react";

const isExternal = (href: string): boolean => {
  try {
    return new URL(href).host !== window.location.host;
  } catch {
    return false;
  }
};

type LinkProps = {
  href: string;
  children: string;
};

const Link = ({ href, children }: LinkProps) => (
  <WouterLink href={href}>
    <a
      className={style.link}
      target={isExternal(href) ? "_blank" : undefined}
      rel={isExternal(href) ? "noreferrer noopener" : undefined}
    >
      {children}
      {isExternal(href) && <ExternalLink size="0.9em" />}
    </a>
  </WouterLink>
);

export default Link;
