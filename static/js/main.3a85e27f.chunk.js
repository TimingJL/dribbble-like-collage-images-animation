(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(n,e,t){n.exports=t(47)},41:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(29),c=t.n(a),s=(t(41),t(30)),i=t.n(s),l=t(14),u=t(50),b=t(52),p=t(51),d=t(16),m=t(2),f=t(3);function h(){var n=Object(m.a)(["\n  cursor: grab;\n  box-sizing: border-box;\n  border-radius: 100%;\n  background: white;\n  position: absolute;\n  box-shadow: 0 0.1em 0.1em rgba(0,0,0,0.05);\n  transform-origin: center;\n  transform: translateX(-50%);\n  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;\n  &:hover {\n    transform: translateX(-50%) scale(1.1);\n    box-shadow: 0 0.4em 1em rgba(0,0,0,0.15);\n    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;\n  }\n  &:active {\n    transform: translateX(-50%) scale(0.975);\n    cursor: grabbing;\n    background: currentColor;\n  }\n"]);return h=function(){return n},n}var g={transform:"translateY(-20px)",position:"relative",width:"320px",height:"48px",display:"flex",alignItems:"center"},x={display:"flex",alignItems:"center",width:"100%",height:"6px",borderRadius:"0.5em",background:"linear-gradient(to right, ".concat("#f00",", ").concat("#ff0",", ").concat("#0f0",", ").concat("#0ff",", ").concat("#00f",", ").concat("#f0f",", ").concat("#f00",")")},v=f.a.div(h()),j=Object(r.memo)(function(n){var e=n.handleGetColor,t=Object(r.createRef)(),a=Object(r.createRef)(),c=Object(r.useState)(0),s=Object(l.a)(c,2),i=s[0],m=s[1],f=Object(r.useState)("#f00"),h=Object(l.a)(f,2),j=h[0],w=h[1],y=function(n,e){var t,r,o=n.getBoundingClientRect().x,a=n.clientWidth,c=(t=e>=o?e-o:0)>(r=a)?r:t,s=function(n,e){var t=n/(e/6),r=Math.floor(t),o=(16*(t-r)).toString(16).replace(".",""),a=o.length>1?"".concat(o[0]).concat(o[1]):"".concat(o[0],"0");if(0===r)return"#ff".concat(a,"00");if(1===r){var c=(255-parseInt(a,16)).toString(16),s=c.length>1?c:"0".concat(c);return"#".concat(s,"ff00")}if(2===r)return"#00ff".concat(a);if(3===r){var i=(255-parseInt(a,16)).toString(16),l=i.length>1?i:"0".concat(i);return"#00".concat(l,"ff")}if(4===r)return"#".concat(a,"00ff");if(5===r){var u=(255-parseInt(a,16)).toString(16),b=u.length>1?u:"0".concat(u);return"#ff00".concat(b)}return"#f00"}(c,a);w(s),m(c)};return Object(r.useEffect)(function(){var n=t.current,e=a.current,r=document.body,o=Object(u.a)(n,"mousedown"),c=Object(u.a)(r,"mouseup"),s=Object(u.a)(r,"mousemove");o.pipe(Object(b.a)(function(){return s.pipe(Object(p.a)(c))}),Object(d.a)(function(n){return n.clientX})).subscribe(function(n){y(e,n)})},[]),Object(r.useEffect)(function(){var n=a.current;Object(u.a)(n,"mousedown").pipe(Object(d.a)(function(n){return n.clientX})).subscribe(function(e){y(n,e)})},[]),Object(r.useEffect)(function(){var n=t.current,r=document.body;Object(u.a)(r,"mouseup").subscribe(function(){e(n.style.color)})},[]),o.a.createElement("div",{style:g},o.a.createElement("div",{ref:a,style:x},o.a.createElement(v,{ref:t,style:{width:"".concat(36,"px"),height:"".concat(36,"px"),left:"".concat(i,"px"),border:"0.4em solid ".concat(j),color:"".concat(j)}})))});j.defaultProps={handleGetColor:function(){}};var w=j,y=t(7),O=t.n(y),_={0:[[42,20.5],[42,74],[22.5,22.5],[61,22.5],[22.5,71.6],[61,71.6],[14.5,28.5],[69.5,28.5],[14.5,65],[69.5,65],[9.5,35],[76,35],[9.5,57.6],[76,57.6],[6.5,42.5],[79,42.5],[6.5,50],[79,50]],4:[[42.5,27.5],[34,34],[24,40],[14,46],[5.5,52.5],[-2,59.6],[18.5,59.6],[38.1,59.6],[80.5,59.6],[59,20.5],[59,28],[59,36],[59,44.5],[59,52],[59,59.6],[59,66.7],[59,74]]},E=["https://cdn.dribbble.com/users/3073273/screenshots/6656805/296_2x.jpg","https://cdn.dribbble.com/users/437847/screenshots/6656746/van-goh-.jpg","https://cdn.dribbble.com/users/902766/screenshots/6656742/whoa.gif","https://cdn.dribbble.com/users/732486/screenshots/6656702/image.png","https://cdn.dribbble.com/users/2165454/screenshots/6656707/cannabis-cafe-logo1000.jpg","https://cdn.dribbble.com/users/4726/screenshots/6656682/bakula_2x.png","https://cdn.dribbble.com/users/2552283/screenshots/6656649/relax2.png","https://cdn.dribbble.com/users/1664576/screenshots/6656633/artist_2x.png","https://cdn.dribbble.com/users/62086/screenshots/6656619/we-love-help-people.jpg","https://cdn.dribbble.com/users/1029843/screenshots/6656613/2018_lemoncocco_fiat_wrap_thumb-01_2x.jpg","https://cdn.dribbble.com/users/224800/screenshots/6656598/comp_1_1.gif","https://cdn.dribbble.com/users/1018511/screenshots/6656570/stickers-di.jpg","https://cdn.dribbble.com/users/3110387/screenshots/6656577/andy_pollard_photography_3_1x.jpg","https://cdn.dribbble.com/users/1773427/screenshots/6656554/image.png","https://cdn.dribbble.com/users/2556713/screenshots/6656553/essie-01_2x.png","https://cdn.dribbble.com/users/968616/screenshots/6656539/flow_2x.jpg","https://cdn.dribbble.com/users/2088367/screenshots/6656493/dribbble-10_2x.png","https://cdn.dribbble.com/users/3086784/screenshots/6656476/h2o_2x.jpg","https://cdn.dribbble.com/users/622367/screenshots/6656437/nfb.png","https://cdn.dribbble.com/users/3597232/screenshots/6656462/1.jpg","https://cdn.dribbble.com/users/69458/screenshots/6656348/stock_2x.png","https://cdn.dribbble.com/users/1788811/screenshots/6656342/png_2x.png","https://cdn.dribbble.com/users/2899680/screenshots/6656329/hypo_baby_2x.jpg","http://3.bp.blogspot.com/-hf4m8eoDyII/ViW1aoYXbOI/AAAAAAAAFT0/M27fGVnOq88/s1600/sheep4.png","https://img.tagmum.com/201708/1438.jpg","https://cdn.dribbble.com/users/271492/screenshots/2153614/attachments/394867/%E6%9C%89%E7%97%850719_1600x1200_%E9%BB%91%E7%99%BD.png","http://www.ziticq.com/upload/image/20181230/5c28492139325.jpg","http://www.ziticq.com/upload/image/20181230/5c2849219c60f.jpg","http://www.ziticq.com/upload/image/20181230/5c2849210b6b9.png","https://img.lymma.net/2018-02-16/9b483dc5b68fb596ea2d4bdceb0d36c5.jpg","https://static1.squarespace.com/static/574faff6f8baf35e5da43485/5758471845bf218e90d0bebb/5a6815750d929709caf14f10/1553460088480/Tank-and-bomb-dribbble.gif","https://dumielauxepices.net/sites/default/files/bomb-clipart-animation-864671-1193421.gif","http://38.media.tumblr.com/578d2dd48a0a53e54e7e05de6043155c/tumblr_nrlr6tulGV1r2geqjo1_540.gif","http://mmbiz.qpic.cn/mmbiz_gif/pBxtubiaOffVLegOjcEZqTBzzEibBLx3AzezL0IDvOIxyAicHa5aEX21p7n0LECECvIyHh6J6WF2rK16M9krDbuXw/0?wx_fmt=gif","https://thumbs.gfycat.com/SimpleIdenticalAndeancat-size_restricted.gif","https://media.giphy.com/media/goCaAHqHS0lDW/giphy.gif","http://thesoulscream.com/wp-content/uploads/2014/07/dd-8.gif","https://flashbak.com/wp-content/uploads/2016/01/23.gif"];function k(){var n=Object(m.a)(["\n  position: absolute;\n  width: 18%;\n  height: 6%;\n  border-radius: 5px;\n\n  background-image: url(","), linear-gradient(",", ",");\n  background-blend-mode: multiply;\n  background-size: cover;\n  background-position: center;\n\n  left: ",";\n  top: ",";\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n\n  &:hover {\n    z-index: 1;\n    transform: scale(1.5);\n    box-shadow: 0 5px 30px rgba(0,0,0,0.3);\n    transition: all 0.1s ease-in-out;\n  }\n\n  animation : "," ","s ease-in-out;\n"]);return k=function(){return n},n}function A(){var n=Object(m.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n"]);return A=function(){return n},n}function I(){var n=Object(m.a)(["\n    0% {\n      opacity: 0;\n      transform: translateX(","px) translateY(","px) translateZ(","px) scale(",");\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px) translateY(0px) translateZ(0px) scale(1);\n    }\n  "]);return I=function(){return n},n}var z=function(){return Math.floor(10*Math.random())%2===0?1:-1},C=function(){var n,e,t=1e3*z()*Math.random(),r=1e3*z()*Math.random(),o=500*Math.random(),a=(n=2,e=10,Math.random()*(e-n)+n);return Object(f.b)(I(),t,r,o,a)},M=f.a.div(A()),S=f.a.div(k(),function(n){return n.imageUrl},function(n){return n.color},function(n){return n.color},function(n){return"".concat(n.pos[0],"%;")},function(n){return"".concat(n.pos[1],"%;")},function(){return C()},function(n){return n.delay}),X=Object(r.memo)(function(n){var e=n.positions,t=n.charIndex,r=n.isActive,a=n.color;return o.a.createElement(M,null,r&&e.map(function(n,e){return o.a.createElement(S,{key:e,pos:n,delay:.6*(t+1)+.8,imageUrl:E[Math.floor(Math.random()*E.length)],color:a})}))});X.propTypes={positions:O.a.array,isActive:O.a.bool,charIndex:O.a.number,color:O.a.string},X.defaultProps={positions:[],isActive:!1,charIndex:0,color:""};var q=X;function B(){var n=Object(m.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 5px;\n  .char-box__char {\n    color: #eee;\n    animation: "," 1s ease-in;\n    animation-fill-mode: forwards; /* \u4fdd\u6301\u52d5\u756b\u7d50\u675f\u5f8c\u7684\u72c0\u614b */\n  }\n"]);return B=function(){return n},n}function W(){var n=Object(m.a)(["\n  0% {\n    color: #eee;\n  }\n  100% {\n    color: white;\n    opacity: 0;\n  }\n"]);return W=function(){return n},n}var T=Object(f.b)(W()),Y=f.a.div(B(),T),D=Object(r.memo)(function(n){var e=n.char,t=n.charIndex,r=n.isActive,a=n.color;return o.a.createElement(Y,null,o.a.createElement("div",{className:"char-box__char"},e),o.a.createElement(q,{positions:_[e],charIndex:t,isActive:r,color:a}))});D.propTypes={char:O.a.string,charIndex:O.a.number,isActive:O.a.bool,color:O.a.string},D.defaultProps={char:"",charIndex:0,isActive:!1,color:""};var G=D;function L(){var n=Object(m.a)(["\n  transform: translateY(20px);\n  text-align: center;\n  border-radius: 50px;\n  width: 280px;\n  height: 31px;\n  font-size: 0.875rem;\n  background-color: #f1f3f4;\n  color: #0006;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  &:hover {\n    background: #e3e7e9;\n    box-shadow: 0 0.4em 1em rgba(0,0,0,0.05);\n    transition: all 0.1s ease-in-out;\n  }\n"]);return L=function(){return n},n}function R(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return n},n}function H(){var n=Object(m.a)(["\n  position: relative;\n  /* width: 90vw; */\n  /* height: 80vh; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: ","vw;\n  transition: all 1s ease-in-out;\n"]);return H=function(){return n},n}function J(){var n=Object(m.a)(["\n  transform: translateY(50px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .message__title {\n    font-size: 2rem;\n    color: #333;\n    @media screen and (max-width: 760px) {\n      font-size: 1.5rem;\n    }\n  }\n  .message__content {\n    margin: 1rem auto;\n    line-height: 1.3;\n    color: #0006;\n    font-weight: 400;\n    max-width: 416px;\n    text-align: center;\n  }\n"]);return J=function(){return n},n}var V=f.a.div(J()),F=f.a.div(H(),function(n){return 90/n.text.length}),N=f.a.div(R()),P=f.a.button(L()),Z=Object(r.memo)(function(){var n=Object(r.useState)(!0),e=Object(l.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)("#f00"),s=Object(l.a)(c,2),i=s[0],u=s[1],b=function(n){return n},p=Object(r.useCallback)(function(n){u(n)},[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(V,null,o.a.createElement("h1",{className:"message__title"},"Wow, this page is awesome!"),o.a.createElement("p",{className:"message__content"},"While you\u2019re here, feast your eyes upon these tantalizing popular designs matching the color.")),o.a.createElement(F,{text:"404"},"404".split("").map(function(n,e){return o.a.createElement(G,{key:b(e),char:n,charIndex:e,isActive:t,color:i})})),o.a.createElement(N,null,o.a.createElement(w,{handleGetColor:p}),o.a.createElement(P,{type:"button",onClick:function(){a(!1),setTimeout(function(){return a(!0)},100)}},"Repeat Animation")))});var U=function(){return o.a.createElement("main",null,o.a.createElement(Z,null),o.a.createElement(i.a,{href:"https://github.com/TimingJL/dribbble-like-collage-images-animation"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.3a85e27f.chunk.js.map