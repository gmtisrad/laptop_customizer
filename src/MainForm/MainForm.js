import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList.js';
import '../App.css';

class MainForm extends Component {
    render () {
 

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <FeatureList updateFeature={this.props.updateFeature} features={this.props.features} selected={this.props.selected}/>
            </section>
        )
    }
}

export default MainForm;