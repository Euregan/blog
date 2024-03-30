import { useLanguage } from "../hooks/useLanguage";
import Code from "../ui/articles/Code";
import Header from "../ui/articles/Header";
import Link from "../ui/articles/Link";
import Paragraph from "../ui/articles/Paragraph";

/* eslint-disable react-refresh/only-export-components */
export { default as illustration } from "../assets/creating presentation.png";

export const title = "Creating a presentation from scratch";

export const date = new Date();

export const Content = () => {
  const { translate } = useLanguage();

  return (
    <>
      <Paragraph>
        {{
          en: (
            <>
              Earlier this year, I gave a presentation on what a developer is.
              Rather than using some presentation software like a sane person, I
              decided to make my own engine. While this may appear easy enough
              at first (just a couple pages with some CSS right?), I wanted to
              be able to have notes for each slide, to step through various
              stages in a slide, to be able to preview the current and next
              slide, and to run a survey to the attendees. This is the story of
              how I made all this work.
            </>
          ),
          fr: (
            <>
              Plus tôt cette année, j'ai donné une présentation sur ce qu'était
              un développeur. Plutôt que d'utiliser une appli de présentation
              comme quelqu'un de sain d'esprit, j'ai décidé de créer mon propre
              moteur. Même si cela peut sembler assez simple en apparence (c'est
              juste une paire de pages avec du CSS après tout), je voulais
              pouvoir avoir des notes pour chaque slide, avoir un aperçu de la
              slide actuelle et la suivante, ainsi que de faire remplir un
              questionnaire aux participants.
            </>
          ),
        }}
      </Paragraph>

      <Header>Picking the stack</Header>

      <Paragraph>
        {{
          en: (
            <>
              For my personal projects nowadays, I oscillate between using Vite
              and Next. Whenever I don't need any backend, or if I want to do
              something very specific, I use Vite. For example, this blog uses
              Vite so I can craft the article transition easily. It would have
              made sense to rely on Vite as well for the presentation, but I
              wanted to run a survey, and so I needed a database, and an API, so
              I settled on using Next.
            </>
          ),
          fr: <></>,
        }}
      </Paragraph>
      <Paragraph>
        {{
          en: (
            <>
              Since I used Next, I didn't need much anything else. Prisma is my
              go-to for any database interaction, and Vanilla Extract is the one
              library I can't live without for styling, so both were an instant
              pick. I did use my{" "}
              <Link href="https://www.npmjs.com/package/valentin">
                personal package
              </Link>{" "}
              to speed up developing the API related stuff. Used with zod, it
              provides easy to use functions to call and setup the API, making
              sure incoming values are validated and properly typed.
            </>
          ),
          fr: <></>,
        }}
      </Paragraph>

      <Header>Setting up the slides</Header>

      <Paragraph>
        {{
          en: (
            <>
              The first step, and the easiest, was to setup the slides. I
              created a bunch of numbered pages (<pre>/presentation/1</pre>,{" "}
              <pre>/presentation/2</pre>) with their content. Using the{" "}
              <Link href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern">
                layout
              </Link>{" "}
              at the <pre>/presentation</pre> level, I set up the navigation:
              Left-click to move forward, right-click to move backward. We can
              write a pretty straightforward <pre>useEffect</pre> hook for that:
            </>
          ),
          fr: <></>,
        }}
      </Paragraph>

      <Code>
        {`// ${translate({ en: "We first get the current slide number from the path", fr: "On commence par récupérer le numéro de la slide actuelle du path" })}
const slideNumber = parseInt(usePathname().split("/").at(-1)!);

useEffect(() => {
  const next = () => {
    router.push((slideNumber + 1).toString());
  };
  const previous = (event: MouseEvent) => {
    // ${translate({ en: "In case of the right click, we prevent the default context menu", fr: "Pour le click droit, on évite d'affiche le menu contextuel par défaut" })}
    event.preventDefault();
    router.push((slideNumber - 1).toString());
  };

  document.addEventListener("click", next);
  document.addEventListener("contextmenu", previous);

  return () => {
    document.removeEventListener("click", next);
    document.removeEventListener("contextmenu", previous);
  };
}, []);`}
      </Code>

      <Paragraph>
        {{
          en: (
            <>
              So far, it doesn't have any stop condition, so we can go below
              zero, and above the number of slides. I noticed that a bit later,
              and we'll come back to it later too.
            </>
          ),
          fr: <></>,
        }}
      </Paragraph>
    </>
  );
};
