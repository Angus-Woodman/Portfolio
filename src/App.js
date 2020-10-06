import React from "react";
import "./styles/App.css";
import NavBar from "./Components/NavBar/NavBar"
import { Switch, Route } from "react-router-dom";
import {Welcome, About, Projects} from "./Pages"

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main>
            <Switch>
               <Route exact path="/" component={Welcome} />
               <Route path="/about" component={About} />
               <Route path="/projects" component={Projects} />
             </Switch>
            </main>
      </>
    );
  }
}
export default App;
