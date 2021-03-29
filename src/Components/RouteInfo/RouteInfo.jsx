import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

function RouteInfo() {
  const location = useLocation();
  return (
    <Fragment>
      <header>
        <h1 className="route-info__title">What in route?</h1>
      </header>
      <main className="router-info__description">
        <section>
          <strong className="router-info__path-info">
            {location.pathname}
          </strong>
        </section>
      </main>
    </Fragment>
  );
}

export default RouteInfo;
