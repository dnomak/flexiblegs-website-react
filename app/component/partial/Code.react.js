"use strict";

import React from 'react';

const queryString = require('query-string');

var Code = React.createClass({

  getInitialState: function() {
    return {
      compiledView: false
    };
  },

  notHiddenCompiledView: function(event) {
    this.setState({ compiledView: true });
  },

  hiddenCompiledView: function(event) {
    this.setState({ compiledView: false });
  },

  codeLearnType: function() {

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
          <div className="tag tag--bottom">.html</div>
        }
        {parsed.method == "bem" &&
          <div className="tag tag--bottom">.html</div>
        }
        {parsed.method == "scss" &&
          <div className="tag tag--bottom">.scss</div>
        }
        {parsed.method == "sass" &&
          <div className="tag tag--bottom">.sass</div>
        }
        {parsed.method == "less" &&
          <div className="tag tag--bottom">.less</div>
        }
        {parsed.method == "stylus" &&
          <div className="tag tag--bottom">.styl</div>
        }
        {this.props.type == "wrap" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="<span className="code-item">wrap</span>"&gt;<br/>{/*
                */}<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="<span className="code-item">wrap</span>"&gt;<br/>{/*
                */}<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap</span>;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap</span><br/>{/*
                */}&nbsp;{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap</span>;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap</span>()<br/>{/*
                */}&nbsp;{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "col" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="<span className="code-item">col</span>"&gt;&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="<span className="code-item">wrap__col</span>"&gt;&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col</span>;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col</span>;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col()</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "col-row" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-1-3</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-1-3</span>"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-1-3</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 1-1 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-2 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-3, 2-3 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-4, 2-4, 3-4 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-5, 2-5, 3-5, 4-5 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-6, 2-6, 3-6, 4-6, 5-6 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-7, 2-7, 3-7, 4-7, 5-7, 6-7 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-8, 2-8, 3-8, 4-8, 5-8, 6-8, 7-8 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-9, 2-9, 3-9, 4-9, 5-9, 6-9, 7-9, 8-9, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-10, 2-10, 3-10, 4-10, 5-10, 6-10, 7-10, 8-10, 9-10, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-11, 2-11, 3-11, 4-11, 5-11, 6-11, 7-11, 8-11, 9-11, 10-11, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-12, 2-12, 3-12, 4-12, 5-12, 6-12, 7-12, 8-12, 9-12, 10-12, 11-12, --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-1-3</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-1-3</span>"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-1-3</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 1-1 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-2 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-3, 2-3 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-4, 2-4, 3-4 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-5, 2-5, 3-5, 4-5 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-6, 2-6, 3-6, 4-6, 5-6 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-7, 2-7, 3-7, 4-7, 5-7, 6-7 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-8, 2-8, 3-8, 4-8, 5-8, 6-8, 7-8 --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-9, 2-9, 3-9, 4-9, 5-9, 6-9, 7-9, 8-9, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-10, 2-10, 3-10, 4-10, 5-10, 6-10, 7-10, 8-10, 9-10, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-11, 2-11, 3-11, 4-11, 5-11, 6-11, 7-11, 8-11, 9-11, 10-11, --&gt;</div>{/*
                */}<div className="code-comment">&lt;!-- 1-12, 2-12, 3-12, 4-12, 5-12, 6-12, 7-12, 8-12, 9-12, 10-12, 11-12, --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col(1,3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col(1,3)</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col(1,3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col(1,3)</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "hidden" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3 <span className="code-item">xl-hidden</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3 <span className="code-item">wrap__col--xl-hidden</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("hidden")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col(1,3)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("hidden")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("hidden")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(1,3)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("hidden")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "not-hidden" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3 <span className="code-item">xl-not-hidden</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3 <span className="code-item">wrap__col--xl-not-hidden</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("not-hidden")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col(1,3)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("not-hidden")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("not-hidden")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(1,3)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("not-hidden")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "gutter" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-gutter-24</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 0, 8, 16, 24, 40 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-gutter-24</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 0, 8, 16, 24, 40 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("gutter",24)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("gutter",24)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("gutter",24)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("gutter",24)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "outside" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-gutter-24 <span className="code-item">xl-outside-24</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 0, 8, 16, 24, 40 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-gutter-24 <span className="code-item">wrap--xl-outside-24</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 0, 8, 16, 24, 40 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("outside",24)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("outside",24)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("outside",24)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("outside",24)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "wrap-col" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-gutter-24 <span className="code-item">xl-3</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-gutter-24 <span className="code-item">wrap--xl-3</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap(3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap(3)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap(3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap(3)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "auto" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-gutter-24 <span className="code-item">xl-auto</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-gutter-24 <span className="code-item">wrap--xl-auto</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("auto")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("auto")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("auto")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("auto")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "table" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-table</span> xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col" style="width: 112px;"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col" style="width: 212px;"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-table</span> wrap--xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col" style="width: 112px;"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col" style="width: 212px;"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("table")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 112px;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 212px;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("table")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 112px<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 212px{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("table")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 112px;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 212px;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("table")</span><br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 112px<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 212px{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "width" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}css{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}bem{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}scss{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}sass{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}less{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}stylus{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "flexbox" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-flexbox</span> xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- between, around, baseline, first, last, reverse --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-flexbox</span> wrap--xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- between, around, baseline, first, last, reverse --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("flexbox")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("flexbox")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("flexbox")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("flexbox")</span><br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "normal" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-normal</span> xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-normal</span> wrap--xl-gutter-24"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("normal")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("normal")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("normal")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("normal")</span><br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "left" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-left</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-left</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("left")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("left")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("left")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("left")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "center" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-center</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-center</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("center")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("center")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("center")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("center")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "right" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-right</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-right</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("right")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("right")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12){/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("right")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("right")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "top" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-top</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-top</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("top")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("top")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("top")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("top")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "middle" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-middle</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-middle</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("middle")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("middle")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("middle")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("middle")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "bottom" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">xl-bottom</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap <span className="code-item">wrap--xl-bottom</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-6-12"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-3-12"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("bottom")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("bottom")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(3,12)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("bottom")</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(6,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(3,12);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("bottom")</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(6,12)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(3,12)<br/>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "between" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox <span className="code-item">xl-between</span> xl-5"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-1"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;07&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox <span className="code-item">wrap--xl-between</span> wrap--xl-5"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-1"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;07&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("between")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap(5);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("between")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap(5)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(1,1)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("between")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap(5);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("between")</span><br/>{/*
                */}&nbsp;&nbsp;wrap(5)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(1,1)<br/>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "around" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox <span className="code-item">xl-around</span> xl-5"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-1"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;07&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox <span className="code-item">wrap--xl-around</span> wrap--xl-5"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-1"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;07&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("around")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap(5);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("around")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap(5)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(1,1)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("around")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap(5);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("around")</span><br/>{/*
                */}&nbsp;&nbsp;wrap(5)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.four<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(1,1)<br/>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "baseline" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox <span className="code-item">xl-baseline</span> xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox <span className="code-item">wrap--xl-baseline</span> wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("baseline")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("baseline")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("baseline")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("baseline")</span><br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "first" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-first</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-first</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("first")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("first")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("first")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("first")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "not-first" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-not-first</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-not-first</span>"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("not-first")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("not-first")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("not-first")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("not-first")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "last" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-last</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-last</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("last")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("last")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("last")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("last")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "not-last" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col <span className="code-item">xl-not-last</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox wrap--xl-gutter-24 wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col <span className="code-item">wrap__col--xl-not-last</span>"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include <span className="code-item">col("not-last")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<span className="code-item">col("not-last")</span>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="code-item">col("not-last")</span>;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-item">col("not-last")</span>{/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "reverse" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox <span className="code-item">xl-reverse</span> xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox <span className="code-item">wrap--xl-reverse</span> wrap--xl-gutter-24 wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("reverse")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("reverse")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("reverse")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("reverse")</span><br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "not-reverse" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-flexbox <span className="code-item">xl-not-reverse</span> xl-gutter-24 xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-flexbox <span className="code-item">wrap--xl-not-reverse</span> wrap--xl-gutter-24 wrap--xl-3"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col"&gt;03&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("not-reverse")</span>;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("not-reverse")</span><br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("flexbox");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("not-reverse")</span>;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap(3);<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("flexbox")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("not-reverse")</span><br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap(3)<br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col(){/*
              */}</div>
            }
          </div>
        }
        {this.props.type == "masonry" &&
          <div>
            {parsed.method == "css" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap xl-gutter-24 xl-top <span className="code-item">xl-masonry-3</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-1"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-3"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-1"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-2"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-2"&gt;07&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="col xl-1-1"&gt;08&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 2, 3, 4, 5, 6 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "bem" &&
              <div className="code__content">{/*
                */}&lt;div class="wrap wrap--xl-gutter-24 wrap--xl-top <span className="code-item">wrap--xl-masonry-3</span>"&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-1"&gt;01&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;02&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;03&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-3"&gt;04&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-1"&gt;05&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-2"&gt;06&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-2"&gt;07&lt;/div&gt;<br/>{/*
                */}&nbsp;&nbsp;&lt;div class="wrap__col wrap__col--xl-1-1"&gt;08&lt;/div&gt;<br/>{/*
                */}&lt;/div&gt;{/*
                */}<div className="code-comment">&lt;!-- 2, 3, 4, 5, 6 --&gt;</div>{/*
              */}</div>
            }
            {parsed.method == "scss" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;@include wrap;<br/>{/*
                */}&nbsp;&nbsp;@include wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;@include wrap("top");<br/>{/*
                */}&nbsp;&nbsp;@include <span className="code-item">wrap("masonry",3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;@include col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,2);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@include col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "sass" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;+wrap<br/>{/*
                */}&nbsp;&nbsp;+wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;+wrap("top")<br/>{/*
                */}&nbsp;&nbsp;+<span className="code-item">wrap("masonry",3)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;+col<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(1,1)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(1,2)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+col(1,3)<br/>{/*
              */}</div>
            }
            {parsed.method == "less" &&
              <div className="code__content">{/*
                */}.example &#123;<br/>{/*
                */}&nbsp;&nbsp;.wrap;<br/>{/*
                */}&nbsp;&nbsp;.wrap("gutter",24);<br/>{/*
                */}&nbsp;&nbsp;.wrap("top");<br/>{/*
                */}&nbsp;&nbsp;.<span className="code-item">wrap("masonry",3)</span>;<br/>{/*
                */}&nbsp;&nbsp;&__item &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;.col;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(1,1);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(1,2);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three &#123;<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.col(1,3);<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>{/*
                */}&nbsp;&nbsp;&#125;<br/>{/*
                */}&#125;{/*
              */}</div>
            }
            {parsed.method == "stylus" &&
              <div className="code__content">{/*
                */}.example<br/>{/*
                */}&nbsp;&nbsp;wrap()<br/>{/*
                */}&nbsp;&nbsp;wrap("gutter",24)<br/>{/*
                */}&nbsp;&nbsp;wrap("top")<br/>{/*
                */}&nbsp;&nbsp;<span className="code-item">wrap("masonry",3)</span><br/>{/*
                */}&nbsp;&nbsp;&__item<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;col()<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.one<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(1,1)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.two<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(1,2)<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&.three<br/>{/*
                */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col(1,3)<br/>{/*
              */}</div>
            }
          </div>
        }
      </div>
    );
  },

  codeCompiledView: function() {
    return (
      <div>
        {this.props.type == "wrap" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap</span><br/>{/*
            */}&nbsp;&nbsp;display: block;<br/>{/*
            */}&nbsp;&nbsp;width: 100%;<br/>{/*
            */}&nbsp;&nbsp;font-size: 0;<br/>{/*
            */}&nbsp;&nbsp;letter-spacing: 0;<br/>{/*
            */}&nbsp;&nbsp;text-align: left;<br/>{/*
            */}&nbsp;&nbsp;box-sizing: border-box;<br/>{/*
            */}<span className="code-item">wrap > col</span><br/>{/*
            */}&nbsp;&nbsp;display: inline-block;<br/>{/*
            */}&nbsp;&nbsp;vertical-align: top;{/*
          */}</div>
        }
        {this.props.type == "col" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col</span><br/>{/*
            */}&nbsp;&nbsp;min-height: 1px;<br/>{/*
            */}&nbsp;&nbsp;font-size: 1rem;<br/>{/*
            */}&nbsp;&nbsp;vertical-align: middle;<br/>{/*
            */}&nbsp;&nbsp;box-sizing: border-box;<br/>{/*
          */}</div>
        }
        {this.props.type == "col-row" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(@col,@row)</span><br/>{/*
            */}&nbsp;&nbsp;width: 100% / @row * @col;{/*
          */}</div>
        }
        {this.props.type == "hidden" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(hidden)</span><br/>{/*
            */}&nbsp;&nbsp;display: none;{/*
          */}</div>
        }
        {this.props.type == "not-hidden" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(not-hidden)</span><br/>{/*
            */}&nbsp;&nbsp;display: inline-block;{/*
          */}</div>
        }
        {this.props.type == "gutter" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(gutter,@width)</span><br/>{/*
            */}&nbsp;&nbsp;width: calc(100% + @width);<br/>{/*
            */}&nbsp;&nbsp;margin-left: -@width/2;<br/>{/*
            */}&nbsp;&nbsp;margin-right: -@width/2;<br/>{/*
            */}&nbsp;&nbsp;padding-left: 0;<br/>{/*
            */}&nbsp;&nbsp;padding-right: 0;<br/>{/*
            */}<span className="code-item">wrap(gutter,@width) > col</span><br/>{/*
            */}&nbsp;&nbsp;padding-left: @width/2;<br/>{/*
            */}&nbsp;&nbsp;padding-right: @width/2;{/*
          */}</div>
        }
        {this.props.type == "outside" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(outside,@width)</span><br/>{/*
            */}&nbsp;&nbsp;width: 100%;<br/>{/*
            */}&nbsp;&nbsp;margin-left: 0;<br/>{/*
            */}&nbsp;&nbsp;margin-right: 0;<br/>{/*
            */}&nbsp;&nbsp;padding-left: @width/2;<br/>{/*
            */}&nbsp;&nbsp;padding-right: @width/2;{/*
          */}</div>
        }
        {this.props.type == "wrap-col" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(@col) > col</span><br/>{/*
            */}&nbsp;&nbsp;width: 100% / @col;{/*
          */}</div>
        }
        {this.props.type == "auto" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(auto) > col</span><br/>{/*
            */}&nbsp;&nbsp;width: auto;{/*
          */}</div>
        }
        {this.props.type == "table" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(table)</span><br/>{/*
            */}&nbsp;&nbsp;display: table;<br/>{/*
            */}&nbsp;&nbsp;table-layout: fixed;<br/>{/*
            */}&nbsp;&nbsp;flex-direction: initial;<br/>{/*
            */}&nbsp;&nbsp;flex-wrap: initial;<br/>{/*
            */}&nbsp;&nbsp;justify-content: initial;<br/>{/*
            */}&nbsp;&nbsp;align-content: initial;<br/>{/*
            */}&nbsp;&nbsp;align-items: initial;<br/>{/*
            */}&nbsp;&nbsp;-moz-column-count: auto;<br/>{/*
            */}&nbsp;&nbsp;column-count: auto;<br/>{/*
            */}<span className="code-item">wrap(table) > col</span><br/>{/*
            */}&nbsp;&nbsp;display: table-cell;{/*
          */}</div>
        }
        {this.props.type == "width" &&
          <div></div>
        }
        {this.props.type == "flexbox" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(flexbox)</span><br/>{/*
            */}&nbsp;&nbsp;display: flex;<br/>{/*
            */}&nbsp;&nbsp;table-layout: auto;<br/>{/*
            */}&nbsp;&nbsp;flex-direction: row;<br/>{/*
            */}&nbsp;&nbsp;flex-wrap: wrap;<br/>{/*
            */}&nbsp;&nbsp;justify-content: flex-start;<br/>{/*
            */}&nbsp;&nbsp;align-content: center;<br/>{/*
            */}&nbsp;&nbsp;align-items: center;<br/>{/*
            */}&nbsp;&nbsp;column-count: auto;<br/>{/*
            */}<span className="code-item">wrap(flexbox) > col</span><br/>{/*
            */}&nbsp;&nbsp;display: inline-block;{/*
          */}</div>
        }
        {this.props.type == "normal" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(normal)</span><br/>{/*
            */}&nbsp;&nbsp;display: block;<br/>{/*
            */}&nbsp;&nbsp;table-layout: auto;<br/>{/*
            */}&nbsp;&nbsp;flex-direction: initial;<br/>{/*
            */}&nbsp;&nbsp;flex-wrap: initial;<br/>{/*
            */}&nbsp;&nbsp;justify-content: initial;<br/>{/*
            */}&nbsp;&nbsp;align-content: initial;<br/>{/*
            */}&nbsp;&nbsp;align-items: initial;<br/>{/*
            */}&nbsp;&nbsp;column-count: auto;<br/>{/*
            */}<span className="code-item">wrap(normal) > col</span><br/>{/*
            */}&nbsp;&nbsp;display: inline-block;{/*
          */}</div>
        }
        {this.props.type == "left" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(left)</span><br/>{/*
            */}&nbsp;&nbsp;justify-content: flex-start;<br/>{/*
            */}&nbsp;&nbsp;text-align: left;{/*
          */}</div>
        }
        {this.props.type == "center" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(center)</span><br/>{/*
            */}&nbsp;&nbsp;justify-content: center;<br/>{/*
            */}&nbsp;&nbsp;text-align: center;{/*
          */}</div>
        }
        {this.props.type == "right" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(right)</span><br/>{/*
            */}&nbsp;&nbsp;justify-content: flex-end;<br/>{/*
            */}&nbsp;&nbsp;text-align: right;{/*
          */}</div>
        }
        {this.props.type == "top" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(top)</span><br/>{/*
            */}&nbsp;&nbsp;align-content: flex-start;<br/>{/*
            */}&nbsp;&nbsp;align-items: flex-start;<br/>{/*
            */}<span className="code-item">wrap(top) > col</span><br/>{/*
            */}&nbsp;&nbsp;vertical-align: top;{/*
          */}</div>
        }
        {this.props.type == "middle" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(middle)</span><br/>{/*
            */}&nbsp;&nbsp;align-content: center;<br/>{/*
            */}&nbsp;&nbsp;align-items: center;<br/>{/*
            */}<span className="code-item">wrap(middle) > col</span><br/>{/*
            */}&nbsp;&nbsp;vertical-align: middle;{/*
          */}</div>
        }
        {this.props.type == "bottom" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(bottom)</span><br/>{/*
            */}&nbsp;&nbsp;align-content: flex-end;<br/>{/*
            */}&nbsp;&nbsp;align-items: flex-end;<br/>{/*
            */}<span className="code-item">wrap(bottom) > col</span><br/>{/*
            */}&nbsp;&nbsp;vertical-align: bottom;{/*
          */}</div>
        }
        {this.props.type == "between" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(between)</span><br/>{/*
            */}&nbsp;&nbsp;justify-content: space-between;<br/>{/*
            */}&nbsp;&nbsp;align-content: space-between;<br/>{/*
          */}</div>
        }
        {this.props.type == "around" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(around)</span><br/>{/*
            */}&nbsp;&nbsp;justify-content: space-around;<br/>{/*
            */}&nbsp;&nbsp;align-content: space-around;<br/>{/*
          */}</div>
        }
        {this.props.type == "baseline" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(baseline)</span><br/>{/*
            */}&nbsp;&nbsp;align-items: baseline;<br/>{/*
          */}</div>
        }
        {this.props.type == "first" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(first)</span><br/>{/*
            */}&nbsp;&nbsp;order: -1;<br/>{/*
          */}</div>
        }
        {this.props.type == "not-first" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(not-first)</span><br/>{/*
            */}&nbsp;&nbsp;order: 0;<br/>{/*
          */}</div>
        }
        {this.props.type == "last" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(last)</span><br/>{/*
            */}&nbsp;&nbsp;order: 1;<br/>{/*
          */}</div>
        }
        {this.props.type == "not-last" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap > col(not-last)</span><br/>{/*
            */}&nbsp;&nbsp;order: 0;<br/>{/*
          */}</div>
        }
        {this.props.type == "reverse" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(reverse)</span><br/>{/*
            */}&nbsp;&nbsp;flex-direction: row-reverse;<br/>{/*
            */}&nbsp;&nbsp;flex-wrap: wrap-reverse;<br/>{/*
          */}</div>
        }
        {this.props.type == "not-reverse" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(not-reverse)</span><br/>{/*
            */}&nbsp;&nbsp;flex-direction: row;<br/>{/*
            */}&nbsp;&nbsp;flex-wrap: wrap;<br/>{/*
          */}</div>
        }
        {this.props.type == "masonry" &&
          <div className="code__content">{/*
            */}<span className="code-item">wrap(masonry,@col)</span><br/>{/*
            */}&nbsp;&nbsp;column-count: @col;<br/>{/*
          */}</div>
        }
      </div>
    );
  },

  codeExampleHtml: function() {
    return (
      <div>
        <div className="code code--install">
          <div className="tag tag--bottom">.html</div>
          {this.props.type == "wrap" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "col" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "col-row" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "hidden" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "not-hidden" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "gutter" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "outside" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "wrap-col" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "auto" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "table" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "width" &&
            <div></div>
          }
          {this.props.type == "flexbox" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "normal" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "left" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "center" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "right" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "top" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "middle" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "bottom" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "between" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item four"&gt;04&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;05&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;06&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;07&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "around" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item four"&gt;04&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;05&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;06&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;07&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "baseline" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "first" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "not-first" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "last" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "not-last" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "reverse" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "not-reverse" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item"&gt;03&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
          {this.props.type == "masonry" &&
            <div className="code__content">{/*
              */}&lt;div class="example"&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;01&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;02&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;03&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item three"&gt;04&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;05&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;06&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item two"&gt;07&lt;/div&gt;<br/>{/*
              */}&nbsp;&nbsp;&lt;div class="example__item one"&gt;08&lt;/div&gt;<br/>{/*
              */}&lt;/div&gt;{/*
            */}</div>
          }
        </div>
      </div>
    );
  },

  render: function() {

    const parsed = queryString.parse(location.search);

    if (parsed.method == "css" || parsed.method == "bem" || parsed.method == "scss" || parsed.method == "sass" || parsed.method == "less" || parsed.method == "stylus") {
      parsed.method = parsed.method;
    }
    else {
      parsed.method = "css";
    }

    if(parsed.method == "scss" || parsed.method == "sass" || parsed.method == "less" || parsed.method == "stylus") {
      var method = "dynamic";
    }
    if(parsed.method == "css" || parsed.method == "bem") {
      var method = "static";
    }

    return (
      <div>
        {method == "dynamic" &&
          <div className="wrap xl-gutter-24 xl-2 md-1">
            <div className="col">
              {this.codeExampleHtml()}
            </div>
            <div className="col">
              {!this.state.compiledView &&
                <div className="code code--learn">
                  <div className="tag tag--top" onClick={this.notHiddenCompiledView}><em className="icon-rocket icon-sm"/></div>
                  {this.codeLearnType()}
                </div>
              }
              {this.state.compiledView &&
                <div className="code code--black">
                  <div className="tag tag--top" onClick={this.hiddenCompiledView}><em className="icon-rocket icon-sm"/></div>
                  {this.codeCompiledView()}
                </div>
              }
            </div>
          </div>
        }
        {method == "static" &&
          <div>
            {!this.state.compiledView &&
              <div className="code code--learn">
                <div className="tag tag--top" onClick={this.notHiddenCompiledView}><em className="icon-rocket icon-sm"/></div>
                {this.codeLearnType()}
              </div>
            }
            {this.state.compiledView &&
              <div className="code code--black">
                <div className="tag tag--top" onClick={this.hiddenCompiledView}><em className="icon-rocket icon-sm"/></div>
                {this.codeCompiledView()}
              </div>
            }
          </div>
        }
      </div>

    );
  }
});

module.exports = Code;
