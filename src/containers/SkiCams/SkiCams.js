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

            const data = Object.values(response.data);
            let newArray = [];

            newArray = data.filter(function (el) {
                return el.name === 'Andalo' || el.name === 'Monte Bondone' ;
            });

            this.setState({skiObject: newArray })

        }).catch(error => {
                console.log(error)
        });
    }


    render() {
        const skiCamsElement = this.state.skiObject;

        let skiCurort = null,
            time = new Date(),
            day = time.getDate(),
            month = time.getMonth()+1,
            years = time.getFullYear();

            day < 10 ? day = '0'+ day : day;
            month < 10 ? month = '0'+ month : month;

            let fullData = day+'-'+month+'-'+years;


        skiCurort = skiCamsElement.map(element => {
            let camera = Object.values(element.cams);
            const cameraArray = [];

            camera.map(cams => {
                cameraArray.push(cams.url)
            });

            return (
                    <SkiCamSection video={cameraArray[0]} video1={cameraArray[1]}
                                   key={element.name} clock={fullData}>{element.name}</SkiCamSection>
            )
        });

        return(
            <Auxs>
                <SkiCamsSections skiCurortList={this.state.skiObject}>
                    {skiCurort}
                </SkiCamsSections>
            </Auxs>
            )
    }
}


export default SkiCams;