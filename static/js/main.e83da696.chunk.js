(this.webpackJsonpkryptodash=this.webpackJsonpkryptodash||[]).push([[0],{79:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),c=n(36),l=n(14),u=n.n(l),s=n(23),f=n(45),m=n(52),p=n(53),d=n(68),v=n(54),b=n(69),g=n(15),h=n.n(g),C=n(39),y=n.n(C);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=n(86);x.setApiKey("8377d16444ea029e15c9ed685c6209c00507328714da4da3514d62a085397bf9");var j=a.a.createContext({page:"",favorites:[],prices:[],timeInterval:"weeks",filteredCoins:[],currentFavorite:"BTC",historical:[],confirmFavorites:function(){},firstVisit:!1,setPage:function(){},addCoin:function(){},removeCoin:function(){},isInFavorites:function(){return!1},setFilteredCoins:function(){},setCurrentFavorite:function(){},changeChartSelect:function(){}}),k=12,S=10,F=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(v.a)(t).call(this,e))).componentDidMount=function(){n.fetchCoins(),n.fetchPrices(),n.fetchHistorical()},n.addCoin=function(e){var t=Object(f.a)(n.state.favorites);t.length<k&&(t.push(e),n.setState({favorites:t}))},n.removeCoin=function(e){var t=Object(f.a)(n.state.favorites);n.setState({favorites:h.a.pull(t,e)})},n.fetchCoins=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.coinList();case 2:t=e.sent.Data,console.log("fetch",t),n.setState({coinList:t});case 5:case"end":return e.stop()}}),e)}))),n.fetchPrices=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.prices();case 4:t=(t=e.sent).filter((function(e){return Object.keys(e).length})),console.log("prices",t),n.setState({prices:t});case 8:case"end":return e.stop()}}),e)}))),n.fetchHistorical=Object(s.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.firstVisit){e.next=3;break}return console.log("first visit",n.state.firstVisit),e.abrupt("return");case 3:return e.next=5,n.historical();case 5:t=e.sent,r=[{name:n.state.currentFavorite,data:t.map((function(e,t){return[y()().subtract(Object(c.a)({},n.state.timeInterval,S-t)).valueOf(),e.USD]}))}],n.setState({historical:r});case 8:case"end":return e.stop()}}),e)}))),n.historical=Object(s.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],r=S;r>0;r--)t.push(x.priceHistorical(n.state.currentFavorite,["USD"],y()().subtract(Object(c.a)({},n.state.timeInterval,r)).toDate()));return e.abrupt("return",Promise.all(t));case 3:case"end":return e.stop()}}),e)}))),n.prices=Object(s.a)(u.a.mark((function e(){var t,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=0;case 2:if(!(r<n.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,x.priceFull(n.state.favorites[r],"USD");case 6:a=e.sent,t.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:r++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),n.isInFavorites=function(e){return h.a.includes(n.state.favorites,e)},n.confirmFavorites=function(){var e=n.state.favorites[0]||"";n.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,prices:[],historical:[]},(function(){n.fetchPrices(),n.fetchHistorical()})),localStorage.setItem("kryptoDash",JSON.stringify({favorites:n.state.favorites,currentFavorite:e}))},n.setCurrentFavorite=function(e){n.setState({currentFavorite:e,historical:[]},n.fetchHistorical),localStorage.setItem("kryptoDash",JSON.stringify(O({},JSON.parse(String(localStorage.getItem("kryptoDash"))),{currentFavorite:e})))},n.savedSettings=function(){var e=JSON.parse(String(localStorage.getItem("kryptoDash")));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}},n.setPage=function(e){n.setState({page:e})},n.setFilteredCoins=function(e){return n.setState({filteredCoins:e})},n.changeChartSelect=function(e){n.setState({timeInterval:e,historical:[]},n.fetchHistorical)},n.state=O({page:"settings",favorites:["BTC","ETH","XRP","USDT","BCH","LTC","BSV","EOS","BNB","XTZ","LEO","XLM"],currentFavorite:"BTC",historical:[],prices:[],timeInterval:"weeks",filteredCoins:[]},n.savedSettings(),{confirmFavorites:n.confirmFavorites,setPage:n.setPage,addCoin:n.addCoin,removeCoin:n.removeCoin,isInFavorites:n.isInFavorites,setFilteredCoins:n.setFilteredCoins,setCurrentFavorite:n.setCurrentFavorite,changeChartSelect:n.changeChartSelect}),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component),w=n(99),A=function(){return a.a.createElement(j.Consumer,null,(function(e){return e.firstVisit?a.a.createElement(w.a,{variant:"h6"},"Welcome to Kryptodash, please select your favorite coins!"):null}))},P=n(32),D=n(4),B=n(5),I=n(124);function T(){var e=Object(D.a)(["\n  display: grid;\n  justify-content: center;\n"]);return T=function(){return e},e}function L(){var e=Object(D.a)(["\n  && {\n    margin: 40px 20px;\n    cursor: pointer;\n  }\n"]);return L=function(){return e},e}var H=Object(B.b)((function(e){var t=Object(P.a)({},e);return a.a.createElement(I.a,t)}))(L()),N=B.b.div(T()),V=function(){return a.a.createElement(j.Consumer,null,(function(e){var t=e.confirmFavorites;return a.a.createElement(N,null,a.a.createElement(H,{variant:"outlined",size:"large",color:"secondary",onClick:t},"Confirm Favorites"))}))},W=function(e){return a.a.createElement(j.Consumer,null,(function(t){return t.page!==e.name?null:a.a.createElement("div",null,e.children)}))},z=n(125),M=("background-color: ".concat("#061a44"),"background-color: ".concat("#fff",";"));"background-color: ".concat("#42ff3a",";");function G(){var e=Object(D.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return G=function(){return e},e}function U(){var e=Object(D.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return U=function(){return e},e}function K(){var e=Object(D.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return K=function(){return e},e}function J(){var e=Object(D.a)(["\n  && {\n    border-radius: 5px;\n    padding: 10px;\n  }\n"]);return J=function(){return e},e}var R=Object(B.b)(z.a)(J()),X=Object(B.b)(R)(K(),"box-shadow: 0 0 3px 2px #4CAF50"),$=Object(B.b)(X)(U(),"box-shadow: 0 0 3px 2px #F44336"),Y=Object(B.b)(R)(G()),Z=n(58),q=n.n(Z);function Q(){var e=Object(D.a)(["\n  justify-self: right;\n  display: none;\n  ",": hover & {\n    display: block;\n    color: red;\n  }\n"]);return Q=function(){return e},e}function _(){var e=Object(D.a)(["\n  justify-self: right;\n"]);return _=function(){return e},e}function ee(){var e=Object(D.a)(["\n  margin-right: 10px;\n"]);return ee=function(){return e},e}function te(){var e=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 10px;\n"]);return te=function(){return e},e}var ne=B.b.div(te()),re=B.b.div(ee()),ae=B.b.div(_()),oe=B.b.div(Q(),$),ie=function(e){return a.a.createElement(ne,null,a.a.createElement(re,null,e.name),e.topSection?a.a.createElement(oe,null,a.a.createElement(q.a,null)):a.a.createElement(ae,null,e.symbol))};function ce(){var e=Object(D.a)(["\n      height: 200px;\n      margin: auto;\n      display: block;\n    "]);return ce=function(){return e},e}function le(){var e=Object(D.a)(["\n  height: 50px;\n  ","\n"]);return le=function(){return e},e}var ue=B.b.img(le(),(function(e){return e.spotlight&&Object(B.a)(ce())})),se=function(e){var t=e.coin,n=e.spotlight;return a.a.createElement(ue,{spotlight:n,alt:t.CoinSymbol,src:"http://cryptocompare.com/".concat(t.ImageUrl)})};function fe(e,t,n,r){return e?function(){r(t)}:function(){n(t)}}var me=function(e){return a.a.createElement(j.Consumer,null,(function(t){var n=t.coinList,r=t.addCoin,o=t.removeCoin,i=t.isInFavorites,c=n[e.coinKey],l=X;return e.topSection?l=$:i(e.coinKey)&&(l=Y),a.a.createElement(l,{onClick:fe(e.topSection,e.coinKey,r,o)},a.a.createElement(ie,{topSection:e.topSection,name:c.CoinName,symbol:c.Symbol}),a.a.createElement(se,{coin:c}))}))};function pe(){var e=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return pe=function(){return e},e}var de=B.b.div(pe());function ve(e,t,n,r){return t?n:function(e,t){return Object.keys(t).length>0?Object.keys(t):Object.keys(e).slice(0,100)}(e,r)}var be=function(e){return a.a.createElement(j.Consumer,null,(function(t){var n=t.coinList,r=t.favorites,o=t.filteredCoins;return a.a.createElement(de,null,ve(n,!!e.topSection,r,o).map((function(t){return a.a.createElement(me,{key:t,topSection:!!e.topSection,coinKey:t})})))}))},ge=n(59),he=n.n(ge),Ce=n(60),ye=n(134),Ee=n(133),Oe=n(126),xe=n(61),je=n.n(xe),ke=Object(Ce.a)((function(e){return Object(ye.a)({root:{padding:"4px 6px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})})),Se=function(e){var t=e.search,n=ke();return a.a.createElement(z.a,{className:n.root},a.a.createElement(Oe.a,{type:"submit",className:n.iconButton,"aria-label":"search"},a.a.createElement(je.a,null)),a.a.createElement(Ee.a,{onChange:function(e){return t(e)},className:n.input,placeholder:"Search Coins",inputProps:{"aria-label":"Search Coins"}}))};function Fe(){var e=Object(D.a)(["\n  ","\n  ","\n  padding: 4px;\n  border-radius: 5px;\n  border: 1px solid;\n  height: 25px;\n  color: #1163c9;\n  place-self: center center;\n"]);return Fe=function(){return e},e}function we(){var e=Object(D.a)(["\n  margin: 40px;\n  display: grid;\n  justify-content: center;\n"]);return we=function(){return e},e}var Ae=B.b.div(we()),Pe=(B.b.input(Fe(),M,"font-size: 1.0em;"),h.a.debounce((function(e,t,n){var r=Object.keys(t),a=r.map((function(e){return t[e].CoinName})),o=r.concat(a),i=he.a.filter(e,o,{}).map((function(e){return e.string}));n(h.a.pickBy(t,(function(e,t){var n=e.coinName;return h.a.includes(i,t)||h.a.includes(i,n)})))}),500));var De=function(){return a.a.createElement(j.Consumer,null,(function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(Ae,null,a.a.createElement(Se,{search:function(e){return function(e,t,n){var r=e.target.value;r?Pe(r,n,t):t([])}(e,t,n)}}))}))},Be=function(){return a.a.createElement(W,{name:"settings"},a.a.createElement(A,null),a.a.createElement(be,{topSection:!0}),a.a.createElement(V,null),a.a.createElement(De,null),a.a.createElement(be,null))},Ie=n(127),Te=n(66),Le=n(128),He=n(129),Ne=n(20),Ve={typography:{fontFamily:["Share Tech Mono","monospace"].join(",")}},We=Object(Te.a)(Ve),ze=Object(Ce.a)((function(e){return Object(ye.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},typography:{fontFamily:"Share Tech Mono",htmlFontSize:12}})})),Me=function(e){var t=e.children,n=ze(Object(Ne.a)());return a.a.createElement(Ie.a,{theme:We},a.a.createElement("div",{className:n.root},a.a.createElement(Le.a,null),a.a.createElement(He.a,{className:n.main},t)))},Ge=n(62),Ue=n.n(Ge),Ke=n(63),Je=n.n(Ke),Re=n(132);function Xe(){var e=Object(D.a)([""]);return Xe=function(){return e},e}function $e(){var e=Object(D.a)([""]);return $e=function(){return e},e}function Ye(){var e=Object(D.a)(["\n  && {\n    cursor: pointer;\n    margin-left: 20px;\n    ","\n    ",";\n  }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(D.a)(["\n  display: grid;\n  grid-template-columns: 190px auto;\n  justify-items: right;\n"]);return Ze=function(){return e},e}var qe=B.b.div(Ze()),Qe=Object(B.b)((function(e){var t=Object(P.a)({},e);return a.a.createElement(I.a,t)}))(Ye(),(function(e){return e.active&&Object(B.a)($e())}),(function(e){return e.show&&Object(B.a)(Xe())})),_e=function(e){var t,n=Object(r.useContext)(j),o=n.page===e.name?"contained":"outlined",i=n.firstVisit&&"dashboard"===e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qe,{disabled:i,onClick:function(){return n.setPage(e.name)},variant:o,color:"primary",size:"large"},"settings"===e.name?a.a.createElement(Ue.a,null):a.a.createElement(Je.a,null),a.a.createElement(Re.a,{xsDown:!0},a.a.createElement("div",{style:{marginLeft:"5px"}},a.a.createElement(w.a,null,(t=e.name).charAt(0).toUpperCase()+t.substr(1))))))},et=function(){return a.a.createElement(qe,null,a.a.createElement("div",null,a.a.createElement(w.a,{variant:"h4"}," KRYPTODASH")),a.a.createElement("div",null,a.a.createElement(_e,{name:"dashboard"}),a.a.createElement(_e,{name:"settings"})))};function tt(){var e=Object(D.a)(["\n  margin-top: 40px;\n"]);return tt=function(){return e},e}var nt=B.b.div(tt()),rt=function(e){return a.a.createElement(j.Consumer,null,(function(t){var n=t.coinList,r=t.prices;t.firstVisit;return n?r?a.a.createElement(nt,null,e.children):a.a.createElement(nt,null,a.a.createElement(w.a,{variant:"h6"}," Loading Prices ")," "):a.a.createElement(nt,null,a.a.createElement(w.a,{variant:"h6"}," Loading Coins "))}))};function at(){var e=Object(D.a)(["\n        ","\n        pointer-events: none;\n      "]);return at=function(){return e},e}function ot(){var e=Object(D.a)(["\n        display: grid;\n        ","\n        grid-gap: 5px;\n        grid-template-columns: repeat(3, 1fr);\n        justify-items: right;\n      "]);return ot=function(){return e},e}function it(){var e=Object(D.a)(["\n  && {\n    ","\n\n    ","\n  }\n"]);return it=function(){return e},e}function ct(){var e=Object(D.a)(["\n      color: red;\n    "]);return ct=function(){return e},e}function lt(){var e=Object(D.a)(["\n  color: green;\n  ","\n"]);return lt=function(){return e},e}function ut(){var e=Object(D.a)(["\n  ","\n"]);return ut=function(){return e},e}function st(){var e=Object(D.a)(["\n  justify-self: left;\n"]);return st=function(){return e},e}function ft(){var e=Object(D.a)(["\n  justify-self: right;\n"]);return ft=function(){return e},e}var mt=B.b.div(ft()),pt=B.b.div(st()),dt=B.b.div(ut(),"font-size: 1.2em"),vt=B.b.div(lt(),(function(e){return e.red&&Object(B.a)(ct())})),bt=function(e){return+(e+"").slice(0,7)},gt=Object(B.b)(X)(it(),(function(e){return e.compact&&Object(B.a)(ot(),"font-size: 0.75em")}),(function(e){return e.currentFavorite&&Object(B.a)(at(),"box-shadow: 0 0 3px 2px #4CAF50")})),ht=function(e){var t=e.data;return a.a.createElement(mt,null,a.a.createElement(vt,{red:t.CHANGEPCT24HOUR<0},bt(t.CHANGEPCT24HOUR),"%"))},Ct=function(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(gt,{currentFavorite:r,onClick:o},a.a.createElement(ne,null,a.a.createElement(pt,null,t),a.a.createElement(ht,{data:n}),a.a.createElement(dt,null,"$",bt(n.PRICE))))},yt=function(e){var t=e.sym,n=e.data,r=e.currentFavorite,o=e.setCurrentFavorite;return a.a.createElement(gt,{compact:!0,currentFavorite:r,onClick:o},a.a.createElement(pt,null,t),a.a.createElement(ht,{data:n}),a.a.createElement("div",null,"$",bt(n.PRICE)))},Et=function(e){var t=e.price,n=e.index,o=Object(r.useContext)(j),i=Object.keys(t)[0],c=t[i].USD,l=n<5?Ct:yt,u=o.currentFavorite===i;return a.a.createElement(l,{sym:i,data:c,currentFavorite:u,setCurrentFavorite:function(e){return o.setCurrentFavorite(i)}})};function Ot(){var e=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Ot=function(){return e},e}var xt=B.b.div(Ot()),jt=function(){var e=Object(r.useContext)(j);return a.a.createElement(xt,null,e.prices.map((function(e,t){return a.a.createElement(Et,{key:t,price:e,index:t})})))};function kt(){var e=Object(D.a)(["\n  text-align: center;\n  ",";\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]);return kt=function(){return e},e}var St=B.b.div(kt(),"font-size: 1.2em"),Ft=function(){return a.a.createElement(j.Consumer,null,(function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(R,null,a.a.createElement(St,null,n[t].CoinName),a.a.createElement(se,{spotlight:!0,coin:n[t]}))}))},wt=n(43),At=n.n(wt),Pt=n(67),Dt=n(131),Bt=n(136),It=n(130),Tt=n(135);function Lt(){var e=a.a.useState("weeks"),t=Object(Pt.a)(e,2),n=t[0],o=t[1],i=Object(r.useContext)(j);return Object(r.useEffect)((function(){i.changeChartSelect(n),console.log(n)}),[n]),a.a.createElement("div",{style:{margin:"10px 10px 30px 20px"}},a.a.createElement(Tt.a,{component:"fieldset"},a.a.createElement(Bt.a,{"aria-label":"position",name:"position",value:n,onChange:function(e){o(e.target.value)},row:!0},a.a.createElement(It.a,{value:"days",control:a.a.createElement(Dt.a,{color:"primary"}),label:"Days",labelPlacement:"end"}),a.a.createElement(It.a,{value:"weeks",control:a.a.createElement(Dt.a,{color:"primary"}),label:"Weeks",labelPlacement:"end"}),a.a.createElement(It.a,{value:"months",control:a.a.createElement(Dt.a,{color:"primary"}),label:"Months",labelPlacement:"end"}))))}At.a.Highcharts.setOptions({colors:["#FFA000"],chart:{backgroundColor:"#ffffff",className:"dark-container",plotBackgroundColor:"#ffffff",plotBorderColor:"#CCCCCC",plotBorderWidth:0},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{enabled:!1,backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}});var Ht=function(){var e=Object(r.useContext)(j),t={title:{text:""},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e.historical,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}};return a.a.createElement(R,null,a.a.createElement(Lt,null),e.historical.length?a.a.createElement(At.a,{config:t}):a.a.createElement("div",{style:{margin:"20px"}}," Loading Historical Data ..."))};function Nt(){var e=Object(D.a)(["\n  display: grid;\n  margin-top: 20px;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 3fr;\n"]);return Nt=function(){return e},e}var Vt=B.b.div(Nt()),Wt=function(){var e=Object(r.useContext)(j);return a.a.createElement(a.a.Fragment,null,e.prices.length>0?a.a.createElement(Ht,null):null)},zt=function(){return a.a.createElement(j.Consumer,null,(function(e){return e.prices.length>0?a.a.createElement(Ft,null):null}))},Mt=function(){return a.a.createElement(W,{name:"dashboard"},a.a.createElement(jt,null),a.a.createElement(Vt,null,a.a.createElement(zt,null),a.a.createElement(Wt,null)))},Gt=function(){return a.a.createElement(Me,null,a.a.createElement(F,null,a.a.createElement(et,null),a.a.createElement(rt,null,a.a.createElement(Be,null),a.a.createElement(Mt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.e83da696.chunk.js.map