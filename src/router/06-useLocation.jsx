import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet,
  NavLink,
  useParams,
  useSearchParams,
  useLocation,
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

function QueryNavLink({ to, ...props }) {
  // useLocation: tell us about the location
  // access URL params using useSearchParams
  const location = useLocation();
  const [params] = useSearchParams();
  console.log(params);
  return <NavLink to={to + location.search} {...props} />;
}

function Coffees() {
  const [searchParams, setSearchParams] = useSearchParams();
  const coffees = useFetch(URL);
  return (
    <div>
      {!coffees ? (
        <div style={{ width: "50%", float: "left" }}>Loading...</div>
      ) : (
        <nav style={{ width: "50%", float: "left" }}>
          <input
            type="text"
            value={searchParams.get("name") || ""}
            onChange={(e) => setSearchParams({ name: e.target.value })}
          />
          {coffees
            .filter((coffee) => {
              const title = searchParams.get("name") || "";
              if (!title) return true;
              return coffee.title.toLowerCase().startsWith(title.toLowerCase());
            })
            .map((coffee) => (
              <QueryNavLink
                key={coffee.id}
                to={`/coffees/${coffee.id.toString()}`}
                style={(arg) =>
                  arg.isActive
                    ? { display: "block", width: "fit-content", color: "red" }
                    : { display: "block", width: "fit-content", color: "black" }
                }
              >
                {coffee.title}
              </QueryNavLink>
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
