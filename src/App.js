import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts';
import AboutUs from './containers/AbouUs/AbouUs';
import SkiCams from './containers/SkiCams/SkiCams';
import Contact from './containers/Contact/Contact';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight
        }
    }

    updateHeightScreen() {
        let updateHeight = window.innerHeight;
        this.setState({height: updateHeight});
    }

    componentDidMount() {
        this.updateHeightScreen();
        window.addEventListener("resize", this.updateHeightScreen.bind(this));
    }

    render() {
    return (
        <BrowserRouter>
            <Layouts heightDocs={this.state.height - 114}>
                <Route path='/' exact component={AboutUs}/>
                <Route path='/skicams' component={SkiCams}/>
                <Route path='/contact'component={Contact}/>
                {/*<AboutUs/>1*/}
                {/*<SkiCams/>*/}
                {/*<Contact/>*/}
            </Layouts>
        </BrowserRouter>

    );
  }
}

export default App;
