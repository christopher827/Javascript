function dispayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var sessions=document.getElementById('sessions');
if (hrs>=12) {
    sessions.innerHTML='PM';
}
else{

}
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;

}
setInterval(dispayTime,10);
/*
function DisplayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    document.getElementById('sessions');

    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('sec').innerHTML=sec;


}
setInterval(DisplayTime,10);*/