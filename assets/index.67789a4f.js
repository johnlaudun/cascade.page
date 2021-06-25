import{o as e,c as t,F as n,r as s,a as r,t as i,T as a,w as o,b as l,d,e as c,f as h,v as g,g as m,h as u,i as v,j as y,k as p}from"./vendor.ddbe219c.js";var f={props:["list"]};const w={class:"flex flex-col mr-3"},x=r("h3",{class:"text-xl border-b"},"My cascades",-1),k={key:0,class:""},b={class:""},S={class:"ml-auto mt-1"},C=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),$={key:1,class:""},T=r("div",{class:""},"No saved cascades",-1);f.render=function(a,o,l,d,c,h){return e(),t("div",w,[x,l.list&&l.list.length>0?(e(),t("div",k,[(e(!0),t(n,null,s(l.list,(n=>(e(),t("div",{class:"cursor-pointer flex flex-row align-baseline mb-1 hover:bg-blue-100 rounded px-1 transition-color duration-100",key:n,onClick:e=>a.$emit("selected",n)},[r("div",b,i(n),1),r("div",S,[(e(),t("svg",{onClick:e=>a.$emit("delete",n),xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 hover:text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[C],8,["onClick"]))])],8,["onClick"])))),128))])):(e(),t("div",$,[T]))])};const D=["green","blue","red","yellow","indigo","purple","pink"];var W={data:()=>({panning:{}}),computed:{isPanning(){var e,t,n,s;return!!(null==(t=null==(e=this.panning)?void 0:e.mouseStart)?void 0:t.x)&&!!(null==(s=null==(n=this.panning)?void 0:n.mouseStart)?void 0:s.y)},columnWidth(){return this.$store.state.settings.yearWidth},years(){const e=this.$store.getters.events;if(!e||0===e.length)return{start:2e3,end:2010};let t=e[0].startingYear(),n=e[0].getNextYear();for(let s of e)s.startingYear()<t&&(t=s.startingYear()),s.getNextYear()>n&&(n=s.getNextYear());return{start:t-1,end:n+6}},numColumns(){return this.years.end-this.years.start},numRows(){return this.$store.getters.events.length+1},widthPerDay(){return this.columnWidth/12/30}},created(){document.getElementById("timelineContainer").addEventListener("mousedown",this.mouseDown),window.addEventListener("mouseup",this.mouseUp),window.addEventListener("mousemove",this.mouseMove)},methods:{mouseDown(e){e.stopPropagation();const t=document.getElementById("timelineContainer");t.style.cssText="cursor: grabbing;",this.panning={mouseStart:{x:e.clientX,y:e.clientY},containerStart:{x:t.scrollLeft,y:t.scrollTop}}},mouseUp(e){document.getElementById("timelineContainer").style.cssText="cursor: grab;",this.panning={}},mouseMove(e){if(!this.isPanning)return;e.stopPropagation();const t=document.getElementById("timelineContainer");t.scrollLeft=this.panning.containerStart.x+(this.panning.mouseStart.x-e.clientX),t.scrollTop=this.panning.containerStart.y+(this.panning.mouseStart.y-e.clientY)},eventBarClass(e){let t="eventBar transition opacity-50 rounded shadow ";const n=e.event.tags[0];return this.$store.getters.tags[n]?D.includes(this.$store.getters.tags[n])&&(t+=`bg-${this.$store.getters.tags[n].toLowerCase()}-300 `):t+="bg-gray-300 ",t},eventBarStyle(e){let t=`width: ${this.getWidthForRange(e.range)}px;`;const n=e.event.tags[0];return this.$store.getters.tags[n]&&!D.includes(this.$store.getters.tags[n])&&(t+=` background-color: ${this.$store.getters.tags[n]}`),t},getWidthForRange(e){const t=Math.max(10,Math.max(1,e.numDays())*this.widthPerDay);return console.log(e.numDays()*this.widthPerDay),console.log("width for ",e,t),t},getLeftMarginForDate(e,t){let n=(e.startingYear()-this.years.start)*this.columnWidth;if(t.month){const e=this.columnWidth/12*(t.month-1);return t.day?n+e+(t.day-1)*(this.columnWidth/12/30):n+e}return n+0},range:(e,t=0)=>[...Array(e).keys()].map((e=>e+t))}};const M={class:"relative"},B={id:"years",class:"flex absolute inset-0 pointer-events-none"},I={class:"yearTitle text-sm"},E={id:"events"},H=r("div",{class:"h-24"},null,-1),F={class:"eventDate"},Y=r("div",{style:{height:"50vh"}},null,-1);W.render=function(l,d,c,h,g,m){return e(),t("div",M,[r("div",B,[(e(!0),t(n,null,s(m.range(m.years.end-m.years.start+1,m.years.start),(n=>(e(),t("div",{class:"year flex-shrink-0",key:n,style:`width: ${this.columnWidth}px`},[r("h6",I,i(n),1)],4)))),128))]),r("div",E,[H,r(a,{name:"eventRow"},{default:o((()=>[(e(!0),t(n,null,s(l.$store.getters.filteredEvents,(n=>(e(),t("div",{class:"eventRow flex flex-row items-center",key:n.eventString,style:{"margin-left":`${this.getLeftMarginForDate(n,n.range.from)}px`}},[r("div",{class:m.eventBarClass(n),style:m.eventBarStyle(n)},null,6),r("p",F,i(n.getDateHtml()),1),r("p",{class:"eventTitle ml-2",innerHTML:n.getInnerHtml()},null,8,["innerHTML"])],4)))),128))])),_:1}),Y])])};class L{constructor(e){"now"===e&&(e=(new Date).toLocaleDateString());let[t,n,s]=e.split("/").reverse();const r=parseInt(t);this.year=r,n&&(s?(this.month=parseInt(s),this.day=parseInt(n)):this.month=parseInt(n))}}class N{constructor(e){this.originalString=e;const t=e.indexOf("//");t>=0&&(e=e.substring(0,t));const[n,s]=e.split("-");this.from=new L(n),this.to=s?new L(s):void 0}getNextYear(){return this.to?this.to.year+1:this.from.year+1}startingDay(){return{year:this.from.year,month:this.from.month?this.from.month:1,day:this.from.day?this.from.day:1}}endingDay(){return this.to?{year:this.to.year,month:this.to.month?this.to.month:12,day:this.to.day?Math.min(this.to.day,30):30}:{year:this.from.year,month:this.from.month?this.from.month:12,day:this.from.day?Math.min(this.from.day,30):30}}numDays(){return N.numDaysBetween(this.startingDay(),this.endingDay())}static numDaysBetween(e,t){let n;if(e.year===t.year)n=30*(t.month-e.month)+(t.day-e.day);else{const s=N.numDaysBetween(e,{year:e.year,month:12,day:30}),r=N.numDaysBetween({year:t.year,month:1,day:1},t);n=s+360*(t.year-e.year)+r}return console.log("num days between ",e,t,n),n}}class R{constructor(e){this.linkRegex=/\[([\w\s\d\.]+)\]\((https?:\/\/[\w\d./?=#]+)\)/g;let t=R.reverseString(e);const n=new Set;let s;this.tags=[];let r=0;for(;null!==(s=/(?:^(\w+)# )/gm.exec(t));)s.forEach(((e,t)=>{if(1===t){const t=R.reverseString(e);n.has(t)||(n.add(t),this.tags.push(t)),r=e.length+2}})),t=t.substring(r);this.eventDescription=R.reverseString(t.trim())}getInnerHtml(){return this.eventDescription.replace(this.linkRegex,((e,t,n)=>`<a class="underline" href="${n}">${t}</a>`))}static reverseString(e){return e.split("").reverse().join("")}}class j{constructor(e,t,n){this.eventString=e,this.range=t,this.event=n}startingYear(){return this.range.from.year}getNextYear(){return this.range.getNextYear()}getInnerHtml(){return this.event.getInnerHtml()}getDateHtml(){return this.range.originalString}static fromString(e){const t=e.indexOf(":");if(-1===t)return;const n=e.substring(0,t).trim(),s=new N(n),r=new R(e.substring(t+1).trim());return new j(e,s,r)}}const A=["green","blue","red","yellow","indigo","purple","pink"];var P=l({state:()=>({settings:{yearWidth:120},filter:new Set,eventsString:"// Comments start with two slashes: `//`\n// Tags start with a pound sign: `#`\n\n// This is an indication that events tagged `#Work` will be colored #e13\n#Work: #e13\n\n08/2008-05/2012: Psych degree #Education\n02/2010-06/2012: Dispatcher #Work\n10/2010: Barn built across the street\n06/2011-08/2011: Westover Air Reserve Base #Work\n\n// 2013\n03/15/2013-04/2015: China #Work\n\n// 2014\n07/2014: 4th of July in DC\n\n// 2015\n05/2015-08/2015: Summer classes so I can graduate in two years #Education\n05/2015: James graduation\n06/2015: Built desk\n06/2015: Kim and Matt wedding\n08/2015-05/2017: CS degree #Education\n\n// 2016\n05/22/2016-08/12/2016: Cardinal Health #Work\n08/16/2016-08/27/2016: Italy\n\n// 2017\n05/2017-05/2018: Cladwell #Work\n06/10/2017-06/17/2017: The Hague & Copenhagen\n\n// 2018\n07/21/2018-07/22/2018: Chicago\n07/26/2018-07/31/2018: LA and Seattle (interviewing)\n08/04/2018-08/14/2018: Mexico City\n09/05/2018-09/11/2018: Hong Kong and Macau\n09/19/2018-09/22/2018: Road trip to Seattle\n10/01/2018-01/2021: [Google](https://www.google.com) #Work\n12/28/2018-12/29/2018: Nemacolin and Fallingwater\n\n// 2019\n06/08/2019: Paula's wedding\n07/04/2019: 4th of July in Seattle with siblings\n08/23/2019-08/27/2019: SF and Bishop's Ranch\n09/2019: Hawaii with Google\n12/20/2019-12/22/2019: Train from Seattle to Chicago\n12/2019: Christmas at home, Dad to hospital\n\n// 2020\n02/29/2020: Molly and Kaitlyn to Seattle (thus starting covid)\n03/28/2020: James to Austin\n05/24/2020: Sold the Impala\n07/2020: Oregon & Crater Lake\n08/2020: Mt. Rainier\n08/2020: Oak Island\n09/2020: Hurricane Ridge\n9/2020: Trip to Coeur d'Alene\n11/2020: Trip to Denver\n12/2020: Reese\n12/25/2020: Christmas in Blaine\n\n// 2021\n01/2021: qr.new featured on [Hacker News](https://news.ycombinator.com/item?id=25481772)\n02/2021: Hawaii\n02/01/2021-now: Working on [swink](https://sw.ink) full time #Work\n05/25/2021: [cascade.page](https://cascade.page) featured on [Hacker News](https://news.ycombinator.com/item?id=27282842)\n06/05/2021-06/12/2021: Ohio and James's Party"}),mutations:{setYearWidth(e,t){e.settings.yearWidth=t},setEventsString(e,t){e.eventsString=t},clearFilters(e){e.filter.clear()},filterTag(e,t){e.filter.has(t)?e.filter.delete(t):e.filter.add(t)}},getters:{trimmedAndFilteredEntries:e=>e.eventsString.split("\n").filter((e=>!!e&&null===e.match(/^\s*\/\/.*/))).map((e=>e.trim())),events:(e,t)=>t.trimmedAndFilteredEntries.filter((e=>!e.startsWith("!")&&!e.startsWith("#"))).map(j.fromString).filter((e=>!!e)),filteredEvents:(e,t)=>t.events.filter((t=>0===e.filter.size||t.event.tags.some((t=>e.filter.has(t))))),tags(e,t){let n=0;const s=new Set(t.events.flatMap((e=>e.event.tags))),r=t.trimmedAndFilteredEntries.filter((e=>e.startsWith("#"))).map((e=>e.substring(1).split(": "))),i={};for(let a of r)i[a[0]]=a[1];for(let a of s)i[a]||(i[a]=A[n++%A.length]);return i}}}),O={methods:{buttonClass(e){const t=this.$store.getters.tags[e];return A.includes(t)?`bg-${t}-300`:""},buttonStyle(e){const t=this.$store.getters.tags[e];return A.includes(t)?"":`background-color: ${t}`},filterTag(e){this.$store.commit("filterTag",e)},clearFilters(){this.$store.commit("clearFilters")}}};const J={class:"flex flex-col"},U=r("h3",null,"Tags",-1),V={class:"flex flex-row"},G={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},K=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1);O.render=function(a,o,l,h,g,m){return e(),t("div",J,[U,r("div",V,[Object.keys(a.$store.getters.tags).length>0?(e(),t("button",{key:0,class:"mr-2 rounded bg-gray-800 hover:bg-gray-700 px-2",onClick:o[1]||(o[1]=(...e)=>m.clearFilters&&m.clearFilters(...e))}," Show all ")):d("",!0),(e(!0),t(n,null,s(Object.keys(a.$store.getters.tags),(n=>(e(),t("button",{class:"\n          flex flex-row\n          items-center\n          mr-2\n          rounded\n          bg-gray-800\n          hover:bg-gray-700\n          px-2\n        ",key:n,onClick:e=>m.filterTag(n)},[r("div",{class:["h-4 w-4 rounded mr-2",m.buttonClass(n)],style:m.buttonStyle(n)},[a.$store.state.filter.has(n)?(e(),t("svg",G,[K])):d("",!0)],6),c(" "+i(n),1)],8,["onClick"])))),128))])])};const X={data(){return{width:this.$store.state.settings.yearWidth}},watch:{width(e,t){this.$store.commit("setYearWidth",e)}}},q={class:"flex flex-col mb-2"},z=r("h3",null,"Year width",-1);X.render=function(n,s,i,a,o,l){return e(),t("div",q,[z,h(r("input",{type:"range",min:"10",max:"1200","onUpdate:modelValue":s[1]||(s[1]=e=>o.width=e)},null,512),[[g,o.width]])])};var _={components:{Timeline:W,Storage:f,Tags:O,DisplaySettings:X},data:()=>({collapsed:!1,currentTimelineName:"",list:[]}),mounted(){this.getTimelines()},methods:{deleteTimeline(e){confirm(`Delete ${e}?`)&&(localStorage.removeItem(e),this.list.splice(this.list.indexOf(e),1),localStorage.setItem("timelines",this.list.join(",")))},selectedTimeline(e){this.loadTimeline(e)},save(){const e=prompt("Save cascade as: ",this.currentTimelineName);if(e){if(localStorage.setItem(e,this.$store.state.eventsString),this.list.includes(e))return;this.list.push(e),localStorage.setItem("timelines",this.list.join(","))}},loadTimeline(e){var t;this.$store.commit("setEventsString",null!=(t=localStorage.getItem(e))?t:""),this.currentTimelineName=e},getTimelines(){const e=localStorage.getItem("timelines");e&&(this.list=e.split(","),this.loadTimeline(this.list[0]))}}};const Q={class:"flex flex-row"},Z={class:"backdrop-filter backdrop-blur-sm"},ee={class:"flex flex-row"},te=r("div",{class:"underline flex items-end"},[r("a",{href:"https://github.com/kochrt/timeline-maker"},"GitHub")],-1),ne={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 ml-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},se=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),re={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ie=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),ae={class:"flex md:flex-row flex-col pt-3"},oe={class:""},le={class:"flex flex-col mb-3 text-black"},de={class:"flex flex-col justify-end ml-2 mb-3"};_.render=function(n,s,a,o,l,y){const p=v("storage"),f=v("timeline"),w=v("display-settings"),x=v("tags");return e(),t("div",Q,[r("div",Z,[r("div",ee,[te,r("button",{class:"\n            ml-auto\n            hover:bg-gray-500\n            rounded\n            px-3\n            flex flex-row\n            items-center\n          ",onClick:s[1]||(s[1]=e=>l.collapsed=!l.collapsed)},[c(i(l.collapsed?"Expand":"Collapse")+" ",1),l.collapsed?d("",!0):(e(),t("svg",ne,[se])),l.collapsed?(e(),t("svg",re,[ie])):d("",!0)])]),h(r("div",ae,[r(p,{list:l.list,onSelected:y.selectedTimeline,onDelete:y.deleteTimeline},null,8,["list","onSelected","onDelete"]),r("div",oe,[r("div",le,[h(r("textarea",{class:"border shadow-md flex-grow p-2 font-mono text-sm",name:"eventsField",cols:"55",rows:"12","onUpdate:modelValue":s[2]||(s[2]=e=>n.$store.state.eventsString=e)},null,512),[[g,n.$store.state.eventsString]]),r("button",{class:"\n                bg-blue-100\n                mt-3\n                rounded\n                shadow-md\n                hover:shadow-none\n                transition-all\n                duration-100\n              ",onClick:s[3]||(s[3]=(...e)=>y.save&&y.save(...e))}," Save cascade ")]),(e(),t(u,{to:"#timelineContainer"},[r(f)]))])],512),[[m,!l.collapsed]])]),r("div",de,[r(w),r(x,{tags:n.tags},null,8,["tags"])])])};var ce=y({name:"App",components:{MainVue:_}});ce.render=function(n,s,r,i,a,o){const l=v("main-vue");return e(),t(l)};const he=p(ce);he.use(P),he.mount("#app");
