// display time

function displayTime() {

  const dt = new Date();
  const options = {
          timeZone: "America/Los_Angeles",
          hour12: true,
          weekday: 'long',
          // year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        };
        document.getElementById('time').innerText = dt.toLocaleString('en-US', options);
      }

// call the function every 1 second
setInterval(displayTime, 1000);
