import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";

const URL = "https://api.sampleapis.com/coffee/hot/";

function useFetch(url) {
  const [state, setState] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      response.json().then((state) => setState(state));
    }
    fetchData();
  }, [url, setState]);
  return state;
}

function Coffees() {
  const coffees = useFetch(URL);
  // isActive value can be achieved from the Navlink component instead of the Link component
  return (
    <div>
      {!coffees ? (
        <div style={{ width: "50%", float: "left" }}>Loading...</div>
      ) : (
        <nav style={{ width: "50%", float: "left" }}>
          {coffees.map((coffee) => (
            <NavLink
              key={coffee.id}
              to={`/coffees/${coffee.id.toString()}`}
              style={(arg) =>
                arg.isActive
                  ? { display: "block", width: "fit-content", color: "red" }
                  : { display: "block", width: "fit-content", color: "black" }
              }
            >
              {coffee.title}
            </NavLink>
          ))}
        </nav>
      )}
      <Outlet />
    </div>
  );
}

function Coffee() {
  const params = useParams();
  const coffee = useFetch(URL + params.coffeeId);
  return (
    <pre style={{ width: "50%", float: "left", whiteSpace: "pre-wrap" }}>
      {JSON.stringify(coffee, null, 2)}
    </pre>
  );
}

function About() {
  return <div>About</div>;
}

function App() {
  return (
    <div>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/coffees">Coffees</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function _App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="coffees" element={<Coffees />}>
            <Route path=":coffeeId" element={<Coffee />} />
            <Route
              index
              element={
                <div style={{ width: "50%", float: "left" }}>
                  <p>Select a coffee.</p>
                </div>
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>There's nothing here!</p>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
