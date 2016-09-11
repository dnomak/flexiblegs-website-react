"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnBetween = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="between" />
    )
  }
});

module.exports = LearnBetween;
