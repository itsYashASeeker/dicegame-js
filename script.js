function get_random()
{
    return Math.floor(Math.random()*6)+1;
}
function play(){
    first = get_random();
    second = get_random();
    
    string1 = "img/"+first+".png";
    string2 = "img/"+second+".png";
    document.getElementById("display").innerHTML=first+" "+second;
    document.getElementById("f").src=string1;
    document.getElementById("s").src=string2;

    if(first>second)
    {
        document.querySelector("h1").innerHTML = "First is the WINNER!!!";
    }
    else if(first<second)
    {
        document.querySelector("h1").innerHTML="Second is the WINNER!!!";
    }
    else if(first=second)
    {
        document.querySelector("h1").innerHTML="Play Again, It's a draw";
    }
}