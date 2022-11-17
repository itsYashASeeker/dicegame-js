var player = 1;
// player = prompt("Which player are you(1 or 2) ?");
var winner;
var score=0;
var highscore=0;
var highlightdice;
var string1;
var stringj1;
var jerrystate;

// Highest Score hover
var hoverhighscore = document.getElementById("idhighscore");
hoverhighscore.addEventListener("mouseover", function(){
    var stringhighscore = "Highest score is"+highscore;
    let utterance = new SpeechSynthesisUtterance(stringhighscore);
    speechSynthesis.speak(utterance);
})

// Dice hover
var dice = document.querySelectorAll(".sdice");
for (i=0;i<2;i++)
{
    dice[i].addEventListener("mouseover", function() {
    var diceh = new Audio("whoosh.mp3");
    diceh.volume = 1;
    diceh.play();
    });
}



// Play button
var displayi = document.querySelector(".play");
displayi.addEventListener("click", function(){
    var dice_shake1 = new Audio("dice_shake1.mp3");
    dice_shake1.play();
    // let utterance = new SpeechSynthesisUtterance("Hello sound");
    // speechSynthesis.speak(utterance);
});



var splayer = "You are Player "+player;
var splayerh = "आप खिलाड़ी "+player+" हैं";
document.getElementById("idshowplayer").innerHTML = splayer;
// document.getElementById("idshowplayerh").innerHTML = splayerh;


function handlejerry(){
    if(jerrystate==1)
    {
        jerryhappy();
    }
    else
    {
        jerrysad();
    }
}

function jerrysad(){
    var sad1sound = new Audio("sad1.mp3");
    sad1sound.play();
}

function jerryhappy(){
    var happy1sound = new Audio("happy1.mp3");
    happy1sound.play();
}

function get_random()
{
    return Math.floor(Math.random()*6)+1;
}

function get_jerryno(){
    return Math.floor(Math.random()*3)+1;
}

function decide(winner){

    // Add bg color to dice based on won or lost
    if(winner==1){
        console.log("won");
        document.getElementById("f").classList.add("won");
        document.getElementById("s").classList.add("lost");
    }
    else if(winner==2){
        console.log("lost");
        document.getElementById("f").classList.add("lost");
        document.getElementById("s").classList.add("won");
    }
    else if(winner==0){
        console.log("draw");
        document.getElementById("f").classList.add("draw");
        document.getElementById("s").classList.add("draw");
    }

    // updating scores and text according to USER chosen player!!
    if(winner==0){
        document.getElementById("idjerry").src = "";
        document.getElementById("idjerry").classList.remove("jerry");
        document.getElementById("idwinner").style.color = "black";
        document.getElementById("idwinner").innerHTML="It's a draw !!";
    }
    else if(winner!=player){
        
        stringj1 = "sadj"+get_jerryno()+".jpg";
        var sad = document.getElementById("idjerry");
        sad.src = stringj1;
        sad.classList.add("jerry");
        // Playing sound
        // if(jerrystate==1){
        //     happy.removeEventListener("mouseover",jerryhappy);
        // }
        jerrystate=0;
        // sad.addEventListener("mouseover",jerrysad);
        // sad.removeEventListener("mouseover",jerrysad);
        // Sound finishes
        if(score!=0){
            score=score-1;
        }
        string1 = "Score: "+score;
        document.getElementById("idscore").innerHTML = string1;
        
        document.getElementById("idwinner").innerHTML = "You Lost..";
        document.getElementById("idwinner").style.color = "red";
    }
    else if(winner==player){
        stringj1 = "smilingj"+get_jerryno()+".jpg";
        var happy = document.getElementById("idjerry");
        happy.src = stringj1;
        happy.classList.add("jerry");
        // Playing sound
        // sad.removeEventListener("mouseover",jerrysad);
        // if(jerrystate==0)
        // {
        //     sad.removeEventListener("mouseover",jerrysad);
        // }
        jerrystate=1;
        // happy.addEventListener("mouseover",jerryhappy);
        // happy.removeEventListener("mouseover",jerryhappy);
        // Sound finishes
        score=score+1;
        if(score>highscore){
            highscore=score;
        }
        string1 = "Score: "+score;
        document.getElementById("idhighscore").innerHTML = "Highest Score: "+highscore;
        
        document.getElementById("idscore").innerHTML = string1;
        document.getElementById("idwinner").style.color = "green";
        document.getElementById("idwinner").innerHTML="You Won !!";
    }
}

function play(){
    first = get_random();
    second = get_random();
    
    string1 = first+".png";
    string2 = second+".png";
    console.log(string1+" "+string2);
    document.getElementById("f").src=string1;
    document.getElementById("s").src=string2;

    // Refresh colors of dices
    document.getElementById("f").classList.remove("won");
    document.getElementById("f").classList.remove("lost");
    document.getElementById("f").classList.remove("draw");
    document.getElementById("s").classList.remove("won");
    document.getElementById("s").classList.remove("lost");
    document.getElementById("s").classList.remove("draw");

    // Removing earlier jerry
    document.getElementById("idjerry").classList.remove("jerry");

    if(first>second)
    {
        decide(1);  
    }
    else if(first<second)
    {
        decide(2);
    }
    else if(first==second)
    {
        decide(0);
    }
}
