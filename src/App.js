import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Layouts from './components/Layouts/Layouts';
import AboutUs from './containers/AbouUs/AbouUs';
import SkiCams from './containers/SkiCams/SkiCams';


class App extends Component {
  render() {
    return (
        <Layouts>
            {/*<AboutUs/>*/}
            <SkiCams/>
        </Layouts>
    );
  }
}

export default App;
