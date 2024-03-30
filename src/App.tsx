import * as styles from "./App.css";
import Article from "./Article";
import Nav from "./Nav";
import Presentation from "./Presentation";
import Resume from "./Resume";
import { themeClass } from "./theme.css";
import { useLocation } from "wouter";
import * as presentation from "./articles/CreatingPresentation";

const slugify = (str: string) =>
  str
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens

const App = () => {
  const [location] = useLocation();

  return (
    <div className={themeClass}>
      <Nav />

      {/* The children are in reverse order to make the glass effect of Presentation work when hovering over an article */}
      <main className={styles.main}>
        {location !== "/resume" && (
          <>
            <Article
              {...presentation}
              link={"/post/" + slugify(presentation.title)}
            />

            <Presentation />
          </>
        )}
        {location === "/resume" && <Resume />}
      </main>
    </div>
  );
};

export default App;
