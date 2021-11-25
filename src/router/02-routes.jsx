import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom";

function useFetch(url) {
  const [state, setState] = useState([]);
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
  // dynamic routes based on fetch Data
  const coffees = useFetch("https://api.sampleapis.com/coffee/hot");
  return (
    <main>
      {!coffees.length ? (
        <div>Loading...</div>
      ) : (
        <nav>
          {coffees.map((coffee) => (
            <NavLink
              key={coffee.id}
              to={coffee.title}
              style={{ display: "block", width: "fit-content" }}
            >
              {coffee.title}
            </NavLink>
          ))}
        </nav>
      )}
    </main>
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
  // Wraps list of Route components inside Routes component
  // Nested routes can be further defined in the Route component
  // Adding a no match route with component (similiar to error 404) if can't find component.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/coffees" element={<Coffees />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
