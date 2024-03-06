const colors = ["blue", "green", "red", "yellow", "orange", "purple"];
let value1 = 0;

function runMatching(){
    let elements = document.querySelectorAll(".but");
    let num1 = [];
    let num2 = [];
    for (var i=0; i<elements.length; i++) {
        let ran = Math.floor(Math.random() * (6 - 0) + 0);
        if (num1.includes(ran)){
            if (num2.includes(ran)){
                i--;
            }
            else {
                elements[i].style.backgroundColor = colors[ran];
                num2.push(ran);
                elements[i].value = colors[ran];
                console.log(elements[i].value);
            }
        }
        else {
            elements[i].style.backgroundColor = colors[ran];
            num1.push(ran);
            elements[i].value = colors[ran];
            console.log(elements[i].value);
        }
    }
}

function buttonClick(button) {
    button.disabled = true;
    document.querySelector('.but[disabled]').style.boxShadow = "0px 0px 20px black";
    let clickedButtons = document.querySelectorAll('.but[disabled]');
    if (clickedButtons.length === 2) {
        if (clickedButtons[0].value === clickedButtons[1].value) {
            console.log("Matching colors!");
            clickedButtons[0].style.animation = "disappear 0.3s linear forwards";
            clickedButtons[1].style.animation = "disappear 0.3s linear forwards";
            clickedButtons[0].disabled = false;
            clickedButtons[1].disabled = false;
            clickedButtons[0].value = "none";
            clickedButtons[1].value = "none";
            console.log(clickedButtons[0].value + " " + clickedButtons[1].value)
            value1 = value1 + 2;
            console.log(value1);
            if (value1 === 12){
                document.querySelector(".stopwatch").style.animation = "drop3 1s ease-in-out forwards";
                document.querySelector(".reset").style.animationPlayState = "running";
            }
            clickedButtons.splice(0, 1);
            clickedButtons.splice(1, 1);
        } else {
            console.log("Colors don't match!");
            clickedButtons[0].style.boxShadow = "none";
            clickedButtons[1].style.boxShadow = "none";
            clickedButtons[0].disabled = false;
            clickedButtons[1].disabled = false;
            clickedButtons.splice(0, 1);
            clickedButtons.splice(1, 1);
        }
    }
}