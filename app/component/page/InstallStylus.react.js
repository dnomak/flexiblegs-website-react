"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstalStylus = React.createClass({
  render: function() {
    return (
      <Layout page="install" method="stylus" />
    )
  }
});

module.exports = InstalStylus;
