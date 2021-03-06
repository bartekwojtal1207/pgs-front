import React, {Component} from 'react';
import axios from 'axios';
import Auxs from '../../hoc/Auxs';
import SkiCamsSections from '../../components/SkiCamsSections/SkiCamsSections';
import SkiCamSection from '../../components/SkiCamsSections/SkiCamsSection/SkiCamSection'


class SkiCams extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skiPlace: []
        }
    }

    componentDidMount() {
        const url = 'https://makevoid-skicams.p.mashape.com/cams.json';

        axios.get(url, {
            headers: {"X-Mashape-key": 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'},

        }).then(response => {
            const data = Object.values(response.data),
                cityOne = 'Abetone',
                cityTwo = 'Alpe di Siusi';
            let newArray = [];

            newArray = data.filter(function (el) {
                return el.name === cityOne || el.name === cityTwo;
            });

            this.setState({skiPlace: newArray})

        }).catch(error => {
            console.log(error)
        });
    }

    getCurrentDay = () => {
        let time = new Date(),
            day = time.getDate(),
            month = time.getMonth() + 1,
            years = time.getFullYear();

        day < 10 ? day = '0' + day : day;
        month < 10 ? month = '0' + month : month;

        let currentTime = null;
        currentTime = day + '-' + month + '-' + years;
        return currentTime;
    };

    render() {
        const skiCamsElement = this.state.skiPlace;
        let fullData = this.getCurrentDay();

        let skiCurort = skiCamsElement.map(element => {
            const cameraArray = [];
            let camera = Object.values(element.cams);

            camera.map(cams => {
                cameraArray.push(cams.url)
            });

            return (
                <SkiCamSection video={cameraArray[0]} videoTwo={cameraArray[1]}
                               key={element.name} clock={fullData}>{element.name}</SkiCamSection>
            )
        });

        return (
            <Auxs>
                <SkiCamsSections skiCurortList={this.state.skiObject}>
                    { skiCurort }
                </SkiCamsSections>
            </Auxs>
        )
    }
}


export default SkiCams;