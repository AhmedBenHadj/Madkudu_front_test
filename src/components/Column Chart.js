import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import axios from "axios";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dataPoints : []
        };
        this.getAllAntelopes();

    }
    getAllAntelopes(){
        axios.get("http://localhost:3100/api/antelopes/getHeightByHorns").then( res => {
            const responseData = res.data ;
            let objectArray = [] ;
            for(let i=0;i<responseData.length;i++){
                const object = {
                    label:responseData[i].name,
                    y:responseData[i].height,
                };
                objectArray.push(object);
            }
            this.setState({dataPoints:objectArray});
        });
    }

    	render() {
		const options = {
			title: {
				text: "Height average by horns"
			},
			animationEnabled: true,
            exportEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                dataPoints: this.state.dataPoints
			}
			]
		};
		
		return (
		<div>
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
}

export default ColumnChart;