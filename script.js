function updateTime() {
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    const clock = new Date();

    hours.innerHTML = clock.getHours();
    minutes.innerHTML = clock.getMinutes();
    seconds.innerHTML = clock.getSeconds();
}
setInterval(updateTime, 1000)