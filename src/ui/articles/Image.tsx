import { Language, useLanguage } from "../../hooks/useLanguage";
import * as style from "./Image.css";

type ImageProps = {
  source: string;
  legend: Record<Language, string>;
};

const Image = ({ source, legend }: ImageProps) => {
  const { language } = useLanguage();

  return (
    <figure className={style.figure}>
      <img
        src={source}
        className={style.image}
        alt={legend[language]}
        title={legend[language]}
      />
      <figcaption className={style.caption}>{legend[language]}</figcaption>
    </figure>
  );
};

export default Image;
