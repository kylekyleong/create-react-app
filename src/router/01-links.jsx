import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/about">Content</Link>
      </nav>
    </div>
  );
}

export default function _App() {
  // Wrap Link components inside BrowserRouter component
  // Define list of Route component in the Routes component
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
