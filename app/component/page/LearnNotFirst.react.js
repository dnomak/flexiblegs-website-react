"use strict";

import React from 'react';

import Layout from '../partial/Layout.react'

var LearnNotFirst = React.createClass({
  render: function() {
    return (
      <Layout page="learn" type="not-first" />
    )
  }
});

module.exports = LearnNotFirst;
