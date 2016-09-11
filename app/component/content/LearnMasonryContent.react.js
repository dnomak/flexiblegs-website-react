"use strict";

import React from 'react';

import Code from '../partial/Code.react'

var LearnMasonryContent = React.createClass({
  render: function() {
    return (
      <div>
        <Code type={this.props.type} />
        <div className="preview preview--last-child">
          <div className="wrap xl-gutter-24 xl-top xl-masonry-3" style={{background: '#FBD0DF'}}>
            <div className="col xl-1-1"><div className="preview__item--col" style={{marginBottom: '24px'}}>01</div></div>
            <div className="col xl-1-3"><div className="preview__item--col" style={{marginBottom: '24px'}}>02</div></div>
            <div className="col xl-1-3"><div className="preview__item--col" style={{marginBottom: '24px'}}>03</div></div>
            <div className="col xl-1-3"><div className="preview__item--col" style={{marginBottom: '24px'}}>04</div></div>
            <div className="col xl-1-1"><div className="preview__item--col" style={{marginBottom: '24px', height: '120px', lineHeight: '120px'}}>05</div></div>
            <div className="col xl-1-2"><div className="preview__item--col" style={{marginBottom: '24px'}}>06</div></div>
            <div className="col xl-1-2"><div className="preview__item--col" style={{marginBottom: '24px'}}>07</div></div>
            <div className="col xl-1-1"><div className="preview__item--col" style={{marginBottom: '24px'}}>08</div></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LearnMasonryContent;
