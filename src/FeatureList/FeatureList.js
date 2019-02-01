import React, { Component } from 'react';
import FeatureListItem from '../FeatureListItem/FeatureListItem.js';
import '../index.css';

class FeatureList extends Component {
    render () {
        const features = Object.keys(this.props.features)
        .map(key => {
          const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <FeatureListItem index={index} key={index} item={item} keyProp={key} updateFeature={this.props.updateFeature} selectedClass={selectedClass} featureClass={featureClass}/>
            )
          });

          return <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
        });

        return (
            <>
                {features}
            </>
        )
    }
}

export default FeatureList;