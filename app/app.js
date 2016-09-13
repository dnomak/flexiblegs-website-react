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
import Motivation from './component/page/Motivation.react'
import Future from './component/page/Future.react'
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
    <Route path="/motivation" component={Motivation}/>
    <Route path="/future" component={Future}/>
    <Route path="/colors" component={Colors}/>
    <Route path="*" component={PageNotFound}/>
  </Router>
)

LanguageAction.initApp();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
