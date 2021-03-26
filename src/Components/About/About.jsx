import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <header className="about-title">Что это?</header>
      <main className="about">
        <section className="about__description">
          <p className="about__description-info">
            Данный проект предназначен для сугубо учебных целей в области Redux
            и Route
          </p>
        </section>
      </main>
    </Fragment>
  );
}

export default About;
