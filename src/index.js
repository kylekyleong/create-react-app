import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import App from "./main/01-basic";
// import App from "./main/02-render";
// import App from "./main/03-props";
// import App from "./main/04-state";
// import App from "./main/05-event";
// import App from "./main/06-list";
// import App from "./main/07-form";
// import App from "./main/08-liftingStateUp";
// import App from "./main/09-composition";

// import App from "./hooks/01-useState";
// import App from "./hooks/02-useEffect";
// import App from "./hooks/03-useRef";
// import App from "./hooks/04-useLayoutEffect";
// import App from "./hooks/05-useMemo";
// import App from "./hooks/06-useCallback";
// import App from "./hooks/07-useReducer";
// import App from "./hooks/08-useContext";

// import App from "./advance/01-fragments";
// import App from "./advance/02-errorBoundaries";
// import App from "./advance/03-codeSplitting";
// import App from "./advance/04-context";
// import App from "./advance/05-refs";
// import App from "./advance/06-highOrderClassComponent";
// import App from "./advance/07-highOrderFunctionalComponent";
// import App from "./advance/08-pureComponent";
// import App from "./advance/09-portals";
// import App from "./advance/10-profiler";
// import App from "./advance/11-renderPropsClass";
// import App from "./advance/12-renderPropsFunctional";

// import App from "./router/01-links";
// import App from "./router/02-routes";
// import App from "./router/03-useParams";
// import App from "./router/04-activeLinks";
// import App from "./router/05-useSearchParams";
// import App from "./router/06-useLocation";
// import App from "./router/07-useNavigate";

// import App from "./redux/01-appStructure";

import App from "./example/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
