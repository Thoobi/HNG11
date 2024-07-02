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
    document.getElementById('current-time').innerHTML= `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-day').innerText = `${daysOfWeek[day]}`;
}

// Update the time and day every second
setInterval(getUTCTimeAndDay, 1000);

getUTCTimeAndDay();

