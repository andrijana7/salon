function timer () {
    function changeDom () {
        let now = new Date().getTime(),
            distance = countDown - now;

            document.getElementById('days').innerHTML = Math.floor(distance / (day)) + '',
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + ' ',
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + '',
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + '';

        if (distance <= 0) {

            // document.getElementById('days').innerText = ('0 days ');
            // document.getElementById('hours').innerText = ('0 hours');
            // document.getElementById('minutes').innerText = ('0 minutes');
            // document.getElementById('seconds').innerText = ('0 seconds');

            
            document.getElementById("divTimerExpired").style.display = "block";
        }
    }

    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    let time = "December 31, 2022 20:32:00";
    let countDown = new Date(time).getTime(),
    x = setInterval(changeDom, second)
    changeDom();
}

timer();