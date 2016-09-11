"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnHidden = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="hidden" />
    )
  }
});

module.exports = LearnHidden;
