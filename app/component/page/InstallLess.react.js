"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallLess = React.createClass({
  render: function() {
    return (
      <Layout page="install" method="less" />
    )
  }
});

module.exports = InstallLess;
