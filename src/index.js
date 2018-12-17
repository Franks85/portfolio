import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ErrorBoundary } from "react-error-boundary";

const MyFallbackComponent = ({ componentStack, error }) => (
  <div>
    <p>
      <strong>Oops! An error occured!</strong>
    </p>
    <p>Here’s what we know…</p>
    <p>
      <strong>Error:</strong> {error.toString()}
    </p>
    <p>
      <strong>Stacktrace:</strong> {componentStack}
    </p>
  </div>
);

const app = (
  <ErrorBoundary FallbackComponent={MyFallbackComponent}>
    <App />
  </ErrorBoundary>
);

/* if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
} */

ReactDOM.render(app, document.getElementById("root"));

registerServiceWorker();
