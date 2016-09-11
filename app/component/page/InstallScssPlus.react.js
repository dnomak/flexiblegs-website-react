"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallScssPlus = React.createClass({
  render: function() {
    return (
      <Layout page="install" method="scss-plus" />
    )
  }
});

module.exports = InstallScssPlus;
