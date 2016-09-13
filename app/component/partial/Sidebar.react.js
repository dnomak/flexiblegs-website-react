"use strict";

import React from 'react';

import { Link, browserHistory } from 'react-router'

const queryString = require('query-string');

var Sidebar = React.createClass({

  render: function() {

    var inputEmailClass = "xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-green-300 xl-brl8 xl-brr0 xl-ffscp xl-pl16 lg-pl8 md-pl16 pl-co-gray-500";
    var inputSubmitClass = "xl-1-1 xl-db xl-lh56 xl-h56 xl-co-white xl-ba-green-300 xl-fw600 xl-brr8 xl-brl0 xl-ffscp";

    var mailchimpForm = '<form class="wrap" action="//flexible.us8.list-manage.com/subscribe/post?u=0cfb9d416ef45eba73b6368b6&amp;id='+ this.props.mailchimp.id +'" method="post" name="mc-embedded-subscribe-form" target="_blank"><div class="col xl-7-12"><input type="email" name="EMAIL" class="'+ inputEmailClass +'" placeholder="'+ this.props.mailchimp.emailAddress +'" /><div style="position: absolute; left: -5000px;"><input type="text" name="'+ this.props.mailchimp.name +'" tabindex="-1"/></div></div><div class="col xl-5-12"><input type="submit" class="'+ inputSubmitClass +'" value="'+ this.props.mailchimp.subscribe +'" name="subscribe" /></div></form>';

    const parsed = queryString.parse(location.search);

    if (parsed.method == "css" || parsed.method == "bem" || parsed.method == "scss" || parsed.method == "sass" || parsed.method == "less" || parsed.method == "stylus") {
      parsed.method = parsed.method;
    }
    else {
      parsed.method = "css";
    }

    var linkWrap = "/learn/wrap?method=" + parsed.method;
    var linkCol = "/learn/col?method=" + parsed.method;
    var linkColRow = "/learn/col-row?method=" + parsed.method;
    var linkHidden = "/learn/hidden?method=" + parsed.method;
    var linkNotHidden = "/learn/not-hidden?method=" + parsed.method;
    var linkGutter = "/learn/gutter?method=" + parsed.method;
    var linkOutside = "/learn/outside?method=" + parsed.method;
    var linkWrapCol = "/learn/wrap-col?method=" + parsed.method;
    var linkAuto = "/learn/auto?method=" + parsed.method;
    var linkTable = "/learn/table?method=" + parsed.method;
    var linkWidth = "/learn/width?method=" + parsed.method;
    var linkFlexbox = "/learn/flexbox?method=" + parsed.method;
    var linkNormal = "/learn/normal?method=" + parsed.method;
    var linkLeft = "/learn/left?method=" + parsed.method;
    var linkCenter = "/learn/center?method=" + parsed.method;
    var linkRight = "/learn/right?method=" + parsed.method;
    var linkTop = "/learn/top?method=" + parsed.method;
    var linkMiddle = "/learn/middle?method=" + parsed.method;
    var linkBottom = "/learn/bottom?method=" + parsed.method;
    var linkBetween = "/learn/between?method=" + parsed.method;
    var linkAround = "/learn/around?method=" + parsed.method;
    var linkBaseline = "/learn/baseline?method=" + parsed.method;
    var linkFirst = "/learn/first?method=" + parsed.method;
    var linkNotFirst = "/learn/not-first?method=" + parsed.method;
    var linkLast = "/learn/last?method=" + parsed.method;
    var linkNotLast = "/learn/not-last?method=" + parsed.method;
    var linkReverse = "/learn/reverse?method=" + parsed.method;
    var linkNotReverse = "/learn/not-reverse?method=" + parsed.method;
    var linkMasonry = "/learn/masonry?method=" + parsed.method;
    var linkBreakpoint = "/learn/breakpoint?method=" + parsed.method;

    var linkClass          = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-200 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-gray-200";
    var linkClassLastChild = "xl-db xl-py8 xl-px16 ho-ba-gray-100 ho-co-black-500 ho-bo-gray-100 xl-ba-white xl-co-black-500 xl-bwb1 xl-bo-white";
    var linkClassActive    = "xl-db xl-py8 xl-px16 ho-ba-green-300 ho-co-white ho-bo-green-300 xl-ba-green-300 xl-co-white xl-bwb1 xl-bo-green-300";

    var pathArray = window.location.pathname.split( '/' );
    var path = pathArray[1] +"/"+ pathArray[2];

    var keydown = function(left,right) {
      document.body.addEventListener('keydown', function (e) {
        if(e.which == 37) {
          window.location.assign(left);
          // browserHistory.push(left);
        }
        else if(e.which == 39) {
          window.location.assign(right);
          // browserHistory.push(right);
        }
      });
    }
    if (window.location.pathname == "/") {
      keydown("/colors","/install");
    }
    if (window.location.pathname == "/install") {
      keydown("/","/learn");
    }
    if (window.location.pathname == "/install/scss") {
      keydown("/install/bem","/install/sass");
    }
    if (window.location.pathname == "/install/sass") {
      keydown("/install/scss","/install/less");
    }
    if (window.location.pathname == "/install/less") {
      keydown("/install/sass","/install/stylus");
    }
    if (window.location.pathname == "/install/stylus") {
      keydown("/install/less","/install/scss-plus");
    }
    if (window.location.pathname == "/install/scss-plus") {
      keydown("/install/stylus","/install/css");
    }
    if (window.location.pathname == "/install/css") {
      keydown("/install/scss-plus","/install/bem");
    }
    if (window.location.pathname == "/install/bem") {
      keydown("/install/css","/install/scss");
    }
    if (window.location.pathname == "/learn") {
      keydown("/install","/compatibility");
    }
    if (window.location.pathname == "/learn/wrap") {
      keydown(linkBreakpoint, linkCol);
    }
    if (window.location.pathname == "/learn/col") {
      keydown(linkWrap, linkColRow);
    }
    if (window.location.pathname == "/learn/col-row") {
      keydown(linkCol, linkHidden);
    }
    if (window.location.pathname == "/learn/hidden") {
      keydown(linkColRow, linkNotHidden);
    }
    if (window.location.pathname == "/learn/not-hidden") {
      keydown(linkHidden, linkGutter);
    }
    if (window.location.pathname == "/learn/gutter") {
      keydown(linkNotHidden, linkOutside);
    }
    if (window.location.pathname == "/learn/outside") {
      keydown(linkGutter, linkWrapCol);
    }
    if (window.location.pathname == "/learn/wrap-col") {
      keydown(linkOutside, linkAuto);
    }
    if (window.location.pathname == "/learn/auto") {
      keydown(linkWrapCol, linkTable);
    }
    if (window.location.pathname == "/learn/table") {
      keydown(linkAuto, linkFlexbox);
    }
    if (window.location.pathname == "/learn/flexbox") {
      keydown(linkTable, linkNormal);
    }
    if (window.location.pathname == "/learn/normal") {
      keydown(linkFlexbox, linkLeft);
    }
    if (window.location.pathname == "/learn/left") {
      keydown(linkNormal, linkCenter);
    }
    if (window.location.pathname == "/learn/center") {
      keydown(linkLeft, linkRight);
    }
    if (window.location.pathname == "/learn/right") {
      keydown(linkCenter, linkTop);
    }
    if (window.location.pathname == "/learn/top") {
      keydown(linkRight, linkMiddle);
    }
    if (window.location.pathname == "/learn/middle") {
      keydown(linkTop, linkBottom);
    }
    if (window.location.pathname == "/learn/bottom") {
      keydown(linkMiddle, linkBetween);
    }
    if (window.location.pathname == "/learn/between") {
      keydown(linkBottom, linkAround);
    }
    if (window.location.pathname == "/learn/around") {
      keydown(linkBetween, linkBaseline);
    }
    if (window.location.pathname == "/learn/baseline") {
      keydown(linkAround, linkFirst);
    }
    if (window.location.pathname == "/learn/first") {
      keydown(linkBaseline, linkNotFirst);
    }
    if (window.location.pathname == "/learn/not-first") {
      keydown(linkFirst, linkLast);
    }
    if (window.location.pathname == "/learn/last") {
      keydown(linkNotFirst, linkNotLast);
    }
    if (window.location.pathname == "/learn/not-last") {
      keydown(linkLast, linkReverse);
    }
    if (window.location.pathname == "/learn/reverse") {
      keydown(linkNotLast, linkNotReverse);
    }
    if (window.location.pathname == "/learn/not-reverse") {
      keydown(linkReverse, linkMasonry);
    }
    if (window.location.pathname == "/learn/masonry") {
      keydown(linkNotReverse, linkBreakpoint);
    }
    if (window.location.pathname == "/learn/breakpoint") {
      keydown(linkMasonry, linkWrap);
    }
    if (window.location.pathname == "/compatibility") {
      keydown("/learn","/motivation");
    }
    if (window.location.pathname == "/motivation") {
      keydown("/compatibility","/future");
    }
    if (window.location.pathname == "/future") {
      keydown("/motivation","/colors");
    }
    if (window.location.pathname == "/colors") {
      keydown("/future","/");
    }

    return (
      <div>
        {!this.props.page &&
          <div>
            <Link to="/learn/wrap?method=css" className="xl-1-1 xl-fs18 xl-fw600 xl-db xl-lh0 xl-co-white xl-ba-blue-300 xl-br8 xl-py16 xl-mb16 xl-tac">
              <em className="icon-rocket icon-sm xl-co-white"/>
              <span className="xl-di xl-vam xl-pl8">
                {this.props.common.quickStart} (CSS)
              </span>
            </Link>
            <a
              href="https://youtu.be/4306ejHx17Y"
              target="_target"
              className="flexiblegs-presentation xl-db xl-co-white xl-bw4 xl-bo-white xl-pr xl-mb16 xl-br8 xl-oh">
              <em className="icon-youtube-play icon-xl xl-1-1 xl-tac xl-pa xl-t50p xl-tty-50p" />
            </a>
            <div dangerouslySetInnerHTML={{__html:mailchimpForm}}/>
          </div>
        }
        {this.props.page == "install" &&
          <div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">
              {this.props.content.install}
            </div>
            <div className="xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oh">
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.dynamicCore}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/scss"
                  className={path == "install/scss" ? linkClassActive : linkClass}>
                  Scss
                </Link>
                <Link
                  to="/install/sass"
                  className={path == "install/sass" ? linkClassActive : linkClass}>
                  Sass
                </Link>
                <Link
                  to="/install/less"
                  className={path == "install/less" ? linkClassActive : linkClass}>
                  Less
                </Link>
                <Link
                  to="/install/stylus"
                  className={path == "install/stylus" ? linkClassActive : linkClassLastChild}>
                  Stylus
                </Link>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.dynamicCompilationTool}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/scss-plus"
                  className={path == "install/scss-plus" ? linkClassActive : linkClass}>
                  Scss Plus
                </Link>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Sass Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-gray-200 xl-bwb1 xl-tdlt">
                  Less Plus
                </div>
                <div
                  className="xl-db xl-py8 xl-px16 xl-cn xl-ba-white xl-co-gray-500 xl-bo-white xl-bwb1 xl-tdlt">
                  Stylus Plus
                </div>
              </div>
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                {this.props.common.staticCompiled}
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to="/install/css"
                  className={path == "install/css" ? linkClassActive : linkClass}>
                  CSS
                </Link>
                <Link
                  to="/install/bem"
                  className={path == "install/bem" ? linkClassActive : linkClassLastChild}>
                  BEM
                </Link>
              </div>
            </div>
          </div>
        }
        {this.props.page == "learn" &&
          <div>
            <div className="xl-bo-gray-200 xl-bwl2 xl-bwr2 xl-bwt2 xl-ba-gray-200 xl-p16 xl-brt8 xl-fw600 xl-fs18">
              {this.props.content.learn}
            </div>
            <div className="xl-ba-white xl-fs14 xl-lh20 xl-brb8 xl-bo-gray-200 xl-bw2 xl-oa">
              <div className="xl-ba-gray-100 xl-py8 xl-px16 xl-co-black-500">
                <div className="wrap xl-flexbox xl-between xl-auto">
                  <div className="col xl-fs14">
                    {(() => {
                      switch (parsed.method) {
                        case "scss": return this.props.common.dynamicCore;
                        case "sass": return this.props.common.dynamicCore;
                        case "less": return this.props.common.dynamicCore;
                        case "stylus": return this.props.common.dynamicCore;
                        case "css": return this.props.common.staticCompiled;
                        case "bem": return this.props.common.staticCompiled;
                        default: return this.props.common.staticCompiled;
                      }
                    })()}
                  </div>
                  <div className="col xl-fs14 xl-fw600">
                    {(() => {
                      switch (parsed.method) {
                        case "scss": return "Scss";
                        case "sass": return "Sass";
                        case "less": return "Less";
                        case "stylus": return "Stylus";
                        case "css": return "CSS";
                        case "bem": return "BEM";
                        default: return "CSS";
                      }
                    })()}
                  </div>
                </div>
              </div>
              <div className="xl-pl8 xl-ba-gray-100">
                <Link
                  to={linkWrap}
                  className={path == "learn/wrap" ? linkClassActive : linkClass}>
                  wrap
                </Link>
                <Link
                  to={linkCol}
                  className={path == "learn/col" ? linkClassActive : linkClass}>
                  col
                </Link>
                <Link
                  to={linkColRow}
                  className={path == "learn/col-row" ? linkClassActive : linkClass}>
                  col(@col,@row)
                </Link>
                <Link
                  to={linkHidden}
                  className={path == "learn/hidden" ? linkClassActive : linkClass}>
                  col(hidden)
                </Link>
                <Link
                  to={linkNotHidden}
                  className={path == "learn/not-hidden" ? linkClassActive : linkClass}>
                  col(not-hidden)
                </Link>
                <Link
                  to={linkGutter}
                  className={path == "learn/gutter" ? linkClassActive : linkClass}>
                  wrap(gutter,@width)
                </Link>
                <Link
                  to={linkOutside}
                  className={path == "learn/outside" ? linkClassActive : linkClass}>
                  wrap(outside,@width)
                </Link>
                <Link
                  to={linkWrapCol}
                  className={path == "learn/wrap-col" ? linkClassActive : linkClass}>
                  wrap(@col)
                </Link>
                <Link
                  to={linkAuto}
                  className={path == "learn/auto" ? linkClassActive : linkClass}>
                  wrap(auto)
                </Link>
                <Link
                  to={linkTable}
                  className={path == "learn/table" ? linkClassActive : linkClass}>
                  wrap(table)
                </Link>
                {/*<Link
                  to={linkWidth}
                  className={path == "learn/width" ? linkClassActive : linkClass}>
                  col(@width)
                </Link>*/}
                <div className="xl-db xl-py8 xl-px16 xl-ba-white xl-co-gray-500 xl-bwb1 xl-bo-gray-200 xl-cn xl-tdlt">
                  col(@width)
                </div>
                <Link
                  to={linkFlexbox}
                  className={path == "learn/flexbox" ? linkClassActive : linkClass}>
                  wrap(flexbox)
                </Link>
                <Link
                  to={linkNormal}
                  className={path == "learn/normal" ? linkClassActive : linkClass}>
                  wrap(normal)
                </Link>
                <Link
                  to={linkLeft}
                  className={path == "learn/left" ? linkClassActive : linkClass}>
                  wrap(left)
                </Link>
                <Link
                  to={linkCenter}
                  className={path == "learn/center" ? linkClassActive : linkClass}>
                  wrap(center)
                </Link>
                <Link
                  to={linkRight}
                  className={path == "learn/right" ? linkClassActive : linkClass}>
                  wrap(right)
                </Link>
                <Link
                  to={linkTop}
                  className={path == "learn/top" ? linkClassActive : linkClass}>
                  wrap(top)
                </Link>
                <Link
                  to={linkMiddle}
                  className={path == "learn/middle" ? linkClassActive : linkClass}>
                  wrap(middle)
                </Link>
                <Link
                  to={linkBottom}
                  className={path == "learn/bottom" ? linkClassActive : linkClass}>
                  wrap(bottom)
                </Link>
                <Link
                  to={linkBetween}
                  className={path == "learn/between" ? linkClassActive : linkClass}>
                  wrap(between)
                </Link>
                <Link
                  to={linkAround}
                  className={path == "learn/around" ? linkClassActive : linkClass}>
                  wrap(around)
                </Link>
                <Link
                  to={linkBaseline}
                  className={path == "learn/baseline" ? linkClassActive : linkClass}>
                  wrap(baseline)
                </Link>
                <Link
                  to={linkFirst}
                  className={path == "learn/first" ? linkClassActive : linkClass}>
                  col(first)
                </Link>
                <Link
                  to={linkNotFirst}
                  className={path == "learn/not-first" ? linkClassActive : linkClass}>
                  col(not-first)
                </Link>
                <Link
                  to={linkLast}
                  className={path == "learn/last" ? linkClassActive : linkClass}>
                  col(last)
                </Link>
                <Link
                  to={linkNotLast}
                  className={path == "learn/not-last" ? linkClassActive : linkClass}>
                  col(not-last)
                </Link>
                <Link
                  to={linkReverse}
                  className={path == "learn/reverse" ? linkClassActive : linkClass}>
                  wrap(reverse)
                </Link>
                <Link
                  to={linkNotReverse}
                  className={path == "learn/not-reverse" ? linkClassActive : linkClass}>
                  wrap(not-reverse)
                </Link>
                <Link
                  to={linkMasonry}
                  className={path == "learn/masonry" ? linkClassActive : linkClass}>
                  wrap(masonry,@col)
                </Link>
                <Link
                  to={linkBreakpoint}
                  className={path == "learn/breakpoint" ? linkClassActive : linkClassLastChild}>
                  breakpoint
                </Link>
              </div>
            </div>
          </div>
        }
        <div className="xl-ffscp xl-fs14 xl-tac xl-co-gray-500 xl-mt16">v5.5.3</div>
      </div>
    );
  }
});

module.exports = Sidebar;
