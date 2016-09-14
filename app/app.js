"use strict";

import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import LanguageAction from './action/LanguageAction';

import Homepage from './component/page/Homepage.react'
import Install from './component/page/Install.react'
import InstallScss from './component/page/InstallScss.react'
import InstallSass from './component/page/InstallSass.react'
import InstallLess from './component/page/InstallLess.react'
import InstallStylus from './component/page/InstallStylus.react'
import InstallScssPlus from './component/page/InstallScssPlus.react'
import InstallCSS from './component/page/InstallCSS.react'
import InstallBEM from './component/page/InstallBEM.react'
import Learn from './component/page/Learn.react'
import LearnWrap from './component/page/LearnWrap.react'
import LearnCol from './component/page/LearnCol.react'
import LearnColRow from './component/page/LearnColRow.react'
import LearnHidden from './component/page/LearnHidden.react'
import LearnNotHidden from './component/page/LearnNotHidden.react'
import LearnGutter from './component/page/LearnGutter.react'
import LearnOutside from './component/page/LearnOutside.react'
import LearnWrapCol from './component/page/LearnWrapCol.react'
import LearnAuto from './component/page/LearnAuto.react'
import LearnTable from './component/page/LearnTable.react'
import LearnWidth from './component/page/LearnWidth.react'
import LearnFlexbox from './component/page/LearnFlexbox.react'
import LearnNormal from './component/page/LearnNormal.react'
import LearnLeft from './component/page/LearnLeft.react'
import LearnCenter from './component/page/LearnCenter.react'
import LearnRight from './component/page/LearnRight.react'
import LearnTop from './component/page/LearnTop.react'
import LearnMiddle from './component/page/LearnMiddle.react'
import LearnBottom from './component/page/LearnBottom.react'
import LearnBetween from './component/page/LearnBetween.react'
import LearnAround from './component/page/LearnAround.react'
import LearnBaseline from './component/page/LearnBaseline.react'
import LearnFirst from './component/page/LearnFirst.react'
import LearnNotFirst from './component/page/LearnNotFirst.react'
import LearnLast from './component/page/LearnLast.react'
import LearnNotLast from './component/page/LearnNotLast.react'
import LearnReverse from './component/page/LearnReverse.react'
import LearnNotReverse from './component/page/LearnNotReverse.react'
import LearnMasonry from './component/page/LearnMasonry.react'
import LearnBreakpoint from './component/page/LearnBreakpoint.react'
import Compatibility from './component/page/Compatibility.react'
import Devices from './component/page/Devices.react'
import Test from './component/page/Test.react'
import Colors from './component/page/Colors.react'
import PageNotFound from './component/page/PageNotFound.react'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}/>
    <Route path="/install" component={Install}/>
    <Route path="/install/scss" component={InstallScss}/>
    <Route path="/install/sass" component={InstallSass}/>
    <Route path="/install/less" component={InstallLess}/>
    <Route path="/install/stylus" component={InstallStylus}/>
    <Route path="/install/scss-plus" component={InstallScssPlus}/>
    <Route path="/install/css" component={InstallCSS}/>
    <Route path="/install/bem" component={InstallBEM}/>
    <Route path="/learn" component={Learn}/>
    <Route path="/learn/wrap" component={LearnWrap}/>
    <Route path="/learn/col" component={LearnCol}/>
    <Route path="/learn/col-row" component={LearnColRow}/>
    <Route path="/learn/hidden" component={LearnHidden}/>
    <Route path="/learn/not-hidden" component={LearnNotHidden}/>
    <Route path="/learn/gutter" component={LearnGutter}/>
    <Route path="/learn/outside" component={LearnOutside}/>
    <Route path="/learn/wrap-col" component={LearnWrapCol}/>
    <Route path="/learn/auto" component={LearnAuto}/>
    <Route path="/learn/table" component={LearnTable}/>
    <Route path="/learn/width" component={LearnWidth}/>
    <Route path="/learn/flexbox" component={LearnFlexbox}/>
    <Route path="/learn/normal" component={LearnNormal}/>
    <Route path="/learn/left" component={LearnLeft}/>
    <Route path="/learn/center" component={LearnCenter}/>
    <Route path="/learn/right" component={LearnRight}/>
    <Route path="/learn/top" component={LearnTop}/>
    <Route path="/learn/middle" component={LearnMiddle}/>
    <Route path="/learn/bottom" component={LearnBottom}/>
    <Route path="/learn/between" component={LearnBetween}/>
    <Route path="/learn/around" component={LearnAround}/>
    <Route path="/learn/baseline" component={LearnBaseline}/>
    <Route path="/learn/first" component={LearnFirst}/>
    <Route path="/learn/not-first" component={LearnNotFirst}/>
    <Route path="/learn/last" component={LearnLast}/>
    <Route path="/learn/not-last" component={LearnNotLast}/>
    <Route path="/learn/reverse" component={LearnReverse}/>
    <Route path="/learn/not-reverse" component={LearnNotReverse}/>
    <Route path="/learn/masonry" component={LearnMasonry}/>
    <Route path="/learn/breakpoint" component={LearnBreakpoint}/>
    <Route path="/compatibility" component={Compatibility}/>
    <Route path="/devices" component={Devices}/>
    <Route path="/test" component={Test}/>
    <Route path="/colors" component={Colors}/>
    <Route path="*" component={PageNotFound}/>
  </Router>
)

