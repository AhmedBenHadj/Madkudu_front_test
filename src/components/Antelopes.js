import React, { Component } from 'react' ;
import axios from 'axios';
import AntelopeCard from './Antelope Card';

export default class Antelopes extends Component {
    constructor(props) {
        super(props);
        this.state ={
            antelopes:[]
        };
        this.getAllAntelopes();
    }
    getAllAntelopes(){
        axios.get('http://localhost:3100/api/antelopes/getAll').then( res => {
            const antelopes = res.data ;
            this.setState({antelopes:antelopes});
        });
    }
    render() {
        return (
            <div className="card-columns">
                {this.state.antelopes.map(antelope => <AntelopeCard name={antelope.name} picture={antelope.picture}
                continent={antelope.continent} weight={antelope.weight} height={antelope.height} horns={antelope.horns}/> )}
            </div>
        )
    }
}

