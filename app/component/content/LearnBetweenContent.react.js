"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnBetweenContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="tag tag--middle">flexbox</div>
          <div className="wrap xl-flexbox xl-between xl-5 preview__item--wrap" style={{height: '256px'}}>
            <div className="col"><div className="preview__item--col">01</div></div>
            <div className="col"><div className="preview__item--col">02</div></div>
            <div className="col"><div className="preview__item--col">03</div></div>
            <div className="col xl-1-1"><div className="preview__item--col">04</div></div>
            <div className="col"><div className="preview__item--col">05</div></div>
            <div className="col"><div className="preview__item--col">06</div></div>
            <div className="col"><div className="preview__item--col">07</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnBetweenContent;
