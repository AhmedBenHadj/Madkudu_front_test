import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import axios from "axios";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            dataPoints : []
        };
        this.getAllAntelopes();

    }
    getAllAntelopes(){
        axios.get("http://localhost:3100/api/antelopes/getWeightByHorns").then( res => {
            const responseData = res.data ;
            let objectArray = [] ;
            for(let i=0;i<responseData.length;i++){
                const object = {
                    y:responseData[i].weight,
                    label:responseData[i].name
                };
                objectArray.push(object);
            }
            this.setState({dataPoints:objectArray});
        });
    }
    addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
            exportEnabled: true,
			theme: "light2",
			title:{
				text: "Weight average of horns"
			},
			axisX: {
				title: "Horns",
				reversed: true,
			},
			axisY: {
				title: "Weight by KG",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
                dataPoints : this.state.dataPoints
			}]
		};
		
		return (
		<div>
			<CanvasJSChart options = {options}
			/>
		</div>
		);
	}
}

export default BarChart;