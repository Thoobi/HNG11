

// Function to get the current local time from UTC time
function getLocalTimeFromUTC() {
    // Get the current UTC time
    let nowUTC = new Date();

    // Get the time zone offset in minutes and convert it to milliseconds
    let timezoneOffsetMinutes = nowUTC.getTimezoneOffset() / 180;

    let timezoneOffsetMilliseconds = timezoneOffsetMinutes * 60  * 1000;
    console.log();

    // Calculate the local time by subtracting the time zone offset
    let localTime = new Date(nowUTC.getTime() + (timezoneOffsetMilliseconds));

    // Display the calculated local time
    console.log("Local Time: " + localTime);
}

// Call the function to get and display the local time
getLocalTimeFromUTC();

function getUTCTimeAndDay() {
    let now = new Date();

    // Get the current UTC time components
    let hours = now.getUTCHours();
    let minutes = now.getUTCMinutes();
    let seconds = now.getUTCSeconds();

    // Get the current UTC day (0-6, where 0 is Sunday and 6 is Saturday)
    let day = now.getUTCDay();

    // Format time to always have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Array to convert day number to day name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Display the UTC time and day
    document.getElementById('current-time').innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-day').innerText = `${daysOfWeek[day]}`;
}

// Update the time and day every second
setInterval(getUTCTimeAndDay, 1000);

// Call the function initially to display the time and day immediately
getUTCTimeAndDay();

const img = document.getElementById('image');

        // Ensure the image is loaded before accessing its natural dimensions
        img.onload = function() {
            // Get the natural width and height of the image
            let naturalWidth = img.naturalWidth;
            let naturalHeight = img.naturalHeight;

            // Display the natural width and height
            console.log("Natural Width: " + naturalWidth + "px");
            console.log("Natural Height: " + naturalHeight + "px");
        }
            // In case the image is already loaded (e.g., from the browser cache)
            if (img.complete) {
                // Trigger the onload event handler manually
                img.onload();
            }

     
            
            // Ensure the image is loaded before accessing its dimensions
            img.onload = function() {
                let currentWidth = img.offsetWidth;
                let currentHeight = img.offsetHeight;

                // Display the current width and height
                console.log("Current Width: " + currentWidth + "px");
                console.log("Current Height: " + currentHeight + "px");
            };

            // In case the image is already loaded (e.g., from the browser cache)
            if (img.complete) {
                img.onload();
            }