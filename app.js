var targetDate = new Date("March 1, 2025 00:00:00").getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "Ramadan 2025 has begun!";
    }
}

var countdownInterval = setInterval(updateCountdown, 1000);
