function press(evt) {
    var keycode=evt.which?evt.which:event.keyCode;//브라우져에 따라 달라서 삼항연산
    if (keycode == 13 ||keycode==9) {//13=enter, 엔터 입력시
        box_blur();
    } 
} 
function box_blur(){
    console.log("입력값 "+document.getElementById("keycode").value);//콘솔창에 보여주고
    document.getElementById("keycode").value="";//인풋값 초기화
}