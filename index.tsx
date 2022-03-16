import React, { Component } from 'react';
import { render } from 'react-dom';
import Greet from './props/Greet';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React 2',
    };
  }

  render() {
    return (
      <div>
        <Greet name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
