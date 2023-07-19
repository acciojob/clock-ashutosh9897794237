//your JS code here. If required.
//your JS code here. If required.
const para = document.getElementById("timer");
 const d = new Date();
//  this is for date 
 var date = d.getDate();
 var month = d.getMonth();
 var year = d.getFullYear();
//  this is for time;
var hour = d.getMonth();
var min = d.getMinutes();
var sec = d.getSeconds();

date = date < 10 ? "0"+date : date ;
month = month < 10 ? "0"+ month : month ;
min = min < 10 ? "0"+ min : min ;

para.innerHTML = date+"/"+month+"/"+year+", "+hour+":"+min+":"+sec ;
console.log(para.innerHtml);