"use strict";

import React from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <div className="wrap xl-2 xl-center xl-ffscp xl-co-gray-500 xl-pt24 xl-pb24 lg-1 lg-center">
        <div className="col xl-fs14 xl-tal lg-hidden">
          <div dangerouslySetInnerHTML={{__html:this.props.content.keyboardShortcuts}}></div>
        </div>
        <div className="col xl-fs14 xl-tar lg-tac">
          <a
            href="https://github.com/dnomak"
            target="_blank"
            className="xl-di xl-co-gray-500"
            dangerouslySetInnerHTML={{__html:this.props.content.iLoveFlexibleGridSystem}}></a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
