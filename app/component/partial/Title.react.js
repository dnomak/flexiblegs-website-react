"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';

var Title = React.createClass({
  render: function() {
    return (
      <div>
        <DocumentTitle title={this.props.title + " - Flexible Grid System"} />
        <div className="xl-lh40 xl-fs24 xl-fw600 xl-mb8">{this.props.title}</div>
      </div>
    );
  }
});

module.exports = Title;
