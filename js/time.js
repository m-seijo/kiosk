// display time
function displayTime() {

  const dt = new Date();
  const options = {
          timeZone: "America/Los_Angeles",
          hour12: true,
          weekday: 'short',
          // year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        };
        document.getElementById('time').innerText = dt.toLocaleString('en-US', options);
      }

// call the function 
displayTime();
