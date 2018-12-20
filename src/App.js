import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from "./containers/Landing/Landing";
import styled, {keyframes} from 'styled-components';

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: ${load8} 1.1s infinite linear;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    const app = (
      <BrowserRouter>
        <div>
          <main>
            <Route path="/" exact component={Landing} />
          </main>
        </div>
      </BrowserRouter>
    );
    return <div className="app">{this.state.isLoading ? <Loader /> : app}</div>;
  }
}

export default App;
