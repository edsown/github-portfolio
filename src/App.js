import "./App.css";
import Repos from "./Repos";
function App() {
  return (
    <div className="App">
      <br />
      <br />
      <h1>My personal projects</h1>
      <br />
      <br />
      <Repos />

      <h2>
        This portfolio fetches data from the GitHub API and displays it in
        chronological order. If you are in a mobile device, try tapping one of
        the cards.
      </h2>
    </div>
  );
}

export default App;
