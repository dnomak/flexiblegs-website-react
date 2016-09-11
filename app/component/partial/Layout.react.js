"use strict";

import React from 'react';

import Header from '../partial/Header.react'
import Sidebar from '../partial/Sidebar.react'
import Footer from '../partial/Footer.react'
import Title from '../partial/Title.react'
import HomepageContent from '../content/HomepageContent.react'
import InstallContent from '../content/InstallContent.react'
import InstallScssContent from '../content/InstallScssContent.react'
import InstallSassContent from '../content/InstallSassContent.react'
import InstallLessContent from '../content/InstallLessContent.react'
import InstallStylusContent from '../content/InstallStylusContent.react'
import InstallScssPlusContent from '../content/InstallScssPlusContent.react'
import InstallCSSContent from '../content/InstallCSSContent.react'
import InstallBEMContent from '../content/InstallBEMContent.react'
import LearnContent from '../content/LearnContent.react'
import LearnWrapContent from '../content/LearnWrapContent.react'
import LearnColContent from '../content/LearnColContent.react'
import LearnColRowContent from '../content/LearnColRowContent.react'
import LearnHiddenContent from '../content/LearnHiddenContent.react'
import LearnNotHiddenContent from '../content/LearnNotHiddenContent.react'
import LearnGutterContent from '../content/LearnGutterContent.react'
import LearnOutsideContent from '../content/LearnOutsideContent.react'
import LearnWrapColContent from '../content/LearnWrapColContent.react'
import LearnAutoContent from '../content/LearnAutoContent.react'
import LearnTableContent from '../content/LearnTableContent.react'
import LearnWidthContent from '../content/LearnWidthContent.react'
import LearnFlexboxContent from '../content/LearnFlexboxContent.react'
import LearnNormalContent from '../content/LearnNormalContent.react'
import LearnLeftContent from '../content/LearnLeftContent.react'
import LearnCenterContent from '../content/LearnCenterContent.react'
import LearnRightContent from '../content/LearnRightContent.react'
import LearnTopContent from '../content/LearnTopContent.react'
import LearnMiddleContent from '../content/LearnMiddleContent.react'
import LearnBottomContent from '../content/LearnBottomContent.react'
import LearnBetweenContent from '../content/LearnBetweenContent.react'
import LearnAroundContent from '../content/LearnAroundContent.react'
import LearnBaselineContent from '../content/LearnBaselineContent.react'
import LearnFirstContent from '../content/LearnFirstContent.react'
import LearnNotFirstContent from '../content/LearnNotFirstContent.react'
import LearnLastContent from '../content/LearnLastContent.react'
import LearnNotLastContent from '../content/LearnNotLastContent.react'
import LearnReverseContent from '../content/LearnReverseContent.react'
import LearnNotReverseContent from '../content/LearnNotReverseContent.react'
import LearnMasonryContent from '../content/LearnMasonryContent.react'
import LearnBreakpointContent from '../content/LearnBreakpointContent.react'
import CompatibilityContent from '../content/CompatibilityContent.react'
import MotivationContent from '../content/MotivationContent.react'
import FutureContent from '../content/FutureContent.react'
import ColorsContent from '../content/ColorsContent.react'
import PageNotFoundContent from '../content/PageNotFoundContent.react'


import LanguageStore from '../../store/LanguageStore'

