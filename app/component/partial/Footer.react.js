"use strict";

import React from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <div className="wrap xl-2 xl-center xl-ffscp xl-mb24 xl-co-gray-500 xl-mt24 lg-1">
        <div className="col xl-fs14 xl-tal lg-hidden">
          <div dangerouslySetInnerHTML={{__html:this.props.content.keyboardShortcuts}}></div>
        </div>
        <div className="col xl-fs14 xl-tar">
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
