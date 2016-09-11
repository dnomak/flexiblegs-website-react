"use strict";

import React from 'react';
import { Link } from 'react-router'

var InstallContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div className="wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8">
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCore}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/scss"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    Scss
                  </Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/sass"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    Sass
                  </Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/less"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    Less
                  </Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/stylus"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    Stylus
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8"
              dangerouslySetInnerHTML={{__html:this.props.content.line003}}/>
          </div>
          <div className="col xl-fs18 lg-my24">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCompilationTool}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/scss-plus"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    Scss Plus
                  </Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Sass Plus</div>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Less Plus</div>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Stylus Plus</div>
                </div>
              </div>
            </div>
            <div
              className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8"
              dangerouslySetInnerHTML={{__html:this.props.content.line004}}/>
          </div>
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.staticCompiled}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-px16 xl-py8">
              <div className="wrap xl-1 xl-gutter-24">
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/css"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    CSS
                  </Link>
                </div>
                <div className="col xl-fs18">
                  <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                  <Link
                    to="/install/bem"
                    className="xl-di xl-vam xl-pl8 xl-co-black-500">
                    BEM
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwb2 xl-ba-gray-100 xl-py8 xl-px16 xl-brb8"
              dangerouslySetInnerHTML={{__html:this.props.content.line005}}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallContent;
