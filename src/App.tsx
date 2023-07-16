import * as styles from "./App.css";
import authentication from "./assets/authentication - 4.png";
import ai from "./assets/ai in society - 3.png";
import elm from "./assets/elm.png";
import Article from "./Article";
import Nav from "./Nav";
import Presentation from "./Presentation";
import { themeClass } from "./theme.css";

const App = () => {
  return (
    <div className={themeClass}>
      <Nav />

      {/* The children are in reverse order to make the glass effect of Presentation work when hovering over an article */}
      <main className={styles.main}>
        <Article
          title="What place for AI in our society?"
          illustration={ai}
          link="/post/ai"
        >
          {content}
        </Article>
        <Article
          title="Authentication without a library"
          illustration={authentication}
          link="/post/authentication"
        >
          {content}
        </Article>
        <Article
          title="Building apps that do not crash"
          illustration={elm}
          link="/post/elm"
        >
          {content}
        </Article>

        <h2 className={styles.postSectionTitle}>My latest posts:</h2>

        <Presentation />
      </main>
    </div>
  );
};

export default App;

const content = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a
      diam sollicitudin tempor id eu. Penatibus et magnis dis parturient montes.
      Eget egestas purus viverra accumsan in. Quis ipsum suspendisse ultrices
      gravida dictum fusce. Eros in cursus turpis massa tincidunt dui ut ornare
      lectus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
      Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Massa
      massa ultricies mi quis hendrerit dolor magna. Odio ut sem nulla pharetra
      diam sit amet nisl suscipit. Mauris rhoncus aenean vel elit scelerisque
      mauris pellentesque. Quisque non tellus orci ac. Diam quam nulla porttitor
      massa. Egestas purus viverra accumsan in nisl nisi scelerisque.
      Suspendisse interdum consectetur libero id faucibus.
    </p>
    <p>
      Sit amet venenatis urna cursus. Accumsan in nisl nisi scelerisque eu.
      Aliquet bibendum enim facilisis gravida. Nunc sed velit dignissim sodales
      ut eu sem integer vitae. Libero nunc consequat interdum varius sit amet
      mattis vulputate enim. Arcu risus quis varius quam quisque id. Tempus
      egestas sed sed risus pretium quam. Ut ornare lectus sit amet.
      Pellentesque eu tincidunt tortor aliquam. At tellus at urna condimentum
      mattis pellentesque. Nec sagittis aliquam malesuada bibendum arcu. Nulla
      facilisi nullam vehicula ipsum a arcu cursus.
    </p>
    <p>
      Aliquam id diam maecenas ultricies mi eget mauris pharetra. Elementum eu
      facilisis sed odio morbi quis commodo. Faucibus in ornare quam viverra.
      Vulputate odio ut enim blandit volutpat maecenas. Turpis nunc eget lorem
      dolor sed viverra ipsum nunc. Eget gravida cum sociis natoque penatibus et
      magnis dis parturient. In nisl nisi scelerisque eu. Viverra aliquet eget
      sit amet tellus cras. Nisl purus in mollis nunc sed id semper. Tristique
      risus nec feugiat in fermentum posuere urna nec. Nisi quis eleifend quam
      adipiscing vitae proin sagittis. In nibh mauris cursus mattis molestie a
      iaculis at erat.
    </p>
    <p>
      Aenean et tortor at risus. Libero nunc consequat interdum varius sit amet
      mattis vulputate. Libero volutpat sed cras ornare. Quam quisque id diam
      vel quam. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
      semper eget. Habitasse platea dictumst quisque sagittis. Pretium viverra
      suspendisse potenti nullam ac. Aliquam ut porttitor leo a diam. Viverra
      orci sagittis eu volutpat odio. Non nisi est sit amet facilisis. Viverra
      adipiscing at in tellus integer feugiat scelerisque. Nunc vel risus
      commodo viverra maecenas accumsan. Posuere ac ut consequat semper. Ut sem
      nulla pharetra diam sit amet nisl. Ultrices vitae auctor eu augue. Tellus
      in hac habitasse platea dictumst vestibulum rhoncus. Eget velit aliquet
      sagittis id consectetur.
    </p>
    <p>
      Nunc non blandit massa enim nec dui nunc mattis enim. Quis imperdiet massa
      tincidunt nunc pulvinar sapien et. Imperdiet massa tincidunt nunc pulvinar
      sapien. Eros in cursus turpis massa. Pulvinar neque laoreet suspendisse
      interdum. Lacus sed turpis tincidunt id. Facilisi etiam dignissim diam
      quis enim lobortis scelerisque. Aenean et tortor at risus viverra
      adipiscing. Auctor neque vitae tempus quam pellentesque nec nam aliquam
      sem. At erat pellentesque adipiscing commodo elit at imperdiet. Integer
      enim neque volutpat ac tincidunt vitae semper quis lectus. Lacus vel
      facilisis volutpat est velit egestas dui. In pellentesque massa placerat
      duis ultricies lacus sed turpis tincidunt. Nunc sed velit dignissim
      sodales ut eu.
    </p>
  </>
);
