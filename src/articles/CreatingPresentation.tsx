import { useLanguage } from "../hooks/useLanguage";
import Code from "../ui/articles/Code";
import Header from "../ui/articles/Header";
import Link from "../ui/articles/Link";
import Paragraph from "../ui/articles/Paragraph";
import SideNote from "../ui/articles/SideNote";

import firstStep from "../assets/creating-presentation/first-step.png";
import secondStep from "../assets/creating-presentation/second-step.png";
import TwoColumns from "../ui/TwoColumns";
import Image from "../ui/articles/Image";

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
        }}
      </Paragraph>

      <Header>Implementing multi-step slides</Header>

      <Paragraph>
        {{
          en: (
            <>
              I wanted to be able to have multiple steps in a given slides.
              Things like multiple definitions, appearing as I talk about them,
              so the attendees are not overwhelmed by walls of text on slide
              switch.
            </>
          ),
        }}
      </Paragraph>

      <TwoColumns>
        <Image
          source={firstStep}
          legend={{
            en: "The first step of a slide",
            fr: "La première étape d'une slide",
          }}
        />
        <Image
          source={secondStep}
          legend={{
            en: "The second step of a slide",
            fr: "La deuxième étape d'une slide",
          }}
        />
      </TwoColumns>

      <Paragraph>
        {{
          en: (
            <>
              For that, I needed to somehow plug into the slide navigation logic
              that lived in the layout component. The way Next does things
              though makes it very hard to interact with the parent layout from
              within a page. So I took the code above, and made it a simple
              hook. Now that I had something I could call from anywhere, I had
              to add the possibility for the hook to handle steps. I first tried
              to add the feature to the hook, but the duality of behaviour that
              resulted in this choice made it very awkward to properly write the
              hook. The code was messy, full of `if`/`else` and very hard to
              understand. So I decided to split the hook in two: One to simply
              handle the forward and back interactions, and the other to handle
              the steps of a given slide.
            </>
          ),
        }}
      </Paragraph>
      <Paragraph>
        {{
          en: (
            <>
              For that, I needed to somehow plug into the slide navigation logic
              that lived in the layout component. The way Next does things
              though makes it very hard to interact with the parent layout from
              within a page. So I took the code above, and made it a simple
              hook. Now that I had something I could call from anywhere, I had
              to add the possibility for the hook to handle steps. I first tried
              to add the feature to the hook, but the duality of behaviour that
              resulted in this choice made it very awkward to properly write the
              hook. The code was messy, full of <pre>if</pre>/<pre>else</pre>{" "}
              and very hard to understand. So I decided to split the hook in
              two: One to simply handle the forward and back interactions, and
              the other to handle the steps of a given slide.
            </>
          ),
        }}
      </Paragraph>
      <Paragraph>
        {{
          en: (
            <>
              Now I was facing a new problem: I needed to sync data between the
              two hooks. In order for the first one to decide between switching
              step and switching slides, it needed to access the context of the
              second hook. I chose to use zustand, as it is lightweight,
              straightforward and I know it well.
            </>
          ),
        }}
      </Paragraph>

      <SideNote>
        {{
          en: (
            <>
              I could also have employed the same{" "}
              <Link href="https://github.com/pmndrs/zustand/commit/1315ab61921ba6143086b01dc58b49cac4c4feaf#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346">
                trick as zustand
              </Link>
              , which simply uses locally scoped variables outside of the hook,
              but I’m pretty sure they didn’t commit 1018 times (at time of
              writing) just for fun, so I relied on the library rather than the
              trick to gain some time. There is a fine line between re
              implementing something yourself, and using a library that fits the
              usage. Personally I think zustand always make sense, because it is
              specific in what it does, and since it’s a hook creator, it is
              easy to switch it out for something else if needed.
            </>
          ),
        }}
      </SideNote>

      <Header>Creating the notes page</Header>

      <Header>Adding the questionnaire</Header>
    </>
  );
};
