"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnHiddenContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="wrap preview__item--wrap">
            <div className="col xl-1-3"><div className="preview__item--col">01</div></div>
            <div className="col xl-1-3"><div className="preview__item--col">02</div></div>
            <div className="col xl-1-3 xl-hidden"><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnHiddenContent;
