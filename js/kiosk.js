console.log("hello world");
// const weather = document.getElementById('weather');

// const nav =  document.getElementById('navigation');

// nav.parentElement.removeChild('navigation');
//const navigation = document.querySelector('#navigation');

// const p = document.createElement('p');
// p.textContent = 'Wildcard!';
// document.body.appendChild(p);

// display time
var dt = new Date();

var options = { timeZone: "America/New_York",
				hour12: false,
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};

// something like "Thursday, February 14, 2019, 02:55"
console.log(dt.toLocaleString('en-US', options));

document.getElementById("local-time").innerHTML = "test";

// const time =  document.getElementById('time');
// time.h1.innerHTML = dt.toLocaleString('en-US', options);
// const dt = document.createElement('h1');
// dt.textContent = dt.toLocaleString('en-US', options);
// document.body.appendChild(dt);
