var name=[];

for(var i=0; i<3; i++){
  name[i]=prompt("Tell me your dream")
};




const pics_src = [  "portforio2/img/a.JPG",
"portforio2/img/b.JPG",
"portforio2/img/c.JPG",
"portforio2/img/d.JPG",
"portforio2/img/e.JPG",
"portforio2/img/f.JPG",
"portforio2/img/g.JPG",
"portforio2/img/h.JPG",
"portforio2/img/i.JPG",];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 8){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}



setInterval(slideshow_timer, 4000);



var rythm = new Rythm()
rythm.setMusic('portforio2/music/1.wav');


// rythm.start()
