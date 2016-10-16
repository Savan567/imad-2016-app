
var button=document.getelementbyId("counter");
button.onclick=function(){
    counter=counter+1;
    var span=document.getelementbyId("count");
    span.innerHTML=counter.toString();
};