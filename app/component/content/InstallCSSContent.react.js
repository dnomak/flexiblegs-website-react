"use strict";

import React from 'react';
import { Link } from 'react-router'

var InstallCSSContent = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <div>
            <a
              href="https://raw.githubusercontent.com/flexiblegs/flexiblegs-css/master/flexiblegs-css.css"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu xl-pr4">
              {this.props.content.downloadTheFile}
            </a>
            {this.props.content.andAddTheProjectAsFollows}
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="tag tag--bottom">.html</div>
              <div className="code__content">{/*
                */}&lt;head&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;link rel="stylesheet" href="<span className="code-item">flexiblegs-css.css</span>"&gt;<br/>{/*
                */}&lt;/head&gt;{/*
              */}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://www.npmjs.com/package/flexiblegs-css"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu">
              npm
            </a>
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="tag tag--bottom">terminal</div>
              <div className="code__content">{/*
                */}$ npm install --save <span className="code-item">flexiblegs-css</span>{/*
              */}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a
              href="http://bower.io/search/?q=flexiblegs-css"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu">
              bower
            </a>
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="tag tag--bottom">terminal</div>
              <div className="code__content">{/*
                */}$ bower install --save <span className="code-item">flexiblegs-css</span>{/*
              */}</div>
            </div>
          </div>
        </div>
        <div className="wrap xl-right md-1">
          <div className="col xl-4-12 lg-5-12">
            <Link to="/learn/wrap?method=css" className="xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb8 xl-tac">
              <em className="icon-rocket icon-sm xl-co-white"/>
              <span className="xl-di xl-vam xl-pl8">
                {this.props.header.learn} (CSS)
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallCSSContent;
