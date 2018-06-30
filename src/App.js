import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Layouts from './components/Layouts/Layouts';
import AboutUs from './containers/AbouUs/AbouUs';


class App extends Component {
  render() {
    return (
        <Layouts>
            <AboutUs/>
        </Layouts>
    );
  }
}

export default App;
