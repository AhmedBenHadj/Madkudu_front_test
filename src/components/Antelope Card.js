import React, { Component } from 'react' ;
import 'bootstrap/dist/css/bootstrap.css';

export default class AntelopeCard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="card" style={{width: 18+'rem'}}>
                <img className="card-img-top" src={this.props.picture} alt={this.props.img} style={{width: 100+'%',height: 200+'px'}} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name: {this.props.name}</li>
                        <li className="list-group-item">Continent: {this.props.continent}</li>
                        <li className="list-group-item">Weight: {this.props.weight}</li>
                        <li className="list-group-item">Height: {this.props.height}</li>
                        <li className="list-group-item">Horns: {this.props.horns}</li>
                    </ul>
            </div>
        )
    }
}

