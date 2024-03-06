function runTitle(){
    const title = document.getElementById("header");
    title.style.animationPlayState = "running";
}

function runPlayBut(){
    const playBut = document.querySelector(".playButton");
    const grid = document.querySelector(".grid");
    const start = document.querySelector(".start");
    const stopwatch = document.querySelector(".stopwatch");
    const snow = document.querySelectorAll(".snow");
    playBut.style.animationPlayState = "paused, running";
    playBut.style.animationIterationCount = "unset";
    playBut.style.zIndex = "1";
    grid.style.animationPlayState = "running";
    start.style.animationPlayState = "running, paused";
    stopwatch.style.animationPlayState = "running";
    for (let i = 0; i < snow.length; i++){
        snow[i].value = "true";
    }
}

function runStartBut(){
    const but = document.querySelectorAll(".but");
    const start = document.querySelector(".start");
    start.style.animationPlayState = "paused, running";
    for (let i = 0; i < but.length; i++){
        but[i].disabled = false;
    }
}

function reload(){
    location.reload();
}