/**
 * Created by lwx on 2018/3/2.
 */
var jiandao = document.getElementById("jiandao");
var shitou = document.getElementById("shitou");
var bu = document.getElementById("bu");

jiandao.onclick = function(){
    document.getElementById("my-result").src="./img/jiandao.jpg";
    var compunentResult = Math.random()
    if(compunentResult<0.33){
        document.getElementById("computer-result").src="./img/jiandao.jpg";
        document.getElementById("result-text").innerHTML="你们平手了";
    }else if(compunentResult<0.67){
        document.getElementById("computer-result").src="./img/shitou.jpg";
        document.getElementById("result-text").innerHTML="你输了";
    }else{
        document.getElementById("computer-result").src="./img/bu.jpg";
        document.getElementById("result-text").innerHTML="恭喜你，获胜了！";
    }
}
shitou.onclick = function(){
    document.getElementById("my-result").src="./img/shitou.jpg";
    var compunentResult = Math.random()
    if(compunentResult<0.33){
        document.getElementById("computer-result").src="./img/jiandao.jpg";
        document.getElementById("result-text").innerHTML="恭喜你，获胜了！";
    }else if(compunentResult<0.67){
        document.getElementById("computer-result").src="./img/shitou.jpg";
        document.getElementById("result-text").innerHTML="你们平手了";
    }else{
        document.getElementById("computer-result").src="./img/bu.jpg";
        document.getElementById("result-text").innerHTML="你输了";
    }
}
bu.onclick = function(){
    document.getElementById("my-result").src="./img/bu.jpg";
    var compunentResult = Math.random()
    if(compunentResult<0.33){
        document.getElementById("computer-result").src="./img/jiandao.jpg";
        document.getElementById("result-text").innerHTML="你输了";
    }else if(compunentResult<0.67){
        document.getElementById("computer-result").src="./img/shitou.jpg";
        document.getElementById("result-text").innerHTML="恭喜你，获胜了！";
    }else{
        document.getElementById("computer-result").src="./img/bu.jpg";
        document.getElementById("result-text").innerHTML="你们平手了";

    }
}