var Layout = React.createClass({

  getInitialState: function() {
    return {
      content: LanguageStore.getContent(),
      page: ""
    };
  },

  componentWillMount: function() {
    LanguageStore.addChangeListener(this._onChange);

    if(this.props.page == "install" && this.props.method) {
      this.setState({ page: "install" });
    }
    else if (this.props.page == "learn" && this.props.type) {
      this.setState({ page: "learn" });
    }
  },

  componentWillUnmount: function() {
    LanguageStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ content: LanguageStore.getContent() });
  },

  installTitle: function(title) {
    return this.state.content.header.install + " (" + title + ")";
  },

  learnTitle: function(title) {
    return title;
  },

  render: function() {
    var contentClass = "xl-lh36 xl-fs18 xl-fw300";
    return (
      <div>
        <Header
          lang={this.state.content.lang}
          content={this.state.content.header} />
        <div className="xl-m24">
          <div className="xl-maw1280 xl-ma">
            <div className="wrap xl-gutter-24 md-1">
              <div className="col xl-9-12 lg-5-7">
                <div className="xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200">
                  {this.props.page == "homepage" &&
                    <div>
                      <Title title={this.state.content.header.homepage} />
                      <div className={contentClass}>
                        <HomepageContent content={this.state.content.homepage} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && !this.props.method &&
                    <div>
                      <Title title={this.state.content.header.install} />
                      <div className={contentClass}>
                        <InstallContent content={this.state.content.install} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "scss" &&
                    <div>
                      <Title title={this.installTitle("Scss")} />
                      <div className={contentClass}>
                        <InstallScssContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "sass" &&
                    <div>
                      <Title title={this.installTitle("Sass")} />
                      <div className={contentClass}>
                        <InstallSassContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "less" &&
                    <div>
                      <Title title={this.installTitle("Less")} />
                      <div className={contentClass}>
                        <InstallLessContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "stylus" &&
                    <div>
                      <Title title={this.installTitle("Stylus")} />
                      <div className={contentClass}>
                        <InstallStylusContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "scss-plus" &&
                    <div>
                      <Title title={this.installTitle("Scss Plus")} />
                      <div className={contentClass}>
                        <InstallScssPlusContent content={this.state.content.install} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "css" &&
                    <div>
                      <Title title={this.installTitle("CSS")} />
                      <div className={contentClass}>
                        <InstallCSSContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "install" && this.props.method == "bem" &&
                    <div>
                      <Title title={this.installTitle("BEM")} />
                      <div className={contentClass}>
                        <InstallBEMContent content={this.state.content.install} header={this.state.content.header} />
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && !this.props.type &&
                    <div>
                      <Title title={this.state.content.header.learn} />
                      <div className={contentClass}>
                        <LearnContent content={this.state.content.learn} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "wrap" &&
                    <div>
                      <Title title={this.learnTitle("wrap")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnWrapContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "col" &&
                    <div>
                      <Title title={this.learnTitle("col")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnColContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "col-row" &&
                    <div>
                      <Title title={this.learnTitle("col(@col,@row)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnColRowContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "hidden" &&
                    <div>
                      <Title title={this.learnTitle("col(hidden)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnHiddenContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "not-hidden" &&
                    <div>
                      <Title title={this.learnTitle("col(not-hidden)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnNotHiddenContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "gutter" &&
                    <div>
                      <Title title={this.learnTitle("wrap(gutter,@width)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnGutterContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "outside" &&
                    <div>
                      <Title title={this.learnTitle("wrap(outside,@width)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnOutsideContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "wrap-col" &&
                    <div>
                      <Title title={this.learnTitle("wrap(@col)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnWrapColContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "auto" &&
                    <div>
                      <Title title={this.learnTitle("wrap(auto)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnAutoContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "table" &&
                    <div>
                      <Title title={this.learnTitle("wrap(table)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnTableContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "width" &&
                    <div>
                      <Title title={this.learnTitle("col(@width)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnWidthContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "flexbox" &&
                    <div>
                      <Title title={this.learnTitle("wrap(flexbox)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnFlexboxContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "normal" &&
                    <div>
                      <Title title={this.learnTitle("wrap(normal)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnNormalContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "left" &&
                    <div>
                      <Title title={this.learnTitle("wrap(left)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnLeftContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "center" &&
                    <div>
                      <Title title={this.learnTitle("wrap(center)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnCenterContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "right" &&
                    <div>
                      <Title title={this.learnTitle("wrap(right)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnRightContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "top" &&
                    <div>
                      <Title title={this.learnTitle("wrap(top)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnTopContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "middle" &&
                    <div>
                      <Title title={this.learnTitle("wrap(middle)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnMiddleContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "bottom" &&
                    <div>
                      <Title title={this.learnTitle("wrap(bottom)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnBottomContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "between" &&
                    <div>
                      <Title title={this.learnTitle("wrap(between)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnBetweenContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "around" &&
                    <div>
                      <Title title={this.learnTitle("wrap(around)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnAroundContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "baseline" &&
                    <div>
                      <Title title={this.learnTitle("wrap(baseline)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnBaselineContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "first" &&
                    <div>
                      <Title title={this.learnTitle("col(first)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnFirstContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "not-first" &&
                    <div>
                      <Title title={this.learnTitle("col(not-first)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnNotFirstContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "last" &&
                    <div>
                      <Title title={this.learnTitle("col(last)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnLastContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "not-last" &&
                    <div>
                      <Title title={this.learnTitle("col(not-last)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnNotLastContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "reverse" &&
                    <div>
                      <Title title={this.learnTitle("wrap(reverse)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnReverseContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "not-reverse" &&
                    <div>
                      <Title title={this.learnTitle("wrap(not-reverse)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnNotReverseContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "masonry" &&
                    <div>
                      <Title title={this.learnTitle("wrap(masonry,@col)")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnMasonryContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "learn" && this.props.type == "breakpoint" &&
                    <div>
                      <Title title={this.learnTitle("breakpoint")} />
                      <div className={contentClass}>
                        <div className="xl-pt8">
                          <LearnBreakpointContent type={this.props.type} />
                        </div>
                      </div>
                    </div>
                  }
                  {this.props.page == "compatibility" &&
                    <div>
                      <Title title={this.state.content.header.compatibility} />
                      <div className={contentClass}>
                        <CompatibilityContent content={this.state.content.compatibility} common={this.state.content.common} />
                      </div>
                    </div>
                  }
                  {this.props.page == "motivation" &&
                    <div>
                      <Title title={this.state.content.header.motivation} />
                      <div className={contentClass}>
                        <MotivationContent content={this.state.content.motivation} />
                      </div>
                    </div>
                  }
                  {this.props.page == "future" &&
                    <div>
                      <Title title={this.state.content.header.future} />
                      <div className={contentClass}>
                        <FutureContent content={this.state.content.future} common={this.state.content.common}/>
                      </div>
                    </div>
                  }
                  {this.props.page == "page-not-found" &&
                    <div>
                      <Title title="404" />
                      <div className={contentClass}>
                        <PageNotFoundContent content={this.state.content.pageNotFound} />
                      </div>
                    </div>
                  }
                  {this.props.page == "colors" &&
                    <div>
                      <Title title="Colors" />
                      <div className={contentClass}>
                        <ColorsContent />
                      </div>
                    </div>
                  }
                </div>
                <Footer content={this.state.content.footer}/>
              </div>
              <div className="col xl-3-12 lg-2-7">
                <Sidebar
                  lang={this.state.content.lang}
                  content={this.state.content.header}
                  common={this.state.content.common}
                  mailchimp={this.state.content.mailchimp}
                  page={this.state.page} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Layout;
