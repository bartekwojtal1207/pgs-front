import React, { Component } from 'react';
import Layouts from './components/Layouts/Layouts';
import AboutUs from './containers/AbouUs/AbouUs';
import SkiCams from './containers/SkiCams/SkiCams';
import Contact from './containers/Contact/Contact';


class App extends Component {
  render() {
    return (
        <Layouts>
            <AboutUs/>
            {/*<SkiCams/>*/}
            {/*<Contact/>*/}
        </Layouts>
    );
  }
}

export default App;
