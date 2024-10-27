import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App ">
      <div classname="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Karabo Lesapo and it is open sourced on{" "}
          <a
            href="https://github.com/Karabo-L/final_react_weather_app"
            target="blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
