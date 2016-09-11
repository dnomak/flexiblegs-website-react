"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnWidthContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
      </div>
    )
  }
});

module.exports = LearnWidthContent;
