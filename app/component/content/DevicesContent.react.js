"use strict";

import React from 'react';
import { Link, browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title';

const queryString = require('query-string');
const parsed = queryString.parse(location.search);

var DevicesContent = React.createClass({

  getInitialState: function() {
    return {value: 'http://'};
  },

  componentWillMount: function() {
    if(parsed.url) {
      this.setState({value: parsed.url});
    }
  },

  handleChange: function(e) {
    this.setState({value: e.target.value});
  },

  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      if(!parsed.breakpoint) {
        parsed.breakpoint = "xl";
      }
      if(parsed.breakpoint) {
        parsed.breakpoint = parsed.breakpoint;
      }
      browserHistory.push("/devices?url=" + this.state.value + "&breakpoint=" + parsed.breakpoint);
    }
  },

  render: function() {

    const parsed = queryString.parse(location.search);

    var linkClass = "xl-db xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-gray-100 xl-co-gray-500";

    if (!parsed.url || parsed.url == "http://") {
      var iframeUrl = "/test";
    }
    else {
      var iframeUrl = parsed.url;
    }

    var linkPathname = "/devices";

    if (parsed.breakpoint == "xl" || parsed.breakpoint == "lg" || parsed.breakpoint == "md" || parsed.breakpoint == "sm" || parsed.breakpoint == "xs") {
      parsed.breakpoint = parsed.breakpoint;
      var deviceClassName = "device-" + parsed.breakpoint;
    }
    else {
      parsed.breakpoint = "xl";
      var deviceClassName = "device-xl";
    }

    if (parsed.breakpoint == "xl") {
      var linkClassActive = "xl-db xl-fw600 xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-white xl-co-blue-300";
    }
    if (parsed.breakpoint == "lg") {
      var linkClassActive = "xl-db xl-fw600 xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-white xl-co-red-300";
    }
    if (parsed.breakpoint == "md") {
      var linkClassActive = "xl-db xl-fw600 xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-white xl-co-green-300";
    }
    if (parsed.breakpoint == "sm") {
      var linkClassActive = "xl-db xl-fw600 xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-white xl-co-purple-300";
    }
    if (parsed.breakpoint == "xs") {
      var linkClassActive = "xl-db xl-fw600 xl-lh20 xl-py16 xl-bwt2 xl-bwb2 xl-bwr2 xl-cp xl-bo-gray-200 xl-ba-white xl-co-yellow-300";
    }

    return (
      <div className="xl-tac xl-mt24">
        <DocumentTitle title={this.props.title + " - Flexible Grid System"} />
        <div className="lg-dn">
          <div className="xl-maw1280 xl-ma">
            <div className="xl-mx24">
              <div className="wrap xl-center">
                <div className="col xl-5-12">
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    className="xl-ba-white pl-co-gray-500 xl-co-black-500 xl-ffscp xl-lh20 xl-db xl-p16 xl-bo-gray-200 xl-bw2 xl-brl8 xl-brr0"
                    placeholder="http://"/>
                </div>
                <div className="col xl-3-12">
                  <div className="wrap xl-5 xl-center xl-ffscp">
                    <div className="col">
                      <Link
                        to={linkPathname + "?url="+ this.state.value +"&breakpoint=xl"}
                        className={parsed.breakpoint == "xl" ? linkClassActive : linkClass}>xl</Link>
                    </div>
                    <div className="col">
                      <Link
                        to={linkPathname + "?url="+ this.state.value +"&breakpoint=lg"}
                        className={parsed.breakpoint == "lg" ? linkClassActive : linkClass}>lg</Link>
                    </div>
                    <div className="col">
                      <Link
                        to={linkPathname + "?url="+ this.state.value +"&breakpoint=md"}
                        className={parsed.breakpoint == "md" ? linkClassActive : linkClass}>md</Link>
                    </div>
                    <div className="col">
                      <Link
                        to={linkPathname + "?url="+ this.state.value +"&breakpoint=sm"}
                        className={parsed.breakpoint == "sm" ? linkClassActive : linkClass}>sm</Link>
                    </div>
                    <div className="col">
                      <Link
                        to={linkPathname + "?url="+ this.state.value +"&breakpoint=xs"}
                        className={parsed.breakpoint == "xs" ? linkClassActive + " xl-brl0 xl-brr8" : linkClass + " xl-brl0 xl-brr8"}>xs</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl-ba-gray-200 xl-h40 xl-ma xl-w16"></div>
          </div>
          <div className={deviceClassName}>
            <iframe src={iframeUrl} frameBorder="0"></iframe>
          </div>
        </div>
        <div className="xl-dn lg-db xl-tal xl-px24 xl-py16 xl-co-black-500 xl-br8 xl-ba-white xl-bw2 xl-bo-gray-200 xl-mx24">
          <div className="xl-lh36 xl-fs18 xl-fw300">
            <div className="xl-lh40 xl-fs24 xl-fw600 xl-mb8">{this.props.title}</div>
            <div dangerouslySetInnerHTML={{__html:this.props.content.line001}}></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DevicesContent;
