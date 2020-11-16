console.log("hello world");


// var d = new Date();
// document.getElementById("demo").innerHTML = d;


// // display time
// const dt = new Date();
// const options = {
//         timeZone: "America/Los_Angeles",
// 				hour12: false,
// 				weekday: 'long',
// 				// year: 'numeric',
// 				month: 'long',
// 				day: 'numeric',
// 				hour: 'numeric',
// 				minute: 'numeric'
// 			};
//
// // display something like "Thursday, February 14, 02:55"
// console.log(dt.toLocaleString('en-US', options));
//
// //document.getElementById('t').innerText = 'test';

//dt.toLocaleString('en-US', options);

// document.getElementById('time-wrapper').innerText = "Test";

//console.log(time);
// document.getElementById(local-time).innerHTML = dt.toLocaleString('en-US', options);
// dt.toLocaleString('en-US', options)


//document.getElementById('local-time').innerText = dt.toLocaleString('en-US', options);

//document.getElementById('local-time').innerText = dt.toLocaleString('en-US', options);

// document.getElementById('menu')[1].innerHTML = 'hello';
// document.getElementById("local-time").innerHTML = 'test';

// const time =  document.getElementById('time');

// const dt = document.createElement('h1');
// dt.textContent = dt.toLocaleString('en-US', options);
// document.body.appendChild(dt);


function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var d = new Date();
var t = document.getElementById("t");
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
//t.innerHTML = h + ":" + m + ":" + s;
//document.getElementById('t').innerText = h + ":" + s;
