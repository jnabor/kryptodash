(this.webpackJsonpkryptodash=this.webpackJsonpkryptodash||[]).push([[0],{22:function(n,e,t){n.exports=t(38)},27:function(n,e,t){},28:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),c=(t(27),t(28),t(11)),u=t(3),l=t.n(u),s=t(12),f=t(8),p=t(13),m=t(14),v=t(18),d=t(15),b=t(19),g=t(4),h=t.n(g);function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var y=t(32),E=a.a.createContext({page:"",favorites:[],confirmFavorites:function(){},firstVisit:!1,setPage:function(){},addCoin:function(){},removeCoin:function(){},isInFavorites:function(){return!1}}),j=10,x=function(n){function e(n){var t;return Object(p.a)(this,e),(t=Object(v.a)(this,Object(d.a)(e).call(this,n))).componentDidMount=function(){t.fetchCoins()},t.addCoin=function(n){var e=Object(f.a)(t.state.favorites);e.length<j&&(e.push(n),t.setState({favorites:e}))},t.removeCoin=function(n){var e=Object(f.a)(t.state.favorites);t.setState({favorites:h.a.pull(e,n)})},t.isInFavorites=function(n){return h.a.includes(t.state.favorites,n)},t.fetchCoins=Object(s.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.coinList();case 2:e=n.sent.Data,console.log("fetch",e),t.setState({coinList:e});case 5:case"end":return n.stop()}}),n)}))),t.confirmFavorites=function(){t.setState({firstVisit:!1,page:"dashboard"}),localStorage.setItem("kryptoDash",JSON.stringify({favorites:t.state.favorites}))},t.savedSettings=function(){var n=JSON.parse(String(localStorage.getItem("kryptoDash")));return n?{favorites:n.favorites}:{page:"settings",firstVisit:!0}},t.setPage=function(n){t.setState({page:n})},t.state=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(t,!0).forEach((function(e){Object(c.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({page:"dashboard",favorites:["BTC"]},t.savedSettings(),{confirmFavorites:t.confirmFavorites,setPage:t.setPage,addCoin:t.addCoin,removeCoin:t.removeCoin,isInFavorites:t.isInFavorites}),t}return Object(b.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return a.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),e}(a.a.Component),C=function(){return a.a.createElement(E.Consumer,null,(function(n){return n.firstVisit?a.a.createElement("div",null,"Welcome to Kryptodash, please select your favorite coin to begin."):null}))},S=t(1),w=t(2);var k="background-color: ".concat("#061a44"),P=("background-color: ".concat("#010e2c",";"),"background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b"));function F(){var n=Object(S.a)(["\n  display: grid;\n  justify-content: center;\n"]);return F=function(){return n},n}function I(){var n=Object(S.a)(["\n  margin: 20px;\n  color: ",";\n  ","\n  padding: 5px;\n  cursor: pointer;\n  &:hover {\n    ","\n  }\n"]);return I=function(){return n},n}var D=w.b.div(I(),"#42ff3a","font-size: 1.5em;","box-shadow: 0px 0px 4px 2px #5fff17"),K=w.b.div(F()),L=function(){return a.a.createElement(E.Consumer,null,(function(n){var e=n.confirmFavorites;return a.a.createElement(K,null,a.a.createElement(D,{onClick:e},"Confirm Favorites"))}))},J=function(n){return a.a.createElement(E.Consumer,null,(function(e){return e.page!==n.name?null:a.a.createElement("div",null,n.children)}))};function V(){var n=Object(S.a)(["\n  pointer-events: none;\n  opacity: 0.4;\n"]);return V=function(){return n},n}function B(){var n=Object(S.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return B=function(){return n},n}function N(){var n=Object(S.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return N=function(){return n},n}function W(){var n=Object(S.a)(["\n  ","\n  ","\npadding: 10px;\n"]);return W=function(){return n},n}var U=w.b.div(W(),P,k),z=Object(w.b)(U)(N(),"box-shadow: 0px 0px 4px 2px #5fff17"),A=Object(w.b)(z)(B(),"box-shadow: 0px 0px 2px 2px #e41111"),M=Object(w.b)(U)(V());function T(){var n=Object(S.a)(["\n  justify-self: right;\n  display: none;\n  ",": hover & {\n    display: block;\n    color: red;\n  }\n"]);return T=function(){return n},n}function X(){var n=Object(S.a)(["\n  justify-self: right;\n"]);return X=function(){return n},n}function $(){var n=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return $=function(){return n},n}var q=w.b.div($()),G=w.b.div(X()),H=w.b.div(T(),A),Q=function(n){return a.a.createElement(q,null,a.a.createElement("div",null,n.name),n.topSection?a.a.createElement(H,null," X "):a.a.createElement(G,null,n.symbol))},R=function(n){return a.a.createElement("img",{alt:n.coin.CoinSymbol,style:n.style||{height:"50px"},src:"http://cryptocompare.com/".concat(n.coin.ImageUrl)})};function Y(n,e,t,r){return n?function(){r(e)}:function(){t(e)}}var Z=function(n){return a.a.createElement(E.Consumer,null,(function(e){var t=e.coinList,r=e.addCoin,o=e.removeCoin,i=e.isInFavorites,c=t[n.coinKey],u=z;return n.topSection?u=A:i(n.coinKey)&&(u=M),a.a.createElement(u,{onClick:Y(n.topSection,n.coinKey,r,o)},a.a.createElement(Q,{topSection:n.topSection,name:c.CoinName,symbol:c.Symbol}),a.a.createElement(R,{coin:c}))}))};function _(){var n=Object(S.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return _=function(){return n},n}var nn=w.b.div(_());var en=function(n){return a.a.createElement(E.Consumer,null,(function(e){var t=e.coinList,r=e.favorites;return a.a.createElement(nn,null,function(n,e,t){return e?t:Object.keys(n).slice(0,100)}(t,!!n.topSection,r).map((function(e){return a.a.createElement(Z,{topSection:!!n.topSection,coinKey:e})})))}))},tn=function(){return a.a.createElement(J,{name:"settings"},a.a.createElement(C,null),a.a.createElement(en,{topSection:!0}),a.a.createElement(L,null),a.a.createElement(en,null))};function rn(){var n=Object(S.a)(["\n  padding: 40px;\n"]);return rn=function(){return n},n}var an=w.b.div(rn());function on(){var n=Object(S.a)(["\n      text-shadow: 0 0 60px #03ff03;\n    "]);return on=function(){return n},n}function cn(){var n=Object(S.a)(["\n  cursor: pointer;\n  ","\n"]);return cn=function(){return n},n}function un(){var n=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 180px auto 100px 100px;\n"]);return un=function(){return n},n}var ln=w.b.div(un()),sn=w.b.div(cn(),(function(n){return n.active&&Object(w.a)(on())})),fn=function(n){return a.a.createElement(E.Consumer,null,(function(e){var t,r=e.page,o=e.setPage;return a.a.createElement(sn,{active:r===n.name,onClick:function(){return o(n.name)}},(t=n.name).charAt(0).toUpperCase()+t.substr(1))}))},pn=function(){return a.a.createElement(ln,null,a.a.createElement("div",null," Kryptodash "),a.a.createElement("div",null),a.a.createElement(fn,{active:!0,name:"dashboard"}),a.a.createElement(fn,{name:"settings"}))},mn=function(n){return a.a.createElement(E.Consumer,null,(function(e){return e.coinList?a.a.createElement("div",null,n.children):a.a.createElement("div",null," Loading Coins ")}))},vn=function(){return a.a.createElement(an,null,a.a.createElement(x,null,a.a.createElement(pn,null),a.a.createElement(mn,null,a.a.createElement(tn,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(vn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.67c3c2be.chunk.js.map