(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1004:function(e,t,n){"use strict";var a=n(92),u=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=u(n(79)),l=u(n(498)),o=u(n(189)),i=u(n(190)),c=u(n(256)),f=u(n(257)),d=u(n(258)),s=u(n(261));n(262);var p=u(n(177)),m=a(n(0)),h=u(n(3)),g=u(n(191)),v=n(58),y=n(260),M=n(259),E=u(n(1005)),I=p["default"].SubMenu,b=function e(t){if("string"===typeof t){if((0,s["default"])(t))return m["default"].createElement(g["default"],{component:function e(){return m["default"].createElement("img",{src:t,alt:"icon",className:E["default"].icon})}});if(!m["default"].isValidElement(t))return m["default"].createElement(g["default"],{component:function e(){return m["default"].createElement("span",{className:E["default"].icon},t)}})}return t},w=function(e){function t(){var e,n;(0,o["default"])(this,t);for(var a=arguments.length,u=new Array(a),r=0;r<a;r++)u[r]=arguments[r];return n=(0,c["default"])(this,(e=(0,f["default"])(t)).call.apply(e,[this].concat(u))),n.getNavMenuItems=function(e){return e?e.filter((function(e){return e.name&&!e.hideInMenu})).map((function(e){return n.getSubMenuOrItem(e)})).filter((function(e){return e})):[]},n.getSelectedMenuKeys=function(e){var t=n.props.flatMenuKeys;return(0,y.urlToList)(e).map((function(e){return(0,M.getMenuMatches)(t,e).pop()}))},n.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some((function(e){return e.name}))){var t=e.name;return m["default"].createElement(I,{title:e.icon?m["default"].createElement("span",null,b(e.icon),m["default"].createElement("span",null,t)):t,key:e.path},n.getNavMenuItems(e.children))}return m["default"].createElement(p["default"].Item,{key:e.path},n.getMenuItemPath(e))},n.getMenuItemPath=function(e){var t=e.name,a=n.conversionPath(e.path),u=b(e.icon),r=e.target;if(/^https?:\/\//.test(a))return m["default"].createElement("a",{href:a,target:r},u,m["default"].createElement("span",null,t));var l=n.props,o=l.location,i=l.isMobile,c=l.onCollapse;return m["default"].createElement(v.Link,{to:a,target:r,replace:a===o.pathname,onClick:i?function(){c(!0)}:void 0},u,m["default"].createElement("span",null,t))},n.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},n.getPopupContainer=function(e,t){return e&&"topmenu"===t?n.wrap:document.body},n.getRef=function(e){n.wrap=e},n}return(0,d["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function e(){var t=this,n=this.props,a=n.openKeys,u=n.theme,o=n.mode,i=n.location.pathname,c=n.className,f=n.collapsed,d=n.fixedHeader,s=n.layout,g=this.getSelectedMenuKeys(i);!g.length&&a&&(g=[a[a.length-1]]);var v={};a&&!f&&(v={openKeys:0===a.length?(0,l["default"])(g):a});var y=this.props,M=y.handleOpenChange,E=y.style,I=y.menuData,b=(0,h["default"])(c,{"top-nav-menu":"horizontal"===o});return m["default"].createElement(m["default"].Fragment,null,m["default"].createElement(p["default"],(0,r["default"])({key:"Menu",mode:o,theme:u,onOpenChange:M,selectedKeys:g,style:E,className:b},v,{getPopupContainer:function e(){return t.getPopupContainer(d,s)}}),this.getNavMenuItems(I)),m["default"].createElement("div",{ref:this.getRef}))}}]),t}(m.PureComponent);t["default"]=w},1005:function(e,t,n){e.exports={icon:"index_icon_bWdA8"}}}]);