import * as style from "./Resume.css";
import { useLanguage } from "./hooks/useLanguage";

const monthToLanguage = (
  language: string,
  month:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December"
) =>
  new Intl.DateTimeFormat(language, { month: "long" }).format(
    new Date(
      Date.UTC(
        2021,
        {
          January: 0,
          February: 1,
          March: 2,
          April: 3,
          May: 4,
          June: 5,
          July: 6,
          August: 7,
          September: 8,
          October: 9,
          November: 10,
          December: 11,
        }[month]
      )
    )
  );

const Resume = () => {
  const { language } = useLanguage();

  return (
    <main className={style.resume}>
      <section className={style.header}>
        <h1 className={style.name}>
          <span className={style.namePart}>Valentin</span>{" "}
          <span className={style.namePart}>Manceaux-Panot</span>
        </h1>
        <img src="/me.jpg" className={style.portrait} />

        <ul className={style.contact}>
          <li className={style.details}>0615203271</li>
          <li className={style.details}>
            <a href="mailto:valentin@mcxp.io">valentin@mcxp.io</a>
          </li>
          <li className={style.details}>
            <a href="https://github.com/euregan">Github</a>
          </li>
          <li className={style.details}>
            <a href="https://fr.linkedin.com/in/valentin-manceaux-panot-0b160a67">
              LinkedIn
            </a>
          </li>
        </ul>

        <ul className={style.miscellaneous}>
          <li className={style.details}>
            {language === "en" && (
              <>Fluent in both English and French, both spoken and written</>
            )}
            {language === "fr" && (
              <>Anglais et français lu et parlés couramment</>
            )}
          </li>
        </ul>

        <p>
          {language === "en" && (
            <>
              Senior engineer and Tech lead, I am product oriented and I strive
              for quality. I am passionate about UX and UI, and I know that good
              apps must have good performances.
            </>
          )}
          {language === "fr" && (
            <>
              Senior engineer et Tech lead, je suis orienté produit et je
              m'aspire à en garantir la qualité. Je suis passionné par
              l'expérience utilisateur et l'UI, et je sais que de bonnes
              applications doivent avoir de bonnes performances.
            </>
          )}
        </p>
      </section>

      <section className={style.content}>
        <ul className={style.experiences}>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              Zygon
              <div className={style.dates}>
                {monthToLanguage(language, "May")} 2024 -{" "}
                {language === "en" && "now"}
                {language === "fr" && "aujourd'hui"}
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Technical Lead
                  <div className={style.technologies}>
                    Typescript, React, Node, GraphQL, PostgreSQL
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on foundational topics by replacing TypeGraphQL
                      with a faster generator, industrialized CI/CD processes,
                      and implemented the publication of a CLI on npm. In
                      parallel, I developed various features, ranging from
                      interfaces with Teams, Slack and Google Chat to data
                      retrieval from Microsoft Entra and Okta.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur des sujet de fond en remplaçant
                      TypeGraphQL par un générateur plus rapide, j'ai
                      industrialisé les processus CI/CD, j'ai mis en place la
                      publication d'un CLI sur npm. J'ai en parallèle développé
                      diverses fonctionnalités, allant d'interfaçage avec Teams,
                      Slack et Google Chat à de la récupération de données
                      depuis Microsoft Entra et Okta.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              Tint
              <div className={style.dates}>
                {monthToLanguage(language, "September")} 2021 -{" "}
                {monthToLanguage(language, "January")} 2024
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Technical Lead
                  <div className={style.dates}>
                    {monthToLanguage(language, "January")} 2023 -{" "}
                    {monthToLanguage(language, "January")} 2024
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Leading a team on technical projects, feature
                      implementation and general web app maintenance on an
                      assurance product. Planned and executed a complete
                      permission system rework on both the backend (GraphQL) and
                      frontend (React app). Implemented a complete rework of a
                      risk transfer system for assurances between legal
                      entities.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      Gestion d'une équipe sur des projets techniques,
                      l'implémentation de fonctionnalités et la maintenance
                      générale d'une application web sur un produit d'assurance.
                      J'ai planifié et exécuté une refonte complète du système
                      de permissions à la fois sur le backend (GraphQL) et le
                      frontend (application React). J'ai également mis en œuvre
                      une refonte complète d'un système de transfert de risques
                      pour les assurances entre entités légales.
                    </>
                  )}
                </div>
                <div className={style.technologies}>
                  Typescript, React, Node, GraphQL, PostgreSQL
                </div>
              </li>

              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Senior Design Engineer
                  <div className={style.dates}>
                    {monthToLanguage(language, "July")} 2022 -{" "}
                    {monthToLanguage(language, "December")} 2022
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Planned and executed the creation of a Design System hand
                      in hand with design from scratch. Designed the API of each
                      component to make sure the UX and UI of the web app was
                      consistent, and that engineers could deliver reliable
                      features quickly and efficiently.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai planifié et mis en œuvre la création d'un Design
                      System en collaboration étroite avec l'équipe de design à
                      partir de zéro. J'ai conçu l'API de chaque composant pour
                      garantir la cohérence de l'expérience utilisateur et de
                      l'interface utilisateur de l'application web, permettant
                      aux ingénieurs de livrer des fonctionnalités fiables
                      rapidement et efficacement.
                    </>
                  )}
                </div>
                <div className={style.technologies}>
                  Typescript, React, Node, GraphQL, PostgreSQL
                </div>
              </li>

              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Senior Founding Engineer
                  <div className={style.dates}>
                    {monthToLanguage(language, "September")} 2021 -{" "}
                    {monthToLanguage(language, "June")} 2022
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various assurance system and web app
                      improvements, feature implementation and general
                      maintenance. New features include large data exports and
                      imports, recurring assurance contract management, various
                      assurance contract lifecycle improvements and metrics
                      dashboards creation.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes
                      d'assurance et des applications web, implémentation de
                      fonctionnalités et maintenance générale. Les nouvelles
                      fonctionnalités comprennent l'exportation et l'importation
                      de grandes quantités de données, la gestion des contrats
                      d'assurance récurrents, diverses améliorations du cycle de
                      vie des contrats d'assurance et la création de tableaux de
                      bord de suivi.
                    </>
                  )}
                </div>
                <div className={style.technologies}>
                  Typescript, React, Node, GraphQL, PostgreSQL
                </div>
              </li>
            </ul>
          </li>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              HeyTeam
              <div className={style.dates}>
                {monthToLanguage(language, "February")} 2021 -{" "}
                {monthToLanguage(language, "September")} 2021
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Développeur web
                  <div className={style.technologies}>Vue, Laravel, MySQL</div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various system and web app improvements, feature
                      implementation and general maintenance for an HR
                      onboarding and offboarding platform. New features include
                      automated emailing, Google Calendar synchronization and
                      recurring events management.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes et
                      des applications web, l'implémentation de fonctionnalités
                      et la maintenance générale pour une plateforme de gestion
                      RH. Les nouvelles fonctionnalités comprennent l'envoi
                      automatisé d'e-mails, la synchronisation avec Google
                      Calendar et la gestion des événements récurrents.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              Boursorama
              <div className={style.dates}>
                {monthToLanguage(language, "September")} 2018 -{" "}
                {monthToLanguage(language, "January")} 2021
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Développeur web
                  <div className={style.technologies}>
                    AngularJS, Vue, Symfony, Node, MySQL
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various system and web app improvements, feature
                      implementation and general maintenance for an online bank.
                      New features include optimizing a stock quotes streaming
                      system, a real estate loan simulator, donation to
                      associations system.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes et
                      des applications web, l'implémentation de fonctionnalités
                      et la maintenance générale pour une banque en ligne. Les
                      nouvelles fonctionnalités comprennent l'optimisation d'un
                      système de diffusion de cotation boursière, un simulateur
                      de prêt immobilier, et un système de dons aux
                      associations.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>

          <li className={style.company}>
            <h3 className={style.companyTitle}>
              Versusmind
              <div className={style.dates}>
                {monthToLanguage(language, "December")} 2016 -{" "}
                {monthToLanguage(language, "August")} 2018
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Développeur web
                  <div className={style.technologies}>
                    AngularJS, Vue, Symfony, Node, MySQL
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various system and web app improvements, feature
                      implementation and general maintenance for an online bank.
                      New features include setting up a KYC questionnaire,
                      reworking the flow to open a new account and payment with
                      a credit card.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes et
                      des applications web, l'implémentation de fonctionnalités
                      et la maintenance générale pour une banque en ligne. Les
                      nouvelles fonctionnalités comprennent la mise en place
                      d'un questionnaire KYC, la refonte du processus
                      d'ouverture de nouveau compte et le paiement par carte
                      bancaire.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              Kalidea
              <div className={style.dates}>
                {monthToLanguage(language, "September")} 2014 -{" "}
                {monthToLanguage(language, "November")} 2016
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Développeur web
                  <div className={style.technologies}>
                    Silverlight, VB.Net, SQL Server
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various system and web app improvements, feature
                      implementation and general maintenance for accounting and
                      activity management software.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes et
                      des applications web, l'implémentation de fonctionnalités
                      et la maintenance générale pour des logiciels de
                      comptabilité et de gestion d'activités de commité
                      d'entreprise.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>
          <li className={style.company}>
            <h3 className={style.companyTitle}>
              plugmystore
              <div className={style.dates}>
                {monthToLanguage(language, "April")} 2014 -{" "}
                {monthToLanguage(language, "August")} 2014
              </div>
            </h3>
            <ul className={style.jobs}>
              <li className={style.job}>
                <h4 className={style.jobTitle}>
                  Développeur web
                  <div className={style.technologies}>
                    Zend Framework, MySQL
                  </div>
                </h4>
                <div className={style.jobDescription}>
                  {language === "en" && (
                    <>
                      Worked on various system and web app improvements, feature
                      implementation and general maintenance for a marketplace
                      management platform.
                    </>
                  )}
                  {language === "fr" && (
                    <>
                      J'ai travaillé sur diverses améliorations des systèmes et
                      des applications web, l'implémentation de fonctionnalités
                      et la maintenance générale pour une plateforme de gestion
                      de marketplace.
                    </>
                  )}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Resume;
