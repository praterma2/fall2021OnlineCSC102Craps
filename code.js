function playCraps() {
    console.log("craps started");
    var die1 = Math.ceil(Math.random()*6);
    var die2 = Math.ceil(Math.random()*6);

    var sum = die1 + die2
    document.getElementById("die1Dis").innerHTML = die1;
    document.getElementById("die2Dis").innerHTML = die2;
    document.getElementById("sumDis").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("resultDis").innerHTML = "Craps - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("resultDis").innerHTML = "DOUBLES - you win!";
    } else {
        document.getElementById("resultDis").innerHTML = "You neither won nor lost. Please play again.";
    }

}
