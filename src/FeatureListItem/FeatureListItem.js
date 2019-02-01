import React, { Component } from 'react';
import '../App.css';

class FeatureListItem extends Component {
    render() {
        return (
            <li className="feature__item">
              <div className={this.props.featureClass}
                
                onClick={e => this.props.updateFeature(this.props.keyProp, this.props.item)}>
                  { this.props.item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.item.cost) })
              </div>
            </li>
        )
    }
}

export default FeatureListItem;