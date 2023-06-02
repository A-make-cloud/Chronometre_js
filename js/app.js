(function () {
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let secondes = document.getElementById('secondes')
    let milliSecondes = document.getElementById('milli-secondes')
    let btnStart = document.getElementById('start-btn')
    let btnStop = document.getElementById('stop-btn')
    let btnReset = document.getElementById('reset-btn')

    let countMs = 0;
    let countS = 0;
    let countM = 0;
    let countH = 0;
    let t;
    btnStart.addEventListener('click', chono)
    function chono() {
        countMs++

        if (countMs === 10) {
            countS++
            countMs = 0
        }

        if (countS === 60) {
            countM = countM + 1
        }
        if (countM === 60) {
            countH++

        }
        hours.textContent = countH
        minutes.textContent = countM
        secondes.textContent = countS
        milliSecondes.textContent = countMs
        t = setTimeout(function () {
            chono();
            btnStart.disabled = true;
        }, 50)
    }

    btnStop.addEventListener('click', stopChono)
    function stopChono() {

        clearTimeout(t);
        btnStart.disabled = false;

    }
    btnReset.addEventListener('click', resetChrono)
    function resetChrono() {
        countH = 0;
        countM = 0;
        countS = 0;
        countMs = 0;
        hours.textContent = countH
        minutes.textContent = countM
        secondes.textContent = countS
        milliSecondes.textContent = countMs

        setTimeout(function () {
            resetChrono();
            window.location.reload();
        }, 0)
    }


}())