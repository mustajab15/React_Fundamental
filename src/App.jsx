import "./App.css";
import Article from "./components/Article";
import Props from "./components/Props";

function App() {
  return (
    <>
      <Article />
      <Props name="Kaka Jabs" titles={["Vue Js", "Nuxt Js"]} />
    </>
  );
}

export default App;
