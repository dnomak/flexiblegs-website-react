"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnReverseContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="tag tag--middle">flexbox</div>
          <div className="wrap xl-flexbox xl-reverse xl-gutter-24 xl-3 preview__item--wrap">
            <div className="col"><div className="preview__item--col">01</div></div>
            <div className="col"><div className="preview__item--col">02</div></div>
            <div className="col"><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnReverseContent;
