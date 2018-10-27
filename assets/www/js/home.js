function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            location.assign('game.html');
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function runMove() {
    if (location.href.endsWith('test1.html')) {
        move();
        clearInterval(runMoveInterval);
    }
}

runMoveInterval = setInterval(runMove, 10);
