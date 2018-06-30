import React, {Component} from 'react';
import axios from 'axios';
import Auxs from '../../hoc/Auxs';
import SkiCamsSections from '../../components/SkiCamsSections/SkiCamsSections';
import SkiCamSection from '../../components/SkiCamsSections/SkiCamsSection/SkiCamSection'



class SkiCams extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skiObject : []
        }

    }

    componentDidMount() {
        const url = 'https://makevoid-skicams.p.mashape.com/cams.json';

        axios.get(url,{
            headers: { "X-Mashape-key" : 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' },
        }).then(response => {
            const data = Object.values(response.data),
                andalo = 'Andalo',
                monteBondone = 'Monte Bondone';

            data.map(dataElement => {
                if (dataElement.name === andalo || dataElement.name === monteBondone) {

                    const updatedSkiObject = {
                        ...dataElement
                    }, skiObjectArray = this.state.skiObject;
                    console.log('tes3')
                    skiObjectArray.push(updatedSkiObject);
                    this.setState({skiObject: skiObjectArray })
                }
            })
        }).catch(error => {
                console.log(error)
        })
        console.log('tes')
    }

    render() {

        console.log('te2s')
        // let skiCamsElement = this.state.skiObject;
        // let li = null
            // skiCamsElement.map(element => {
            //     console.log(element)
            //      li = <SkiCamSection key={element.name}>{element.name}</SkiCamSection>
            //
            //
            // });

        return(
            <Auxs>dsadasd
                <SkiCamsSections>
                    {/*{ li }*/}
                </SkiCamsSections>
            </Auxs>
            )
    }
}


export default SkiCams;