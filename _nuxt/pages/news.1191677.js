(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,e,r){var content=r(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("1f6c068a",content,!0,{sourceMap:!1})},268:function(t,e,r){var content=r(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("de8fc5d0",content,!0,{sourceMap:!1})},274:function(t,e,r){t.exports=r.p+"img/RSS.3addd2c.png"},275:function(t,e,r){"use strict";var n=r(267);r.n(n).a},276:function(t,e,r){(e=r(34)(!1)).push([t.i,"h2[data-v-8c7d1026]{font-size:2.5rem}h3[data-v-8c7d1026]{font-size:1.9rem}article[data-v-8c7d1026]{font-size:1.3rem}.news-img[data-v-8c7d1026]{max-width:100%;height:auto;border:2px solid #000}@media (min-width:768px){.news-img[data-v-8c7d1026]{max-width:50%}}",""]),t.exports=e},277:function(t,e,r){"use strict";var n=r(268);r.n(n).a},278:function(t,e,r){(e=r(34)(!1)).push([t.i,"#rss-icon[data-v-1d870c52]{width:25px;height:auto}.card-header[data-v-1d870c52]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;height:auto}.year[data-v-1d870c52]{border-bottom:2px solid #000}",""]),t.exports=e},315:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-5"},[e("img",{staticClass:"mr-2",attrs:{id:"rss-icon",src:r(274),alt:"RSS Feed logo"}}),this._v("\n    Subscribe to our \n    "),e("a",{attrs:{href:"/Solar2.0/feed.xml",target:"_blank"}},[this._v("\n        RSS feed\n    ")])])}],c=(r(13),r(39),r(12)),o={name:"NewsArticle",props:{article:{type:Object,required:!0}}},l=(r(275),r(28)),d={name:"News",layout:"secondary",components:{NewsArticle:Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"d-flex flex-column my-5"},[r("h2",[t._v(t._s(t.article.title))]),t._v(" "),r("h3",{staticClass:"mb-3"},[t._v(t._s(t.article.author+"  |  "+t.article.date))]),t._v(" "),r("p",[t._v(t._s(t.article.content))]),t._v(" "),""!==t.article.image?r("img",{staticClass:"news-img align-self-center mt-5",attrs:{src:"/Solar2.0/News/"+t.article.image}}):t._e()])}),[],!1,null,"8c7d1026",null).exports},data:function(){return{list:[],currArticleList:[],archive:{}}},head:function(){return{title:"News | UW Solar"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("news").fetch();case 3:return e.t0=e.sent,e.abrupt("return",{list:e.t0});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this,e=[],r={},n=new Date;this.list.forEach((function(article){var e=article.date.split(" "),r=new Date("".concat(t.$mapMonth[e[0]],"/").concat(e[1],"/").concat(e[2]));article.order=n.getTime()-r.getTime()})),this.list=this.list.sort((function(a,b){return a.order-b.order})),this.list.forEach((function(article){var n,c=article.date.split(" "),o=parseInt(c[2]),l=t.$mapMonth[c[0]];t.$academicYear(o,l)?e.push(article):(n=l>=9?"".concat(o,"/").concat(o+1):"".concat(o-1,"/").concat(o),r.hasOwnProperty(n)||(r[n]=[]),r[n].push(article))})),this.currArticleList=e,this.archive=r}},v=(r(277),Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"data-container"},[r("div",{staticClass:"data"}),t._v(" "),r("h1",[t._v("News")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"root"}},t._l(t.currArticleList,(function(article,t){return r("div",{key:"news-"+t},[r("news-article",{attrs:{article:article}})],1)})),0),t._v(" "),r("h1",[t._v("Archive")]),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"archive-root"}},t._l(Object.keys(t.archive),(function(e){return r("div",{key:"wrapper-"+e},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"date-"+e,expression:"'date-' + year"}],staticClass:"card-header year"},[r("h3",[t._v(t._s(e))])]),t._v(" "),r("b-collapse",{attrs:{id:"date-"+e}},t._l(t.archive[e],(function(article,n){return r("div",{key:"news-wrapper-"+e+n},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"news-"+e+n,expression:"'news-' + year + index"}],staticClass:"card-header flex-row-reverse"},[r("h4",[t._v(t._s(article.title))])]),t._v(" "),r("b-collapse",{attrs:{id:"news-"+e+n}},[r("news-article",{attrs:{article:article}})],1)],1)})),0)],1)})),0),t._v(" "),t._m(0)])}),n,!1,null,"1d870c52",null));e.default=v.exports}}]);