"use strict";var e={name:"gregorian",startYear:1,yearLength:365,epoch:1721424,century:20,weekStartDayIndex:1,getMonthLengths:e=>[31,e?29:28,31,30,31,30,31,31,30,31,30,31],isLeap:e=>e%4==0&&e%100!=0||e%400==0,getLeaps(e){if(0===e)return;let t=e>0?1:-1,r=[];for(;e>0?t<=e:e<=t;)this.isLeap(t)&&r.push(t),e>0?t++:t--;return r},getDayOfYear({year:e,month:t,day:r}){let a=this.getMonthLengths(this.isLeap(e));for(let e=0;e<t.index;e++)r+=a[e];return r},getAllDays(e){const{year:t}=e;return this.yearLength*(t-1)+this.leapsLength(t)+this.getDayOfYear(e)},leapsLength:e=>((e-1)/4|0)+(-(e-1)/100|0)+((e-1)/400|0),guessYear:(e,t)=>~~(e/365.24)+(t>0?1:-1)};module.exports=e;
