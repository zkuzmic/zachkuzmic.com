(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(187),o=a(196),c=a(194);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},187:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(189);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(e,t,a){var n;e.exports=(n=a(193))&&n.default||n},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Zach Kuzmic — Front End Engineer"}}}}},193:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(60),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},194:function(e,t,a){"use strict";var n=a(195),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(199),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u},{name:"msapplication-TileColor",content:"#da532c"},{name:"msapplication-config",content:"/favicon/browserconfig.xml"},{name:"theme-color",content:"#ffffff"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r),link:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"},{rel:"shortcut icon",href:"/favicon/favicon.ico"}]})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Zach Kuzmic — Front End Engineer",description:"Portfolio site for Zach Kuzmic, Front End Engineer based in Austin, TX",author:"Zach Kuzmic"}}}}},196:function(e,t,a){"use strict";var n=a(192),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(187),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1024,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(197),a(198)),m=a.n(d),p=function(e){var t=e.children,a=e.includeHeader,r=void 0===a||a;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.contentWrapper},i.a.createElement("div",{className:m.a.contentWrapperInner},i.a.createElement("main",null,t))),i.a.createElement("footer",{className:m.a.footer},"© ",(new Date).getFullYear()," Zach Kuzmic")))},data:n})};p.propTypes={children:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b84fd9e8c84164f7fa60.js.map