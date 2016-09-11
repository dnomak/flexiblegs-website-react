"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnBaselineContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="tag tag--middle">flexbox</div>
          <div className="wrap xl-flexbox xl-baseline xl-3 preview__item--wrap">
            <div className="col"><div className="preview__item--col" style={{paddingTop: '64px', paddingBottom: '64px'}}>01</div></div>
            <div className="col"><div className="preview__item--col" style={{paddingTop: '36px'}}>02</div></div>
            <div className="col"><div className="preview__item--col" style={{paddingBottom: '96px'}}>03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnBaselineContent;
