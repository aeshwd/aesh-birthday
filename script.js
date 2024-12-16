// Countdown Timer for 29th January
const countdown = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 0, 29); // 29th January

    // If the target date for the current year has passed, set it for the next year
    if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
    }

    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText =
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds Until 29th January`;

    // Message after the countdown reaches 0
    if (diff <= 0) {
        document.getElementById("timer").innerText = "🎉 It's 29th January! Time to reflect.";
    }
};

// Update the countdown every second
setInterval(countdown, 1000);
