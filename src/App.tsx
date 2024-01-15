import * as styles from "./App.css";
import Nav from "./Nav";
import Presentation from "./Presentation";
import Resume from "./Resume";
import { themeClass } from "./theme.css";
import { useLocation } from "wouter";

const App = () => {
  const [location] = useLocation();

  return (
    <div className={themeClass}>
      <Nav />

      {/* The children are in reverse order to make the glass effect of Presentation work when hovering over an article */}
      <main className={styles.main}>
        {location !== "/resume" && <Presentation />}
        {location === "/resume" && <Resume />}
      </main>
    </div>
  );
};

export default App;
