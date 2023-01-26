function refresh(){
    let time = new Date();
let hr = (document.getElementById("hour"))
let s = (document.getElementById("secondsnumber"))
let min = (document.getElementById("minute"))
let grt1 = (document.getElementById("time"))
let grt2 = (document.getElementById("day"))
let cln = (document.getElementById("colon"))
let nue = (document.getElementById("nuemorphcont"))
let gls = (document.getElementById("glasscont"))
let dt = (document.getElementById("date"))
var all={dt, grt1, grt2, min,}

    hr.innerHTML=(time.getHours())
    min.innerHTML=(time.getMinutes())
    dt.innerHTML=((time.getMonth()+1)+"-"+time.getDate()+"-"+time.getFullYear())
    s.innerHTML=(time.getSeconds())
    //console.log("refreshing")
    let day =(time.getDay())
    switch (day){
        case 0: grt2.innerHTML="Happy Sunday they say"
        break;
        case 1: grt2.innerHTML="Monday is it"
        break;
        case 2: grt2.innerHTML="it is Tuesday"
        break;
        case 3: grt2.innerHTML="WeDnEsDay"
        break;
        case 4: grt2.innerHTML="Yet another Thursday"
        break;
        case 5: grt2.innerHTML="Thank God its Friday!"
        break;
        case 6: grt2.innerHTML="Hows your Saturday going?"
        break;
    }
    let moment=(time.getHours());
    if (moment< 10)
    {
        grt1.innerHTML="Good Morning 🌄";
        //document.style="background:#7aff009c"
       dt.style="color:#b9ff00; box-shadow: 0 0 10px #b9ff00";
       grt1.style="color:#b9ff00";
       grt2.style="color:#b9ff00";
        min.style="color:#b9ff00; box-shadow: 0 0 10px #b9ff00";
        hr.style="color:#b9ff00; box-shadow: 0 0 10px #b9ff00";
        s.style="color:#b9ff00; text-shadow: 0 0 10px #b9ff00";
        cln.style="color:#b9ff00";
        nue.style="background:#556dff";
        gls.style="background:#556dff7a"  
    }
    else if(moment<12)
    {
        grt1.innerHTML="Good Day 🌅"
        dt.style="color:#d5ffdf; box-shadow:0 0 10px #d5ffdf";
        grt1.style="color:#d5ffdf";
       grt2.style="color:#d5ffdf";
        min.style="color:#d5ffdf; box-shadow: 0 0 10px #d5ffdf";
        hr.style="color:#d5ffdf; box-shadow: 0 0 10px #d5ffdf";
        s.style="color:#d5ffdf; text-shadow: 0 0 10px #d5ffdf";
        cln.style="color:#d5ffdf";
        nue.style="background:#009640";
        gls.style="background:#0096407a"
    }
    else if(moment<16)
    {
      grt1.innerHTML="Good Afternoon 🏜️";
      //document.style="background:teal"
     dt.style="color:#15e0ff; box-shadow:0 0 10px #15e0ff";
     grt1.style="color:#15e0ff";
     grt2.style="color:#0b7080";
     min.style="color:#15e0ff; box-shadow:0 0 10px #15e0ff";
     hr.style="color:#15e0ff; box-shadow:0 0 10px #15e0ff";
     s.style="color:#15e0ff; text-shadow:0 0 10px #15e0ff";
     cln.style="color:#15e0ff";
     nue.style="background:#efec3c";
     gls.style="background:#fffc407a"
    }
    else if(moment<20)
    {
      grt1.innerHTML="Good Evening 🌆"  
      dt.style="color:#ff7300; box-shadow:0 0 10px #ff7300"
      grt1.style="color:#ff7300";
     grt2.style="color:#ff7300";
     min.style="color:#ff7300; box-shadow:0 0 10px #ff7300;";
     hr.style="color:#ff7300; box-shadow:0 0 10px #ff7300";
     s.style="color:#ff7300; text-shadow:0 0 10px #ff7300";
     cln.style="color:#ff7300";
    }
    else if(moment <23)
    {
        grt1.innerHTML="Good Night 🌃"
        dt.style="color:#eaffff; box-shadow:0 0 10px #eaffff"
        grt1.style="color:#eaffff";
     grt2.style="color:#eaffff";
     min.style="color:#eaffff; box-shadow:0 0 10px #eaffff";
     hr.style="color:#eaffff; box-shadow:0 0 10px #eaffff";
     s.style="color:#eaffff; text-shadow:0 0 10px #eaffff";
     cln.style="color:#eaffff";
     nue.style="background:#36406c";
     gls.style="background:#36406c7a"
     document.body.style="background:#444444"
    }
    else{
        dt.style="color:#eaffff; box-shadow:0 0 10px #eaffff"
        grt1.style="color:#eaffff";
     grt2.style="color:#eaffff";
     min.style="color:#eaffff; box-shadow:0 0 10px #eaffff";
     hr.style="color:#eaffff; box-shadow:0 0 10px #eaffff";
     s.style="color:#eaffff; text-shadow:0 0 10px #eaffff";
     cln.style="color:#eaffff";
     nue.style="background:#36406c";
     gls.style="background:#36406c7a"
     document.body.style="background:#444444"
        grt1.innerHTML="I'm Suprised you're awake 🌚"
    }
}
// updates every 0.001 seconds
setInterval("refresh()", 10);
function easteregg(){
    window.alert(("Made By Ubongabasi Jerome 👨🏾‍💻 "))
    window.alert(("you found an easteregg 😃 Wait for 10s"))
    document.getElementById("day").innerHTML="Playing"
    var audio = new Audio("./bck1.mp3")
if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    return;
  }
}
function fb(){
    window.location.href="https://facebook.com/dhela.frank"
}

