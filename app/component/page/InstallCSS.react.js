"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallCSS = React.createClass({
  render: function() {
    return (
      <Layout page="install" method="css" />
    )
  }
});

module.exports = InstallCSS;