LanguageAction.initApp();

ReactDOM.render(
  routes,
  document.getElementById('app')
);

document.body.addEventListener('keydown', function (e) {

  const queryString = require('query-string');
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

  var keydown = function(prev,next) {
    if(e.which == 37) {
      return prev;
    }
    else if(e.which == 39) {
      return next;
    }
  }
  if (window.location.pathname == "/") {
    var link = keydown("/colors","/install");
  }
  if (window.location.pathname == "/install") {
    var link = keydown("/","/learn");
  }
  if (window.location.pathname == "/install/scss") {
    var link = keydown("/install/bem","/install/sass");
  }
  if (window.location.pathname == "/install/sass") {
    var link = keydown("/install/scss","/install/less");
  }
  if (window.location.pathname == "/install/less") {
    var link = keydown("/install/sass","/install/stylus");
  }
  if (window.location.pathname == "/install/stylus") {
    var link = keydown("/install/less","/install/scss-plus");
  }
  if (window.location.pathname == "/install/scss-plus") {
    var link = keydown("/install/stylus","/install/css");
  }
  if (window.location.pathname == "/install/css") {
    var link = keydown("/install/scss-plus","/install/bem");
  }
  if (window.location.pathname == "/install/bem") {
    var link = keydown("/install/css","/install/scss");
  }
  if (window.location.pathname == "/learn") {
    var link = keydown("/install","/compatibility");
  }
  if (window.location.pathname == "/learn/wrap") {
    var link = keydown(linkBreakpoint, linkCol);
  }
  if (window.location.pathname == "/learn/col") {
    var link = keydown(linkWrap, linkColRow);
  }
  if (window.location.pathname == "/learn/col-row") {
    var link = keydown(linkCol, linkHidden);
  }
  if (window.location.pathname == "/learn/hidden") {
    var link = keydown(linkColRow, linkNotHidden);
  }
  if (window.location.pathname == "/learn/not-hidden") {
    var link = keydown(linkHidden, linkGutter);
  }
  if (window.location.pathname == "/learn/gutter") {
    var link = keydown(linkNotHidden, linkOutside);
  }
  if (window.location.pathname == "/learn/outside") {
    var link = keydown(linkGutter, linkWrapCol);
  }
  if (window.location.pathname == "/learn/wrap-col") {
    var link = keydown(linkOutside, linkAuto);
  }
  if (window.location.pathname == "/learn/auto") {
    var link = keydown(linkWrapCol, linkTable);
  }
  if (window.location.pathname == "/learn/table") {
    var link = keydown(linkAuto, linkFlexbox);
  }
  if (window.location.pathname == "/learn/flexbox") {
    var link = keydown(linkTable, linkNormal);
  }
  if (window.location.pathname == "/learn/normal") {
    var link = keydown(linkFlexbox, linkLeft);
  }
  if (window.location.pathname == "/learn/left") {
    var link = keydown(linkNormal, linkCenter);
  }
  if (window.location.pathname == "/learn/center") {
    var link = keydown(linkLeft, linkRight);
  }
  if (window.location.pathname == "/learn/right") {
    var link = keydown(linkCenter, linkTop);
  }
  if (window.location.pathname == "/learn/top") {
    var link = keydown(linkRight, linkMiddle);
  }
  if (window.location.pathname == "/learn/middle") {
    var link = keydown(linkTop, linkBottom);
  }
  if (window.location.pathname == "/learn/bottom") {
    var link = keydown(linkMiddle, linkBetween);
  }
  if (window.location.pathname == "/learn/between") {
    var link = keydown(linkBottom, linkAround);
  }
  if (window.location.pathname == "/learn/around") {
    var link = keydown(linkBetween, linkBaseline);
  }
  if (window.location.pathname == "/learn/baseline") {
    var link = keydown(linkAround, linkFirst);
  }
  if (window.location.pathname == "/learn/first") {
    var link = keydown(linkBaseline, linkNotFirst);
  }
  if (window.location.pathname == "/learn/not-first") {
    var link = keydown(linkFirst, linkLast);
  }
  if (window.location.pathname == "/learn/last") {
    var link = keydown(linkNotFirst, linkNotLast);
  }
  if (window.location.pathname == "/learn/not-last") {
    var link = keydown(linkLast, linkReverse);
  }
  if (window.location.pathname == "/learn/reverse") {
    var link = keydown(linkNotLast, linkNotReverse);
  }
  if (window.location.pathname == "/learn/not-reverse") {
    var link = keydown(linkReverse, linkMasonry);
  }
  if (window.location.pathname == "/learn/masonry") {
    var link = keydown(linkNotReverse, linkBreakpoint);
  }
  if (window.location.pathname == "/learn/breakpoint") {
    var link = keydown(linkMasonry, linkWrap);
  }
  if (window.location.pathname == "/compatibility") {
    var link = keydown("/learn","/devices");
  }
  if (window.location.pathname == "/devices") {
    var link = keydown("/compatibility","/colors");
  }
  if (window.location.pathname == "/colors") {
    var link = keydown("/devices","/");
  }
  browserHistory.push(link);
});
