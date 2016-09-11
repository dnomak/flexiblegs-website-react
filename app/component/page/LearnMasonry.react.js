"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnMasonry = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="masonry" />
    )
  }
});

module.exports = LearnMasonry;
