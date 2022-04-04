//타이틀 자동입력
document.getElementById('title').innerHTML=document.getElementsByTagName('head')[0].innerText.trim();

// path
const title = document.getElementById("title").innerText;
document.getElementById("path").innerHTML += "/ " + title;

//a link
const atags = document.getElementsByTagName("a");
for (var i = 0; i < atags.length; i++) {
  atags[i].innerHTML = "&#128196; " + atags[i].innerHTML;
}





