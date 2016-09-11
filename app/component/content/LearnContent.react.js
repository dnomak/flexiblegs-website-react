"use strict";

import React from 'react';
import { Link } from 'react-router'

var LearnContent = React.createClass({
  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
        <div className="xl-fw600 xl-fs18 xl-mt8">
          {this.props.common.responsiveMeta}
        </div>
        <div className="xl-pt8">
          <div className="code code--install">
            <div className="tag tag--bottom">.html</div>
            <div className="code__content">{/*
              */}&lt;head&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;<br/>{/*
              */}&lt;/head&gt;{/*
            */}</div>
          </div>
        </div>
        <div className="xl-fw600 xl-fs18">
          <em className="icon-rocket icon-sm"/>
          <span className="xl-di xl-vam xl-pl8">{this.props.common.compiledView}</span>
        </div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line002}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line003}}></div>
        <div dangerouslySetInnerHTML={{__html:this.props.content.line004}}></div>
        <div className="wrap xl-3 xl-gutter-24 lg-1 xl-mt24 xl-mb8">
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCore}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=scss"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Scss
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=sass"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Sass
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=less"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Less
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=stylus"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  Stylus
                </Link>
              </div>
            </div>
          </div>
          <div className="col xl-fs18 lg-my24">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.dynamicCompilationTool}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  className="xl-di xl-vam xl-pl8 xl-co-black-500" to="/install/scss-plus">Scss Plus
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Sass Plus</div>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Less Plus</div>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <div className="xl-di xl-vam xl-pl8 xl-co-gray-500 xl-tdlt xl-cn">Stylus Plus</div>
              </div>
            </div>
          </div>
          <div className="col xl-fs18">
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-100 xl-py8 xl-px16 xl-brt8 xl-fw600">
              {this.props.common.staticCompiled}
            </div>
            <div className="xl-bo-gray-200 xl-bw2 xl-brb8 xl-px16 xl-py8">
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=css"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  CSS
                </Link>
              </div>
              <div>
                <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
                <Link
                  to="/learn/wrap?method=bem"
                  className="xl-di xl-vam xl-pl8 xl-co-black-500">
                  BEM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnContent;
