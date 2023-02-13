(()=>{"use strict";var e={7738:(e,t,i)=>{i(6992),i(8674),i(9601),i(7727);var r=i(5010),n=i(3396),s={key:0,class:"w-[320px] h-[320px] flex items-center justify-center text-center text-[20px] bg-[url('@/assets/images/icon/eclipse.gif')] bg-no-repeat bg-contain rounded-[40px] overflow-hidden"},o={key:1,class:"w-[320px] h-[320px] flex items-center justify-center text-center"},a={key:2};function c(e,t,i,r,c,l){var u=(0,n.up)("WeatherShow"),d=(0,n.up)("CityChanges");return c.loading?((0,n.wg)(),(0,n.iD)("p",s)):c.requestError&&c.show&&0===c.cities.length?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("p",null,[(0,n.Uk)("You have denied Geolocation request. Please go to "),(0,n._)("span",{onClick:t[0]||(t[0]=function(e){return c.show=!1}),class:"text-red-300 cursor-pointer"},"settings"),(0,n.Uk)(" or "),(0,n._)("span",{onClick:t[1]||(t[1]=function(){return l.tryGetData&&l.tryGetData.apply(l,arguments)}),class:"text-red-300 cursor-pointer"},"try"),(0,n.Uk)(" again.")])])):((0,n.wg)(),(0,n.iD)("div",a,[c.show?((0,n.wg)(),(0,n.j4)(u,{key:0,cities:c.cities,show:l.changeShow},null,8,["cities","show"])):((0,n.wg)(),(0,n.j4)(d,{key:1,cities:c.cities,show:l.changeShow,addCity:l.addCity,onDeleteCity:l.deleteCity,onUpdateCities:l.updateCities},null,8,["cities","show","addCity","onDeleteCity","onUpdateCities"]))]))}var l=i(124),u=i(8534),d=(i(1539),i(9826),i(7658),i(8862),i(8309),i(7139));const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO2VQQ6AIAwE5xNL5In6XDn4HL1gYggqrXBzTxzYnQZagF8OzUBw+EL2PmoBdiAZISF79pxxKwFr3rgBsSG89ExWQ+wZboHIG94C0dfwJ4h6hdc6JBVrTztXpUvV3Sp/A8Re4WHkEalyoZ5hbA4/9RnS0oryQix9LivEM0SyQIY/18M/nF+UOgAHtlaIDLPnzAAAAABJRU5ErkJggg==",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nO3WsQ0AIAwDwd9/LELmgglooggK/iT3riyDpLMEVlOCgmgsMCoFJD2XDpEkfh+i6SOSuGADwtF0vQRbqGoAAAAASUVORK5CYII=",A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4UlEQVR4nO2aSw7CIBRFz6iLUren1W3JwLiPttvASDAhJi9tlRbS3pO8CaGfm8eZACC2SwPcgAHwI9UDbXymOq4TAnzXhQrp488dJsw9Jp2pDh9rqfmrUXUQ98O6X6rcVoLcc3Sm1Hr2ub+rIH/i1RGDXS2tJ/DIMF48iDVn7niKglioI2hpBeSIhRxBjgTkiIUcQY4E5IiFHEGOBOSIhRxBjgTkiIUcQY6Uc8QZZxhzx1O0iW2xq03sJfAKMnIZ4H3Qvxan+M0u50vbgqe555xBmhjm05k1qoshqrx4IxjhBYDU2PkqqpaWAAAAAElFTkSuQmCC",g=i.p+"img/logoutminor.85efbbc3.svg";var w={class:"w-[320px] h-[320px] border-[1px] rounded-[40px] p-[30px] flex flex-col justify-between bg-[url('@/assets/images/weather/clear.jpg')] bg-cover shadow-2xl"},f={class:"flex justify-between h-[20px] items-center"},x=(0,n._)("div",{class:"text-[20px]"},"Settings",-1),m={key:0,class:"w-full h-[150px] overflow-y-scroll"},v={class:"w-w-full h-[35px] bg-gray-200 flex justify-between px-[10px] items-center rounded-[40px] my-[5px] cursor-pointer"},y={class:"flex justify-start"},b=(0,n._)("img",{src:h,class:"w-[25px] h-[25px] mr-[10px] cursor-grab"},null,-1),C=["onClick"],k={class:"h-[70px] flex flex-col justify-between"},S={class:"text-[17px]"},I={key:0},O={class:"flex justify-between w-full items-center"},j=(0,n._)("img",{class:"w-[47px] hover:scale-[1.1]",src:g,alt:""},null,-1),E=[j];function D(e,t,i,s,o,a){var c=(0,n.up)("draggable");return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",f,[x,(0,n._)("img",{src:p,alt:"Icon",class:"w-[25px] h-[25px] cursor-pointer",onClick:t[0]||(t[0]=function(){return i.show&&i.show.apply(i,arguments)})})]),o.items.length>0?((0,n.wg)(),(0,n.iD)("div",m,[o.items.length>0&&o.visible?((0,n.wg)(),(0,n.j4)(c,{key:0,modelValue:o.items,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.items=e})},{item:(0,n.w5)((function(e){var t=e.item;return[(0,n._)("div",null,[(0,n._)("div",v,[(0,n._)("div",y,[b,(0,n._)("div",null,(0,d.zw)(t.name),1)]),(0,n._)("img",{src:A,class:"w-[25px] h-[25px]",onClick:function(e){return a.deleteItem(t.id)}},null,8,C)])])]})),_:1},8,["modelValue"])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),(0,n._)("div",k,[(0,n._)("div",S,[o.error?((0,n.wg)(),(0,n.iD)("p",I,(0,d.zw)(o.error),1)):(0,n.kq)("",!0)]),(0,n._)("div",O,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.countryName=e}),class:"w-[200px] h-[35px] bg-[2px] border-[1px] rounded-[40px] p-[10px] focus:outline-none",onKeyup:t[3]||(t[3]=(0,r.D2)((function(){return a.add&&a.add.apply(a,arguments)}),["enter"])),placeholder:"Add Location"},null,544),[[r.nr,o.countryName]]),(0,n._)("button",{onClick:t[4]||(t[4]=function(){return a.add&&a.add.apply(a,arguments)}),class:"flex items-center focus:outline-none"},E)])])])}i(7327);var Z=i(3838),U=i.n(Z);const F={name:"CityChanges",props:{show:Function,addCity:Function},emits:["deleteCity","updateCities"],components:{Draggable:U()},data:function(){return{drag:!1,countryName:null,error:null,visible:!0,items:window.localStorage.getItem("cities")?JSON.parse(window.localStorage.getItem("cities")):[]}},watch:{countryName:function(e){e.length>=0&&(this.error=null)},items:{handler:function(){this.$emit("updateCities",this.items)},deep:!0,immediate:!0}},methods:{add:function(){var e=this;return(0,u.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.countryName?(e.addCity(e.countryName).then((function(t){for(var i in t)e[i]=t[i],e.visible=!1,e.$nextTick((function(){e.visible=!0}))})),e.countryName=""):e.error="Please fill the field ";case 1:case"end":return t.stop()}}),t)})))()},startDrag:function(){this.drag=!0},endDrag:function(){this.drag=!1,localStorage.setItem("cities",JSON.stringify(this.items))},deleteItem:function(e){var t=this;return(0,u.Z)((0,l.Z)().mark((function i(){return(0,l.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.items=t.items.filter((function(t){return t.id!==e})),t.visible=!1,i.next=4,t.$nextTick((function(){t.visible=!0}));case 4:if(window.localStorage.setItem("cities",JSON.stringify(t.items)),t.$emit("deleteCity",t.items),0!==t.items.length){i.next=9;break}return i.next=9,t.add();case 9:case"end":return i.stop()}}),i)})))()}}};var B=i(89);const L=(0,B.Z)(F,[["render",D]]),N=L;i(2526),i(1817);const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2aWWhdVRSGP6xJixm01qoYW4fYwRSxILGtig8VfFD0QWlFELHUJ/tisaDUAaR1qm2ijU8OLxWHN4cHp6JWwfqirVAFFa1DakUQ1CQ114yy4D+wPDl373PPPTdytT9ccnPX2sPaZ++1/rX2geP4f+AxYBKYTn3GgS00EQYzjEg+B2gSdAJTwCgwx/3eod8rwIk0AVZr5Q9myL6XbDn/Is4BNgMLI3obNNkXM2SvS7Yu0sdC4E5gESVjCXBEk/gFuDag+7j07suQPSzZg4H2a4GfpPcj0E1JuMAZ8bv+2l7vA+amdFuA96RzQ0ZfN0v2Zur8GFqBHc7b/VGmMd6IfTqw9wBj+u0zoAc4H3gK+NV5J2ubxnIn/1lP7yxgKfCJc9Fb5TQ+LMOYs1NGtDlZL/C1ZKMa3L5PAO8Dtwb6vR34WE91Wl5sRN+/AVY53faUMV1FDEkO7Z/AqRlyG+Q56QwDjwJn1Og8BmSI9bFHTyGNBZqD6dxWxBB7Al+pg50BvYs1WFF0pZ5CGrs0hy9Tu6ImXKLzMClvMtu4UmOPR4zNhQe0IkeqbLFG4RTgh4ArrxlGJ/arwxeYPbykMT/KcNV1BcTkwK2k8bjCOZHSAiLy8xMKUvNz6K8A+oHP5VpH9L1fshgW62za4p1OiXhGK7QtotcqlzoRoPEm2y3dEJ6W/vayjJinJ2ErdFrEiL0uSD4BXCqX2Sav86SLG3sjxiyVnh34E4pM/GRgjSLwLhdZ3460G3AR+KJI3EkSL3syIRyQ3jviYRu0OFmB8x/pabXMbipCvVdoy4xGjPDGVNTGuFo13BHYorZgj2Q1SljnMRG4PSKI1+vwhdCvtvY3L3arjbHomMe8EbhXOc5BLdi05jwDiaVF9uMXamtkMi9Wqc2hAuPNcfOdgaqCHBhWWyOSedGuNkMFx5xuhCFDBQzpdAlUQwzpqGNrmUeptUhRZGt1hAwZdx7qW+AVBcB1OWhCctgtTuRF4q7NxYewDLgJeAh4DTjskjKb8wxskd+u1OF+K3KtMRhf+yuH+91UxfVWNNe7Ymy3x63Cu2r8Vk53OhgxZqVLoS365wmIb2h3rAcuLFrgm6fqyVgkE2xxFKUiw1bLAbSLLQzoSSQUxdo0jKLUQ+BaZUCINI7rSbTkHHMbJWKJJjdUA43vk0ca1ueQDnboTCRY1Cga3+NoQR4uVS8u01gj2mKlYK74jXX8LLOH5zXmpzlyl1zod8WzIsGyKNpdEdAofF24WjGklHJMAfTqrNgcrinaiZX2j2pF7o4MFsoc8xTo7ExUw1bN4WiOK41MbFYHv1XJyOa7ks2IErMza+j/XBW+EybxchWP2OluAezOpGYsdhnjB6ly5VplaEki5ovYVvC+JdDvxowidpIGDAJXOd02jZ1khIUvfrqdMfsU2Xe6bHK/dM5TIEyuFaZUpM6KR/5aYYeuFbpdEXBS8WaBxqz7WiHLmKRIN6YyZroC2OIGvy6jr/WumJBua//f7+5ekrEGyyzS2ep+p46N4l8e0O0LOIjtOWhHryrviRFZF0Z1oUv3EydF9Da6+440XpXMmHUIbSr9FLrYKQtrNFmrxKRxWDKj4k3zwsCxFP1uuhcGcIlTU7/Cge4Tq71UE0xPj4P/CP4GdM3Fkxh1C08AAAAASUVORK5CYII=";var M={class:"flex flex-col w-[320px] relative rounded-[40px] overflow-hidden"},V={class:"flex justify-start"},Y={class:"text-bold text-[20px]"},R={class:"flex justify-start items-center"},q=["src"],W={class:"text-[50px]"},Q={class:"flex flex-col justify-end"},z=(0,n._)("div",{class:"flex"},null,-1),K={class:"flex justify-between flex-col"};function X(e,t,i,r,s,o){return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("img",{class:"w-[25px] h-[25px] absolute right-[30px] top-[30px] cursor-pointer",src:G,alt:"",onClick:t[0]||(t[0]=function(){return i.show&&i.show.apply(i,arguments)})}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.cities,(function(e,t){var i,r,s,o,a,c,l,u;return(0,n.wg)(),(0,n.iD)("div",{class:"w-[320px] h-[320px] border-[1px] p-[30px] bg-[url('@/assets/images/weather/clear.jpg')] bg-cover shadow-2xl",key:t},[(0,n._)("div",V,[(0,n._)("div",Y,(0,d.zw)(null===e||void 0===e?void 0:e.name)+" , "+(0,d.zw)(null===(i=e.sys)||void 0===i?void 0:i.country),1)]),(0,n._)("div",R,[(0,n._)("img",{class:"w-[150px]",src:"https://openweathermap.org/img/wn/".concat(null===(r=e.weather)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.icon,"@2x.png"),alt:""},null,8,q),(0,n._)("div",W,(0,d.zw)(Math.round((null===(o=e.main)||void 0===o?void 0:o.temp)-273.15))+"°C",1)]),(0,n._)("div",Q,[(0,n._)("div",null,"Feels like "+(0,d.zw)(Math.round((null===(a=e.main)||void 0===a?void 0:a.feels_like)-273.15))+"°C, "+(0,d.zw)(null===(c=e.weather)||void 0===c||null===(l=c[0])||void 0===l?void 0:l.description)+". ",1),z,(0,n._)("div",K,[(0,n._)("div",null,"Humidity: "+(0,d.zw)(null===e||void 0===e||null===(u=e.main)||void 0===u?void 0:u.humidity),1),(0,n._)("div",null,"Visibility: "+(0,d.zw)(e.visibility)+" m",1)])])])})),128))])}const J={name:"WeatherShow",props:{show:Function,cities:Array},computed:{temp:function(){}}},P=(0,B.Z)(J,[["render",X]]),T=P,_={components:{WeatherShow:T,CityChanges:N},data:function(){return{show:!0,cities:window.localStorage.getItem("cities")?JSON.parse(window.localStorage.getItem("cities")):[],options:{enableHighAccuracy:!0,timeout:5e3,maximumAge:0},loading:!1,weather:null,requestError:!1,visible:!0}},mounted:function(){0===this.cities.length&&this.getData()},created:function(){0===this.cities.length&&(this.loading=!0,this.show=!0,this.getData())},methods:{changeShow:function(){this.show=!this.show},addCity:function(e){var t=this;return(0,u.Z)((0,l.Z)().mark((function i(){var r;return(0,l.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=21f731ebc999bee36dc13db346551694"));case 2:return r=i.sent,i.next=5,r.json();case 5:if(t.weather=i.sent,!t.weather.message){i.next=10;break}return i.abrupt("return",{error:"Enter correct city"});case 10:if(!t.cities.find((function(e){return e.id===t.weather.id}))){i.next=14;break}return i.abrupt("return",{error:"City already exists in Your list"});case 14:return t.cities.push(t.weather),t.loading=!1,window.localStorage.setItem("cities",JSON.stringify(t.cities)),i.abrupt("return",{error:null});case 18:case"end":return i.stop()}}),i)})))()},fetchLocationName:function(e,t){var i=this;return(0,u.Z)((0,l.Z)().mark((function r(){return(0,l.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+e+"&lon="+t+"&appid=21f731ebc999bee36dc13db346551694").then((function(e){return e.json()})).then(function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.addCity(t.name);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),i.requestError=!0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()},deleteCity:function(e){0===this.cities.length&&(this.loading=!0,this.show=!this.requestError,this.getData()),this.cities=e},updateCities:function(e){this.cities=e,localStorage.setItem("cities",JSON.stringify(this.cities))},success:function(e){var t=this;return(0,u.Z)((0,l.Z)().mark((function i(){return(0,l.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.fetchLocationName(e.coords.latitude,e.coords.longitude);case 2:case"end":return i.stop()}}),i)})))()},error:function(e){1===e.code&&(this.loading=!1,this.requestError=!0)},getData:function(){var e=this;return(0,u.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:navigator.geolocation.getCurrentPosition(e.success,e.error,e.options);case 1:case"end":return t.stop()}}),t)})))()},tryGetData:function(){this.loading=!0,this.requestError=!1,this.getData()}}},H=(0,B.Z)(_,[["render",c]]),$=H;(0,r.ri)($).mount("weather-widget")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=e,(()=>{var e=[];i.O=(t,r,n,s)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,s]=e[u],a=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}})(),(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{i.p="/"})(),(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[o,a,c]=r,l=0;if(o.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var u=c(i)}for(t&&t(r);l<o.length;l++)s=o[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self["webpackChunkvue3"]=self["webpackChunkvue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=i.O(void 0,[998],(()=>i(7738)));r=i.O(r)})();
//# sourceMappingURL=app.7e8e7f34.js.map