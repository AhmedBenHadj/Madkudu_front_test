import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import axios from "axios";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state ={
			dataPoints : []
        };
        if(this.props.type ==="horns")
        	this.getAllAntelopesByHorns();
        else if(this.props.type ==="continent")
			this.getAllAntelopesByContinent();

    }
    getAllAntelopesByHorns(){
        axios.get("http://localhost:3100/api/antelopes/getPercnetageByHorns").then( res => {
            const responseData = res.data ;
            let objectArray = [] ;
            for(let i=0;i<responseData.length;i++){
            	const object = {
					y:responseData[i].percentage,
					label:responseData[i]._id.type + " pop." + responseData[i].count
				};
                objectArray.push(object);
			}
			this.setState({dataPoints:objectArray});
        });
    }
    getAllAntelopesByContinent(){
        axios.get("http://localhost:3100/api/antelopes/getPercentageByContinent").then( res => {
            const responseData = res.data ;
            let objectArray = [] ;
            for(let i=0;i<responseData.length;i++){
                const object = {
                    y:responseData[i].percentage,
                    label:responseData[i]._id.type + " pop." + responseData[i].count
                };
                objectArray.push(object);
            }
            this.setState({dataPoints:objectArray});
        });
    }
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Antelopes By "+this.props.type+" percentage"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
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

export default PieChart;