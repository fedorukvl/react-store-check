import React, { Fragment } from "react";
import AuthForm from "../Auth/Auth-form";
import ResultWindow from "../ResultWindow/Result-window";

function StoreInfo() {
  return (
    <Fragment>
      <header>
        <h1 className="app__title">Whats in store</h1>
      </header>
      <main className="app__info-windows">
        <section>
          <ResultWindow />
        </section>
        <section>
          <AuthForm />
        </section>
      </main>
    </Fragment>
  );
}
export default StoreInfo;
