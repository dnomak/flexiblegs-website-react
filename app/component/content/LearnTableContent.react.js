"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnTableContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="wrap xl-table xl-gutter-24 preview__item--wrap">
            <div className="col" style={{width: '124px'}}><div className="preview__item--col">01</div></div>
            <div className="col"><div className="preview__item--col">02</div></div>
            <div className="col" style={{width: '224px'}}><div className="preview__item--col">03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnTableContent;
