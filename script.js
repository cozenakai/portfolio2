const pics_src = ["img/a.JPG","img/b.JPG","img/c.JPG"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 1000);

var rythm = new Rythm()
rythm.setMusic('music/10.wav')
rythm.start()