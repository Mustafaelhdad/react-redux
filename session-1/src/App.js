import Greatings from "./components/Greatings";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Greatings />
      <Welcome name="Mustafa" age="25" job_title="web developer" />
      <Welcome name="Sayed" age="34" job_title="Chef" />
    </div>
  );
}

export default App;
