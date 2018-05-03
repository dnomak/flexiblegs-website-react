"use strict";

import React from 'react';

var InstallScssPlusContent = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <div>
            <a
              href="https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss-plus/master/scss/helper/flexiblegs-scss-plus.scss"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu xl-pr4">
              {this.props.content.downloadTheFile}
            </a>
            {this.props.content.andAddTheProjectAsFollows}
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="tag tag--bottom">.scss</div>
              <div className="code__content">{/*
                */}$flexiblegs-method: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"css",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"bem"</span><br/>{/*
                */});<br/>{/*
                */}$flexiblegs-breakpoint: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"xl" : "",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"lg" : "(max-width: 1024px)",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"md" : "(max-width: 768px)",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"sm" : "(max-width: 667px)"</span><br/>{/*
                */});<br/>{/*
                */}$wrap-col: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</span><br/>{/*
                */});<br/>{/*
                */}$wrap-prop: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"table",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"flexbox",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"normal",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"left",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"center",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"right",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"top",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"middle",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"bottom",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"between",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"around",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"baseline",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"reverse",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"not-reverse"</span><br/>{/*
                */});<br/>{/*
                */}$col-row: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</span><br/>{/*
                */});<br/>{/*
                */}$col-width: ();<br/>{/*
                */}$col-prop: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"hidden",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"not-hidden",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"first",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"not-first",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"last",</span><br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">"not-last"</span><br/>{/*
                */});<br/>{/*
                */}$wrap-gutter: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">0, 8, 16, 24, 40</span><br/>{/*
                */});<br/>{/*
                */}$wrap-outside: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">0, 8, 16, 24, 40</span><br/>{/*
                */});<br/>{/*
                */}$wrap-masonry: (<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">2, 3, 4, 5, 6</span><br/>{/*
                */});<br/><br/>{/*
                */}@import "flexiblegs-scss";<br/>{/*
                */}@import "<span className="code-item">flexiblegs-scss-plus</span>";{/*
              */}</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://www.npmjs.com/package/flexiblegs-scss-plus"
              target="_blank"
              className="xl-fw400 xl-co-black-500 xl-tdu">
              npm
            </a>
          </div>
          <div className="xl-mt8 xl-mb24">
            <div className="code code--install">
              <div className="tag tag--bottom">terminal</div>
              <div className="code__content">{/*
                */}$ npm install --save <span className="code-item">flexiblegs-scss-plus</span>{/*
              */}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = InstallScssPlusContent;
