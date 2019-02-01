import React, { Component } from 'react';
import MainSummaryItem from '../MainSummaryItem/MainSummaryItem.js';
import '../App.css';

class MainSummary extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
        .map(key => <MainSummaryItem keyProp={key} selected={this.props.selected}/>)

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.total) }
              </div>
            </div>
          </section>
        )
    }
}

export default MainSummary;