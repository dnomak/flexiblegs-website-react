"use strict";

import React from 'react';

var Test = React.createClass({

  componentWillMount() {
    document.body.classList.remove("xl-ba-gray-100");
  },

  render: function() {
    return (
      <div className="xl-ffscp xl-mx16 xl-my8">
        <div className="wrap xl-gutter-16">
          <div className="col xl-3-12 lg-4-11 md-1-1 sm-1-1">
            <div className="test-item test-item--logo"><span>Logo</span> 01</div>
          </div>
          <div className="col xl-9-12 lg-7-11 md-1-1 sm-1-1">
            <div className="test-item test-item--menu"><span>Menu</span> 02</div>
          </div>
          <div className="col xl-1-1 lg-1-1 md-1-1 sm-1-1">
            <div className="test-item test-item--slider"><span>Slider</span> 03</div>
          </div>
          <div className="col xl-3-10 lg-3-12 md-1-2 sm-1-1">
            <div className="test-item test-item--sidebar"><span>Sidebar</span> 04</div>
          </div>
          <div className="col xl-7-10 lg-9-12 md-1-2 sm-1-1">
            <div className="test-item test-item--content"><span>Content</span> 05</div>
          </div>
          <div className="col xl-1-5 lg-4-12 md-1-2 sm-1-1">
            <div className="test-item test-item--section"><span>Section</span> 06</div>
          </div>
          <div className="col xl-1-5 lg-4-12 md-1-2 sm-1-1">
            <div className="test-item test-item--section"><span>Section</span> 07</div>
          </div>
          <div className="col xl-1-5 lg-4-12 md-1-2 sm-1-1">
            <div className="test-item test-item--section"><span>Section</span> 08</div>
          </div>
          <div className="col xl-1-5 lg-6-12 md-1-2 sm-1-1">
            <div className="test-item test-item--section"><span>Section</span> 09</div>
          </div>
          <div className="col xl-1-5 lg-6-12 md-1-1">
            <div className="test-item test-item--section"><span>Section</span> 10</div>
          </div>
          <div className="col xl-2-4 lg-3-6 md-5-10 sm-1-1">
            <div className="test-item test-item--footer"><span>Footer</span> 11</div>
          </div>
          <div className="col xl-2-4 lg-3-6 md-5-10 sm-1-1">
            <div className="test-item test-item--footer"><span>Footer</span> 12</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Test;
