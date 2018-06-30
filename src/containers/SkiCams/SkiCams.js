import React, { Component } from 'react';
import axios from 'axios';
import Auxs from '../../hoc/Auxs';


class SkiCams extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skiObject : {}
        }

    }

    componentDidMount() {
        const url = 'https://makevoid-skicams.p.mashape.com/cams.json';

        axios.get(url,{
            headers: { "X-Mashape-key" : 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' },
        }).then(response => {

            const andalo = 'Andalo',
                  monteBondone = 'Monte Bondone',
                  data = Object.values(response.data);

            data.map(dataElement => {
                if (dataElement.name === andalo || dataElement.name === monteBondone ) {
                    const updatedSkiObject = {
                        ...dataElement
                    };

                    this.setState({skiObject: updatedSkiObject})
                }

            })

        }).catch(error => {
                console.log(error)
        })


    }

    render() {
        console.log(this.state.skiObject)
        return(
            <Auxs>
                <p>sdasd</p>
            </Auxs>
            )
    }
}


export default SkiCams;