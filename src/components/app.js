import { Router } from "preact-router";
import PagesData from "../pages";

import {
  ElectronicsExperiments,
  DigitalElectronics,
} from "../semesters/sem3/index";

import ExperimentDataEntry from "../pages/ExperimentDataEntry";



const App = () => (
  <div id="app">
    <Router>
      {/* <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" /> */}
      <ExperimentDataEntry path="/experiment" />
      {ElectronicsExperiments.map((page) => {
        return page.component;
      })}
      {DigitalElectronics.map((page) => {
        return page.component;
      })}

      {PagesData.map((page) => {
        return page.component;
      })}
    </Router>
  </div>
);

export default App;
