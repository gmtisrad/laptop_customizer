import React, { Component } from 'react';
import '../App.css';

class MainSummaryItem extends Component {
    render() {
        return (
            <div className="summary__option">
          <div className="summary__option__label">{this.props.keyProp}  </div>
          <div className="summary__option__value">{this.props.selected[this.props.keyProp].name}</div>
          <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.props.selected[this.props.keyProp].cost) }
          </div>
      </div>
        )
    }
}

export default MainSummaryItem;