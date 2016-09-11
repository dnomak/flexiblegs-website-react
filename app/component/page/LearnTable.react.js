"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnTable = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="table" />
    )
  }
});

module.exports = LearnTable;
