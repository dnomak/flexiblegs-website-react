"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var PageNotFound = React.createClass({
  render: function() {
    return (
      <Layout page="page-not-found" />
    )
  }
});

module.exports = PageNotFound;
