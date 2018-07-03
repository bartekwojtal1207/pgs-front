import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import AboutUs from './containers/AbouUs/AbouUs';
import SkiCams from './containers/SkiCams/SkiCams';
import Contact from './containers/Contact/Contact';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layouts>
                <Route path='/' exact component={ AboutUs }/>
                <Route path='/skicams' exact component={SkiCams}/>
                <Route path='/contact' exact component={Contact}/>
                    {/*<AboutUs/>1*/}


                {/*<SkiCams/>*/}
                {/*<Contact/>*/}
            </Layouts>
        </BrowserRouter>

    );
  }
}

export default App;
