"use strict";

import React from 'react';

var PageNotFoundContent = React.createClass({
  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
    )
  }
});

module.exports = PageNotFoundContent;
