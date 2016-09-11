"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnMiddleContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview">
          <div className="wrap xl-middle preview__item--wrap" style={{height: '144px'}}>
            <div className="col xl-3-12"><div className="preview__item--col">01</div></div>
            <div className="col xl-6-12"><div className="preview__item--col" style={{height: '96px', lineHeight: '96px'}}>02</div></div>
            <div className="col xl-3-12"><div className="preview__item--col">03</div></div>
          </div>
        </div>
        <div className="preview">
          <div className="tag tag--middle">table</div>
          <div className="wrap xl-table xl-middle preview__item--wrap" style={{height: '144px'}}>
            <div className="col xl-3-12"><div className="preview__item--col">01</div></div>
            <div className="col xl-6-12"><div className="preview__item--col" style={{height: '96px', lineHeight: '96px'}}>02</div></div>
            <div className="col xl-3-12"><div className="preview__item--col">03</div></div>
          </div>
        </div>
        <div className="preview preview--last-child">
          <div className="tag tag--middle">flexbox</div>
          <div className="wrap xl-flexbox xl-middle preview__item--wrap" style={{height: '144px'}}>
            <div className="col xl-3-12"><div className="preview__item--col">01</div></div>
            <div className="col xl-6-12"><div className="preview__item--col" style={{height: '96px', lineHeight: '96px'}}>02</div></div>
            <div className="col xl-3-12"><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnMiddleContent;
