//오늘 날짜 기록 !!!진행중...!!!
function record_date() {
    let today = new Date();
    today.setDate(today.getDate());
    let todayStr = today.getFullYear() + "."
        + ("0" + (today.getMonth() + 1)).slice(-2) + "."
        + today.getDate() + " " + today.getMinutes();
    document.getElementById("date").innerHTML = "&#128198; " + todayStr;


    // // FileSystemObject 객체 생성
    // alert("파일 작성시작")
    // var fileObject = new ActiveXObject("Scripting.FileSystemObject");
    // alert("생성자 작동")
    // fWrite = fileObject.CreateTextFile("D:\\data", true);
    // // 파일쓰기
    // fWrite.write(todayStr);
    // // 파일 닫기
    // fWrite.close();
    // alert("저장되었습니다.")
}


    // fetch('data').then(function (response) {
    //     if (response.status == '404') alert('not found');//파일 연결 안되면 경고 띄워주고
    //     response.text() = todayStr;
        // .then(function(text){
        //     document.getElementById("date").innerHTML+=text;
        // })
    // })
// }