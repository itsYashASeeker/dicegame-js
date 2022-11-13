var player = 1;
player = prompt("Which player are you(1 or 2) ?");
var winner;
var score=0;
var highscore=0;
var highlightdice;
var string1;
var stringj1;

var splayer = "You are Player "+player;
document.getElementById("idshowplayer").innerHTML = splayer;

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
        document.getElementById("idwinner").innerHTML="Play Again, It's a draw !!";
    }
    else if(winner!=player){
        stringj1 = "sadj"+get_jerryno()+".jpg";
        document.getElementById("idjerry").src = stringj1;
        document.getElementById("idjerry").classList.add("jerry");
        if(score!=0){
            score=score-1;
        }
        string1 = "Score: "+score;
        document.getElementById("idscore").innerHTML = string1;
        
        document.getElementById("idwinner").innerHTML = "You Lost...";
        document.getElementById("idwinner").style.color = "red";
    }
    else if(winner==player){
        stringj1 = "smilingj"+get_jerryno()+".jpg";
        document.getElementById("idjerry").src = stringj1;
        document.getElementById("idjerry").classList.add("jerry");
        score=score+1;
        if(score>highscore){
            highscore=score;
        }
        string1 = "Score: "+score;
        document.getElementById("idhighscore").innerHTML = "Highest Score: "+highscore;
        
        document.getElementById("idscore").innerHTML = string1;
        document.getElementById("idwinner").style.color = "green";
        document.getElementById("idwinner").innerHTML="Hurray You Won !!";
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
