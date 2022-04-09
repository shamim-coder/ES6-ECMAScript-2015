function startTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    const time = `${hours}:${formateTime(minutes)}:${formateTime(second)}`;

    setInterval(startTime, 1000);

    document.getElementById("time-show").textContent = time;
}
startTime();

function formateTime(value) {
    if (value < 10) {
        return "0" + value;
    } else {
        return value;
    }
}
