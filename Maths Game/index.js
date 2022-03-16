var timevalue = 0;
var answer = 0;
var score = 0;

function startGame(){
    let num1 = Math.round(Math.random()*10);
    let num2 = Math.round(Math.random()*10);

    answer = num1*num2;


    //generate random array
    let options = [Math.round(Math.random()*100) , answer , Math.round(Math.random()*10) , Math.round(Math.random()*100)]

    // shuffle array
    for (let i = options.length - 1; i > 0; i--) {
                    // Generate random number
            let j = Math.floor(Math.random() * (i + 1));
            let temp = options[i];
            options[i] = options[j];
            options[j] = temp;
    }
    document.getElementById("question").innerHTML = num1 + ' x' + num2;
    for(let i = 1 ; i<=4 ;i++)
        document.getElementById("option" + i).innerHTML = options[i-1];
    
    
    window.setInterval(function(){
        timevalue++;
        document.getElementById("timevalue").innerHTML = timevalue;
    },1000);

    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "inline";
}

function checkAnswer(id){
    let option = document.getElementById(id).innerText;
    console.log(option);
}

function endGame(){

}
document.getElementById("start").addEventListener("click",startGame);

document.getElementById("reset").addEventListener("click",endGame);

document.getElementById("option1").addEventListener("click",checkAnswer("option1"));

document.getElementById("option2").addEventListener("click",checkAnswer("option2"));

document.getElementById("option3").addEventListener("click",checkAnswer("option3"));

document.getElementById("option4").addEventListener("click",checkAnswer("option4"));