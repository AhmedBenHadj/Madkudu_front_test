import React, { Component } from 'react'
import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.css';
import Antelopes from '../components/Antelopes';
import PieChart from '../components/Pie Chart';
import BarChart from '../components/Bar Chart';
import ColumnChart from '../components/Column Chart';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            antelopes:[]
        };
    }


  render() {
    return (
      <div id="home" className="page-content padding-none">
        <Banner />
          <Banner />
          <hr className="divider-color" />
          <section className="padding-section">
              <div className="grid-row clear-fix">
                  <h2 className="center-text">Antelopes</h2>
                    <Antelopes />
                  <div className="grid-col-row">
                  </div>
              </div>
          </section>
          <hr className="divider-color" />
          <section className="padding-section">
              <div className="grid-row clear-fix">
                  <h2 className="center-text">Statistics</h2>
                    <BarChart />
                    <ColumnChart />
                    <PieChart type="horns"/>
                    <PieChart type="continent"/>
                  <div className="grid-col-row">
                  </div>
              </div>
          </section>
      </div>
    )
  }
}
