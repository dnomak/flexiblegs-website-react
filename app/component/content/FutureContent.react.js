"use strict";

import React from 'react';

var FutureContent = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible Front End Framework (<a href="https://github.com/pixelperfectcss/pixelperfectcss-scss" target="_blank" className="xl-co-black-500 xl-fw400 xl-tdu">Pixel Perfect CSS</a>)
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <a className="xl-co-black-500 xl-fw400 xl-tdu" target="_blank" href="https://github.com/flexiblegs/flexible-icons">Icons</a>
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <a className="xl-co-black-500 xl-fw400 xl-tdu" target="_blank" href="https://github.com/flexiblegs/grid-builder">Grid Builder</a>
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <span className="xl-fw400">Front End Editor</span>
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <span className="xl-fw400">Cloud</span> ({this.props.content.contentManagementSystem})
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <span className="xl-fw400">Shop</span> (Mug, T-Shirt, <a href="https://stickker.net/urun/flexible/" target="_blank" className="xl-co-black-500 xl-fw400 xl-tdu">Sticker</a> {this.props.common.andMore})
          </div>
        </div>
        <div>
          <em className="icon-dot-circle-o icon-xs xl-co-gray-300"/>
          <div className="xl-di xl-vam xl-pl8">
            Flexible <span className="xl-fw400">Space</span> (Flexible Blend {this.props.content.coffee}, {this.props.content.logoShapedCakeMold})
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FutureContent;
