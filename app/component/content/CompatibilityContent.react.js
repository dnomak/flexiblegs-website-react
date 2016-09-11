"use strict";

import React from 'react';

var CompatibilityContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
        <div className="wrap xl-2 xl-gutter-16 xl-mt8 sm-1">
          <div className="col xl-fs18">
            <div className="xl-fw600">
              {this.props.common.browser}
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">IE 9+</div>
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Chrome</div>
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Firefox</div>
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Safari</div>
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Opera</div>
            </div>
          </div>
          <div className="col xl-fs18 sm-mt8">
            <div className="xl-fw600">{this.props.common.framework}</div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Bootstrap</div>
            </div>
            <div>
              <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
              <div className="xl-di xl-vam xl-pl8">Foundation {this.props.common.andMore}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = CompatibilityContent;
