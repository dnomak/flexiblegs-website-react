"use strict";

import React from 'react';
import { Link } from 'react-router';

import LanguageAction from '../../action/LanguageAction';

var Header = React.createClass({

  switchLanguage: function(key, event) {
    LanguageAction.switchLanguage(key);
  },

  render: function() {

    var linkClass = "xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-co-gray-500";
    var linkClassActive = "xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-fw600 xl-co-white ho-co-white";

    var pathArray = window.location.pathname.split( '/' );
    var path = pathArray[1];

    return (
      <div className="xl-tal xl-py8 xl-px24 xl-ba-black-500 xl-co-white">
        <div className="xl-maw1280 xl-ma">
          <div className="wrap xl-middle md-1 md-my8">
            <div className="col xl-9-12 lg-5-7">
              <div className="wrap xl-gutter-8 xl-middle xl-auto md-1 md-center">
                <div className="col">
                  <Link
                    to="/"
                    className="icon-flexiblegs xl-vam xl-dib xl-pr8 xl-py8 xl-co-white"/>
                </div>
                <div className="col md-my8">
                  <Link
                    to="/install"
                    className={path == "install" ? linkClassActive : linkClass}>
                    {this.props.content.install}
                  </Link>
                  <Link
                    to="/learn"
                    className={path == "learn" ? linkClassActive : linkClass}>
                    {this.props.content.learn}
                  </Link>
                  <Link
                    to="/compatibility"
                    className={path == "compatibility" ? linkClassActive : linkClass}>
                    {this.props.content.compatibility}
                  </Link>
                  <Link
                    to="/devices"
                    className={path == "devices" ? linkClassActive : linkClass}>
                    {this.props.content.devices}
                  </Link>
                  {this.props.lang == "en" &&
                    <Link
                      to="/colors"
                      className="xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-cp xl-fw600 xl-ls1">
                      <div className="xl-dib xl-co-red-300">C</div>
                      <div className="xl-dib xl-co-green-300">o</div>
                      <div className="xl-dib xl-co-blue-300">l</div>
                      <div className="xl-dib xl-co-purple-300">o</div>
                      <div className="xl-dib xl-co-yellow-300">r</div>
                      <div className="xl-dib xl-co-blue-300">s</div>
                    </Link>
                  }
                  {this.props.lang == "tr" &&
                    <Link
                      to="/colors"
                      className="xl-vam xl-dib xl-p8 xl-fs16 xl-ffscp xl-cp xl-fw600 xl-ls1">
                      <div className="xl-dib xl-co-red-300">R</div>
                      <div className="xl-dib xl-co-green-300">e</div>
                      <div className="xl-dib xl-co-blue-300">n</div>
                      <div className="xl-dib xl-co-purple-300">k</div>
                      <div className="xl-dib xl-co-yellow-300">l</div>
                      <div className="xl-dib xl-co-blue-300">e</div>
                      <div className="xl-dib xl-co-purple-300">r</div>
                    </Link>
                  }
                  <a
                    href="https://medium.com/@dnomak/flexible-grid-systemin-hikayesi-747f379573e4"
                    target="_blank"
                    className={linkClass}>
                    {this.props.content.story}
                  </a>
                </div>
              </div>
            </div>
            <div className="col xl-3-12 xl-tar lg-2-7 md-tac">
              <a
                href="https://github.com/flexiblegs/flexiblegs-scss-plus/stargazers"
                target="_blank"
                className="icon-github-alt icon-sm xl-vam xl-dib xl-co-white xl-p8 xl-mr8"/>
              <a
                href="https://twitter.com/flexiblegs"
                target="_blank"
                className="icon-twitter icon-sm xl-vam xl-dib xl-co-white xl-p8 xl-mr8"/>
              <a
                href="https://goo.gl/6n5oTO"
                target="_blank"
                className="icon-youtube-play icon-sm xl-vam xl-dib xl-co-white xl-p8 xl-mr16"/>
              {this.props.lang == "en" &&
                <div
                  onClick={this.switchLanguage.bind(this,'tr')}
                  className="xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500">
                  Türkçe
                </div>
              }
              {this.props.lang == "tr" &&
                <div
                  onClick={this.switchLanguage.bind(this,'en')}
                  className="xl-cp xl-ffscp xl-vam xl-px8 xl-dib xl-fs14 xl-lh24 xl-fw400 xl-ba-white xl-br4 xl-co-black-500">
                  English
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
