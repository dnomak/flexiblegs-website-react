"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnAutoContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="wrap xl-gutter-24 xl-auto preview__item--wrap">
            <div className="col"><div className="preview__item--col" style={{display: 'inline-block', padding: '0 40px'}}>01</div></div>
            <div className="col"><div className="preview__item--col" style={{display: 'inline-block', padding: '0 40px'}}>02</div></div>
            <div className="col"><div className="preview__item--col" style={{display: 'inline-block', padding: '0 40px'}}>03</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnAutoContent;
