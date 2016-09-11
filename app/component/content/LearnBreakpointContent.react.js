"use strict";

import React from 'react';

const queryString = require('query-string');

var LearnBreakpointContent = React.createClass({
  render: function() {

    const parsed = queryString.parse(location.search);

    if (parsed.method == "css" || parsed.method == "bem" || parsed.method == "scss" || parsed.method == "sass" || parsed.method == "less" || parsed.method == "stylus") {
      parsed.method = parsed.method;
    }
    else {
      parsed.method = "css";
    }

    return (
      <div>
        {parsed.method == "css" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.css</div>
            <div className="code__content">{/*
              */}/* xl */<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* lg */<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* md */<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* sm */<br/>{/*
              */}&#125;{/*
            */}</div>
          </div>
        }
        {parsed.method == "bem" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.css</div>
            <div className="code__content">{/*
              */}/* xl */<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* lg */<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* md */<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;/* sm */<br/>{/*
              */}&#125;{/*
            */}</div>
          </div>
        }
        {parsed.method == "scss" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.scss</div>
            <div className="code__content">{/*
              */}// xl<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// lg<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// md<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// sm<br/>{/*
              */}&#125;{/*
            */}</div>
          </div>
        }
        {parsed.method == "sass" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.sass</div>
            <div className="code__content">{/*
              */}// xl<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span><br/>{/*
              */}&nbsp;&nbsp;// lg<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span><br/>{/*
              */}&nbsp;&nbsp;// md<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span><br/>{/*
              */}&nbsp;&nbsp;// sm{/*
            */}</div>
          </div>
        }
        {parsed.method == "less" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.less</div>
            <div className="code__content">{/*
              */}// xl<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// lg<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// md<br/>{/*
              */}}<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span> &#123;<br/>{/*
              */}&nbsp;&nbsp;// sm<br/>{/*
              */}&#125;{/*
            */}</div>
          </div>
        }
        {parsed.method == "stylus" &&
          <div className="code code--install xl-mb8">
            <div className="tag tag--bottom">.styl</div>
            <div className="code__content">{/*
              */}// xl<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 1024px)</span><br/>{/*
              */}&nbsp;&nbsp;// lg<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 768px)</span><br/>{/*
              */}&nbsp;&nbsp;// md<br/><br/>{/*
              */}@media <span className="code-item">(max-width: 667px)</span><br/>{/*
              */}&nbsp;&nbsp;// sm{/*
            */}</div>
          </div>
        }
      </div>
    )
  }
});

module.exports = LearnBreakpointContent;
