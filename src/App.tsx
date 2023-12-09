import * as styles from "./App.css";
import Nav from "./Nav";
import Presentation from "./Presentation";
import { themeClass } from "./theme.css";

const App = () => {
  return (
    <div className={themeClass}>
      <Nav />

      {/* The children are in reverse order to make the glass effect of Presentation work when hovering over an article */}
      <main className={styles.main}>
        <Presentation />
      </main>
    </div>
  );
};

export default App;
