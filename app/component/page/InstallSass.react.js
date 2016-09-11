"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var InstallSass = React.createClass({
  render: function() {
    return (
      <Layout page="install" method="sass" />
    )
  }
});

module.exports = InstallSass;
