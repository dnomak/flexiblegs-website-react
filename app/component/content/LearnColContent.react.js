"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnColContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="wrap preview__item--wrap">
            <div className="col"></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnColContent;
