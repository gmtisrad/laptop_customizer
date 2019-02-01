import React, { Component } from 'react';
import MainForm from '../MainForm/MainForm.js';
import MainSummary from '../MainSummary/MainSummary.js';
import '../App.css';

class LaptopBuilder extends Component {
    render() {
        return (
            <>
                <MainForm updateFeature={this.props.updateFeature} features={this.props.features} selected={this.props.selected}/>
                <MainSummary total={this.props.total} selected={this.props.selected} />
            </>
        )
    }
}

export default LaptopBuilder;