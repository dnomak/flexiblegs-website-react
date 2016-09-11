"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnLeft = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="left" />
    )
  }
});

module.exports = LearnLeft;
