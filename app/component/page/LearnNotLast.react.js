"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnNotLast = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="not-last" />
    )
  }
});

module.exports = LearnNotLast;
