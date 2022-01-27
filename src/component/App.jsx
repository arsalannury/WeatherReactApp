import "../../src/Index.css";
import Weather from "./Weather";
import WeatherError from "./Errors/WeatherError";
import { Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path={"/notFound"} component={WeatherError} />
        <Route path={"/"} component={Weather} />
      </Switch>
    </>
  );
}

export default App;
