import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from "./containers/Landing/Landing";

class App extends Component {
  render() {
    const spinner = document.getElementById("spinner");

    if (spinner && !spinner.hasAttribute("hidden")) {
      spinner.setAttribute("hidden", "true");
    }

    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <main>
              <Route path="/" exact component={Landing} />
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;