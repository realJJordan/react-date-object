function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return function(t){if(Array.isArray(t))return c(t)}(t)||n(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=h(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw s}}}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){return l(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,r,s=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);a=!0);}catch(t){u=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return s}(t,e)||h(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t){if(Array.isArray(t))return t}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function d(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,v(t,e,"get"))}function m(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,v(t,e,"set"),n),n}function v(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var g={name:"gregorian_en",months:[["January","Jan"],["February","Feb"],["March","Mar"],["April","Apr"],["May","May"],["June","Jun"],["July","Jul"],["August","Aug"],["September","Sep"],["October","Oct"],["November","Nov"],["December","Dec"]],weekDays:[["Saturday","Sat"],["Sunday","Sun"],["Monday","Mon"],["Tuesday","Tue"],["Wednesday","Wed"],["Thursday","Thu"],["Friday","Fri"]],digits:["0","1","2","3","4","5","6","7","8","9"],meridiems:[["AM","am"],["PM","pm"]]},k={name:"gregorian",startYear:1,yearLength:365,epoch:1721424,century:20,weekStartDayIndex:1,getMonthLengths:function(t){return[31,t?29:28,31,30,31,30,31,31,30,31,30,31]},isLeap:function(t){return t%4==0&&t%100!=0||t%400==0},getLeaps:function(t){if(0!==t){for(var e=t>0?1:-1,n=[];t>0?e<=t:t<=e;)this.isLeap(e)&&n.push(e),t>0?e++:e--;return n}},getDayOfYear:function(t){for(var e=t.year,n=t.month,i=t.day,r=this.getMonthLengths(this.isLeap(e)),s=0;s<n.index;s++)i+=r[s];return i},getAllDays:function(t){var e=t.year;return this.yearLength*(e-1)+this.leapsLength(e)+this.getDayOfYear(t)},leapsLength:function(t){return((t-1)/4|0)+(-(t-1)/100|0)+((t-1)/400|0)},guessYear:function(t,e){return~~(t/365.24)+(e>0?1:-1)}};function p(t){return t&&t.constructor===Object}function b(t){if(!isNaN(t))return parseInt(t)}function w(t){return Array.isArray(t)}function D(t,e,n){return void 0===t||t<e||t>n}var M=new WeakMap,O=new WeakMap,S=new WeakMap,Y=new WeakMap,L=new WeakMap,W=new WeakMap,x=new WeakMap,N=new WeakMap,j=new WeakMap,A=new WeakMap,I=new WeakMap,F=new WeakMap,T=new WeakMap,E=new WeakMap,P=new WeakMap,H=new WeakMap,V=new WeakMap,J=new WeakMap,C=new WeakMap,U=function(){function r(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),y(this,M,{writable:!0,value:void 0}),y(this,O,{writable:!0,value:void 0}),y(this,S,{writable:!0,value:void 0}),y(this,Y,{writable:!0,value:void 0}),y(this,L,{writable:!0,value:void 0}),y(this,W,{writable:!0,value:void 0}),y(this,x,{writable:!0,value:void 0}),y(this,N,{writable:!0,value:void 0}),y(this,j,{writable:!0,value:g}),y(this,A,{writable:!0,value:k}),y(this,I,{writable:!0,value:!1}),y(this,F,{writable:!0,value:{}}),y(this,T,{writable:!0,value:/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/}),y(this,E,{writable:!0,value:[]}),y(this,P,{writable:!0,value:!0}),y(this,H,{writable:!0,value:function(t,n){switch(t){case"YYYY":return["year",n];case"YY":return["year","".concat(d(e,A).century).concat(n)];case"MMMM":case"MMM":return["month",e.months.findIndex((function(t){var e=t.name,i=t.shortName;return new RegExp(n,"i").test(e+i)}))+1];case"MM":case"M":return["month",n];case"DD":case"D":return["day",n];case"HH":case"H":return["hour",n];case"hh":case"h":var i=b(n);return["hour",i>12?i-12:i];case"mm":case"m":return["minute",n];case"ss":case"s":return["second",n];case"SSS":case"SS":case"S":return["millisecond",n];default:return[]}}}),y(this,V,{writable:!0,value:function(){return 0===d(e,M)&&0!==d(e,A).startYear}}),y(this,J,{writable:!0,value:function(){if(d(e,P)&&e.isValid){var t=Math.floor,n=function(e,n){return[(s=e,(s<0?-1:1)*Math.abs(t(e/n))),(i=e,r=n,(i<0&&-0!==t(i%r)?r:0)+t(e%n))];var i,r,s},i=function(){if(d(e,O)<0||d(e,O)>11){var t=d(e,O)<0?-1:1,i=u(n(d(e,O),12),2),r=i[0],s=i[1];m(e,M,d(e,M)+r),m(e,O,s),d(e,V).call(e)&&m(e,M,t)}};for(m(e,P,!1),[["millisecond","second",1e3],["second","minute",60],["minute","hour",60],["hour","day",24]].forEach((function(t){var i=u(t,3),r=i[0],s=i[1],a=i[2];if(function(t,e){return t>=e||t<0}(e[r],a)){var o=u(n(e[r],a),2),h=o[0],c=o[1];e[s]+=h,e[r]=c}})),m(e,P,!0),i();d(e,S)<-d(e,A).yearLength||d(e,S)>d(e,A).yearLength;){if(d(e,O)>0){for(var r=d(e,A).getMonthLengths(e.isLeap),s=0;s<d(e,O);s++)m(e,S,d(e,S)+r[s]);m(e,O,0)}var a=e.isLeap?e.calendar.yearLength+1:e.calendar.yearLength;m(e,S,d(e,S)+a*(d(e,S)<0?1:-1)),m(e,M,d(e,M)+(d(e,S)<0?-1:1))}for(;;){for(i();d(e,S)<1;)m(e,O,d(e,O)-1),i(),m(e,S,e.month.length+d(e,S));if(d(e,S)<=e.month.length||isNaN(d(e,S)))break;m(e,S,d(e,S)-e.month.length),m(e,O,1+ +d(e,O))}d(e,Y)||m(e,Y,0),d(e,L)||m(e,L,0),d(e,W)||m(e,W,0),d(e,x)||m(e,x,0)}}}),y(this,C,{writable:!0,value:function(){return(d(e,F).weekDays||d(e,j).weekDays).map((function(t,n){var i=u(t,2),r=i[0],s=i[1],a=n-e.weekStartDayIndex;return a<0&&(a+=7),{name:r,shortName:s,index:a,number:a+1,toString:function(){return this.number.toString()},valueOf:function(){return this.number}}}))}});var n=p(t)?s({},t):t,i=!0;if(n&&"boolean"!=typeof n||(n={date:new Date}),p(n)||(n={date:n}),0!==Object.keys(n).length){for(var a in p(n.calendar)&&m(this,A,n.calendar),p(n.locale)&&m(this,j,n.locale),isNaN(n.year)&&isNaN(n.month)&&isNaN(n.day)&&!n.date&&(n.date=new Date),n.date&&("string"==typeof n.date&&n.format&&m(this,N,n.format),this.setDate(n.date),n.calendar&&this.convert(n.calendar),i=!1),delete n.calendar,delete n.locale,delete n.date,n)this.set(a,n[a]);d(this,V).call(this)&&m(this,M,-1),i&&d(this,J).call(this)}}var a,c,v;return a=r,(c=[{key:"parse",value:function(t){if(!t)return this;var r,s,a=d(this,N),c=d(this,j).digits,f=i(c);try{for(f.s();!(r=f.n()).done;){var y=r.value;t=t.replace(new RegExp(y,"g"),c.indexOf(y))}}catch(t){f.e(t)}finally{f.f()}if(a)for(var v=a.split(/[^\w\u0600-\u06FF]/),g=t.split(/[^\w\u0600-\u06FF]/),k=0;k<v.length;k++)this.set.apply(this,e(d(this,H).call(this,v[k],g[k])));else{var p=t.match(/(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/),w=(l(s=p)||n(s)||h(s)||o()).slice(1),D=w[1];D&&(D=/\d+/.test(D)?b(D)-1:this.months.findIndex((function(t){return new RegExp(D,"i").test(t.name)}))),w[1]=D;var A=u(w.map(b),7),I=A[0],F=A[1],T=A[2],E=A[3],P=A[4],V=A[5],C=A[6];m(this,M,I),m(this,O,F),m(this,S,T),m(this,Y,E),m(this,L,P),m(this,W,V),m(this,x,C)}var U=u(d(this,j).meridiems[1],2),R=U[0],_=U[1];return d(this,Y)<12&&(t.includes(R)||t.includes(_))&&m(this,Y,d(this,Y)+12),d(this,J).call(this),this}},{key:"convert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;if(p(e)&&m(this,j,e),!p(t)||t.name===d(this,A).name)return this;var n=this.toJulianDay()-t.epoch,i=new r({calendar:t,year:t.guessYear(n,d(this,M)),month:1,day:1});return i.day+=n-i.toDays(),m(this,M,i.year),m(this,O,i.month.index),m(this,S,i.day),m(this,A,t),this}},{key:"format",value:function(e,n){if(!this.isValid||e&&"string"!=typeof e)return"";e||(e=d(this,N)||"YYYY/MM/DD"),w(n)||(n=[]),n=(n=n.concat(d(this,E))).filter((function(e){return"string"==typeof e||(console.warn("type of all items in the ignore list must be string, found",t(e)),!1)})).map((function(t){return t.replace(/[*/+\-()[\]{}\s$^]/g,(function(t){return"\\"+t}))}));var r,s=new RegExp("".concat(n.join("|")).concat(n.length>0?"|":"","YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|."),"g"),a="",u=i(e.match(s)||[]);try{for(u.s();!(r=u.n()).done;){var o=r.value,h=this.getValue(o);a+=n.includes(o)?o:0===h?h:h||o}}catch(t){u.e(t)}finally{u.f()}var c=this.digits;return a.replace(/[0-9]/g,(function(t){return c[t]}))}},{key:"getProperty",value:function(t){return this.getValue(t)}},{key:"getValue",value:function(t){var e=function(t){return t<10?"0"+t:t};switch(t){case"YYYY":return this.year;case"YY":return this.year.toString().substring(2,4);case"MMMM":return this.month.name;case"MMM":return this.month.shortName;case"MM":return e(this.month.number);case"M":return this.month.number;case"WW":return e(this.weekOfYear);case"W":return this.weekOfYear;case"DDDD":case"DDD":return this.dayOfYear;case"DD":return e(this.day);case"D":return this.day;case"HH":return e(this.hour);case"H":return this.hour;case"dddd":return this.weekDay.name;case"ddd":return this.weekDay.shortName;case"dd":return e(this.weekDay.number);case"d":return this.weekDay.number;case"hh":return e(this.hour>12?this.hour-12:this.hour||12);case"h":return this.hour>12?this.hour-12:this.hour||12;case"mm":return e(this.minute);case"m":return this.minute;case"ss":return e(this.second);case"s":return this.second;case"SSS":return d(this,x)<10?"00".concat(d(this,x)):d(this,x)<100?"0".concat(d(this,x)):d(this,x);case"SS":return d(this,x)<10?"00":d(this,x)<100?("0"+d(this,x)).substring(2,0):d(this,x).toString().substring(0,2);case"S":return d(this,x)<10||d(this,x)<100?"0":d(this,x).toString().substring(0,1);case"a":return this.hour>=12?d(this,j).meridiems[1][1]:d(this,j).meridiems[0][1];case"A":return this.hour>=12?d(this,j).meridiems[1][0]:d(this,j).meridiems[0][0];default:return""}}},{key:"setYear",value:function(t){return this.year=t,this}},{key:"setMonths",value:function(t){return this.months=t,this}},{key:"setMonth",value:function(t){return this.month=t,this}},{key:"setWeekDays",value:function(t){return this.weekDays=t,this}},{key:"setDigits",value:function(t){return this.digits=t,this}},{key:"setDay",value:function(t){return this.day=t,this}},{key:"setHour",value:function(t){return this.hour=t,this}},{key:"setMinute",value:function(t){return this.minute=t,this}},{key:"setSecond",value:function(t){return this.second=t,this}},{key:"setMillisecond",value:function(t){return this.millisecond=t,this}},{key:"setFormat",value:function(t){return m(this,N,t),this}},{key:"setLocale",value:function(t){return this.locale=t,this}},{key:"setCalendar",value:function(t){return this.calendar=t,this}},{key:"setDate",value:function(t){if("string"==typeof t){if(!d(this,T).test(t))return this.parse(t);t=new Date(t)}return"number"==typeof t&&(t=new Date(t)),t instanceof Date&&(m(this,A,k),m(this,M,t.getFullYear()),m(this,O,t.getMonth()),m(this,S,t.getDate()),m(this,Y,t.getHours()),m(this,L,t.getMinutes()),m(this,W,t.getSeconds()),m(this,x,t.getMilliseconds()),m(this,I,!1)),t instanceof r&&(m(this,M,t.year),m(this,O,t.month.index),m(this,S,t.day),m(this,Y,t.hour),m(this,L,t.minute),m(this,W,t.second),m(this,x,t.millisecond),m(this,j,t.locale),m(this,N,t._format),m(this,A,t.calendar),m(this,I,t.isUTC),m(this,E,t.ignoreList),m(this,F,t.custom)),this}},{key:"setIgnoreList",value:function(t){return this.ignoreList=t,this}},{key:"set",value:function(t,e){if(null==t)return this;if(p(t)){var n=s({},t);for(var i in n.date&&(this.setDate(n.date),delete n.date),n.calendar&&(this.convert(n.calendar),delete n.calendar),n.locale&&(this.setLocale(n.locale),delete n.locale),m(this,P,!1),n)this.set(i,n[i]);return m(this,P,!0),d(this,J).call(this),this}"format"===t&&(t="_format");try{this[t]=e}catch(t){}return this}},{key:"add",value:function(t,e){if(!(t=b(t))||!e)return this;switch(e){case"years":case"y":e="year";break;case"months":case"M":e="month";break;case"days":case"d":e="day";break;case"hours":case"h":e="hour";break;case"minutes":case"m":e="minute";break;case"seconds":case"s":e="second";break;case"milliseconds":case"ms":e="millisecond"}return this[e]+=t,this}},{key:"subtract",value:function(t,e){return this.add(-t,e)}},{key:"toFirstOfYear",value:function(){return this.month=1,this.day=1,this}},{key:"toLastOfYear",value:function(){return this.day>=29&&(this.day=29),this.month=12,this.toLastOfMonth(),this}},{key:"toFirstOfMonth",value:function(){return m(this,S,1),this}},{key:"toLastOfMonth",value:function(){return m(this,S,0),m(this,O,d(this,O)+1),d(this,J).call(this),this}},{key:"toFirstOfWeek",value:function(){return this.day-=this.weekDay.index,this}},{key:"toLastOfWeek",value:function(){return this.day+=6-this.weekDay.index,this}},{key:"toFirstWeekOfYear",value:function(){return this.toFirstOfYear(),0===this.weekDay.index?this:this.toLastOfWeek().setDay(this.day+1)}},{key:"toLastWeekOfYear",value:function(){return this.toLastOfYear().toFirstOfWeek()}},{key:"toString",value:function(){return this.format()}},{key:"toDate",value:function(){var t=new r(this);return"gregorian"!==d(this,A).name&&t.convert(k),new Date(t.year,t.month.index,t.day,t.hour,t.minute,t.second,t.millisecond)}},{key:"toUTC",value:function(){return d(this,I)||(this.minute+=this.toDate().getTimezoneOffset(),m(this,I,!0)),this}},{key:"toUnix",value:function(){return this.unix}},{key:"toJulianDay",value:function(){return this.toDays()+d(this,A).epoch}},{key:"toObject",value:function(){return{year:d(this,M),month:this.month,day:d(this,S),weekDay:this.weekDay,hour:d(this,Y),minute:d(this,L),second:d(this,W),millisecond:d(this,x),weekOfYear:this.weekOfYear,dayOfYear:this.dayOfYear,daysLeft:this.daysLeft,calendar:d(this,A),locale:d(this,j),format:d(this,N)||"YYYY/MM/DD",ignoreList:d(this,E)}}},{key:"toJSON",value:function(){return this.valueOf()}},{key:"valueOf",value:function(){return this.toDate().valueOf()}},{key:"toDays",value:function(){if(this.isValid)return d(this,A).getAllDays(this)}},{key:"dayOfBeginning",get:function(){return this.toDays()}},{key:"dayOfYear",get:function(){if(this.isValid)return d(this,A).getDayOfYear(this)}},{key:"weekOfYear",get:function(){if(this.isValid)return 1+~~(this.dayOfYear/7)}},{key:"daysLeft",get:function(){if(this.isValid){var t=d(this,A).yearLength;return(this.isLeap?t+1:t)-this.dayOfYear}}},{key:"year",get:function(){return d(this,M)},set:function(t){m(this,M,b(t)),d(this,J).call(this)}},{key:"month",get:function(){return this.months[d(this,O)]||{}},set:function(t){var e;t=null!==(e=b(t.valueOf())-1)&&void 0!==e?e:void 0,m(this,O,t),D(t,0,11)&&d(this,J).call(this)}},{key:"monthIndex",get:function(){return d(this,O)}},{key:"day",get:function(){return d(this,S)},set:function(t){t=b(t),m(this,S,t),D(t,1,28)&&d(this,J).call(this)}},{key:"weekDay",get:function(){if(!this.isValid)return{};var t=(this.toJulianDay()+3)%7;return d(this,C).call(this)[t]}},{key:"hour",get:function(){return d(this,Y)},set:function(t){t=b(t),m(this,Y,t),D(t,0,23)&&d(this,J).call(this)}},{key:"minute",get:function(){return d(this,L)},set:function(t){t=b(t),m(this,L,t),D(t,0,59)&&d(this,J).call(this)}},{key:"second",get:function(){return d(this,W)},set:function(t){t=b(t),m(this,W,t),D(t,0,59)&&d(this,J).call(this)}},{key:"millisecond",get:function(){return d(this,x)},set:function(t){t=b(t),m(this,x,t),D(t,0,999)&&d(this,J).call(this)}},{key:"months",get:function(){var t=d(this,A).getMonthLengths(this.isLeap);return(d(this,F).months||d(this,j).months).map((function(e,n){var i=u(e,2);return{name:i[0],shortName:i[1],length:t[n],index:n,number:n+1,toString:function(){return this.number.toString()},valueOf:function(){return this.number}}}))},set:function(t){if(!t)return delete d(this,F).months;w(t)&&12===t.length&&t.every((function(t){return w(t)&&2===t.length&&t.every((function(t){return"string"==typeof t}))}))&&(d(this,F).months=t)}},{key:"weekDays",get:function(){return d(this,C).call(this).sort((function(t,e){return t.index-e.index}))},set:function(t){if(!t)return delete d(this,F).weekDays;w(t)&&7===t.length&&t.every((function(t){return w(t)&&2===t.length&&t.every((function(t){return"string"==typeof t}))}))&&(d(this,F).weekDays=t)}},{key:"leaps",get:function(){return d(this,A).getLeaps(d(this,M))}},{key:"calendar",get:function(){return d(this,A)},set:function(t){this.convert(t)}},{key:"locale",get:function(){return d(this,j)},set:function(t){void 0===t&&(t=g),p(t)&&m(this,j,t)}},{key:"custom",get:function(){return d(this,F)}},{key:"meridiems",get:function(){return d(this,j).meridiems}},{key:"digits",get:function(){return d(this,F).digits||d(this,j).digits},set:function(t){if(!t)return delete d(this,F).digits;w(t)&&10===t.length&&(d(this,F).digits=t)}},{key:"_format",get:function(){return d(this,N)},set:function(t){"string"==typeof t&&m(this,N,t)}},{key:"isLeap",get:function(){return d(this,A).isLeap(d(this,M))}},{key:"isValid",get:function(){return!isNaN(d(this,M))&&!isNaN(d(this,O))&&!isNaN(d(this,S))}},{key:"isUTC",get:function(){return d(this,I)}},{key:"unix",get:function(){return(this.valueOf()-this.millisecond)/1e3}},{key:"ignoreList",get:function(){return d(this,E)},set:function(t){w(t)&&m(this,E,t)}},{key:"weekStartDayIndex",get:function(){return d(this,A).weekStartDayIndex},set:function(t){void 0!==(t=b(t))&&(d(this,A).weekStartDayIndex=Math.abs(t)%7)}},{key:"date",set:function(t){this.setDate(t)}}])&&f(a.prototype,c),v&&f(a,v),r}();export{U as default};
