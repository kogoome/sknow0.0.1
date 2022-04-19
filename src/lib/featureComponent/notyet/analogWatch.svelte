<script>
function setNumPosition() {
  const nums = document.querySelectorAll(".number");
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

    const angle = (i + 1) * (Math.PI / 6);
    // 가로 길이: 132(반지름 값, 테두리가 8px라서 140-8을 해줌) - 텍스트 길이/2 - 132*sin30
    // 1부터 12까지 각도는 30도씩 증가하기 때문에 angle이라는 변수에 각도 값 저장
    // 세로도 가로길이와 비슷함. 
    // 원을 그리고 삼각함수를 이용하여 좌표 값을 구하는 방식으로 숫자의 위치를 설정하였음.
    const x =
      132 -
      nums[i].offsetWidth / 2 +
      132 * Math.abs(Math.sin(angle).toFixed(2));
    const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));
    if (i + 1 > 6) nums[i].style.right = `${x}px`;
    else nums[i].style.left = `${x}px`;

    if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
      nums[i].style.top = `${y}px`;
    else nums[i].style.bottom = `${y}px`;
  }
}

function clock() {
  const digitalClock = document.querySelector(".digital-clock");
  const secondPointer = document.getElementById("second");
  const minutePointer = document.getElementById("minute");
  const hourPointer = document.getElementById("hour");

  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;
  digitalClock.innerText = `${
    hour < 10
      ? `오전 0${hour}`
      : `${hour > 12 ? `오후 0${hour - 12}` : `오전 ${hour}`}`
  }:${minute < 10 ? `0${minute}` : `${minute}`}:${
    second < 10 ? `0${second}` : `${second}`
  }`;
}

function handleLoad() {
  setInterval(clock, 1000);
}

function init() {
  setNumPosition();
  window.addEventListener("load", handleLoad);
}

init();
</script>


<div>
  <div class="clock-container">
    <!-- 시계 숫자 -->
    <div class="number" id="num3">3</div>
    <div class="number" id="num6">6</div>
    <div class="number" id="num9">9</div>
    <div class="number" id="num12">12</div>

    <!-- 가운데 중심, 초, 분, 시 바늘-->
    <div class="rounded-full bg-red-500">
      <div id="dot"></div>
      <div id="hour"></div>
      <div id="minute"></div>
      <div id="second"></div>
    </div>
  </div>
</div>

<style>
  * {
  box-sizing: border-box;
}

.clock-container {
  /* 가로 세로를 280px인 정사각형으로 만든다.*/
  width: 300px;
  height: 300px;

  /* 테두리를 만들고 반지름이 140px인 원으로 만든다..*/
  border: 15px solid rgb(60, 60, 80);
  border-radius: 20%;

  /* margin top-bottom을 100px로 주고 가운데 정렬한다. 그리고 margin-bottom을 이용하여
  밑의 margin을 0px로 설정해준다.*/
  margin-bottom: 0px;
  position: relative;
  /* background-color: #f5f5f5; */
}

.clock-container .number {
  /* number 클래스 CSS*/
  position: absolute;
  z-index: 1;
  font-size: 26px;
}

/* 3, 6, 9, 12 숫자 위치 CSS*/
.clock-container #num3 {
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: 0px;
}

.clock-container #num6 {
  left: 0;
  right: 0;
  text-align: center;
  bottom: 0;
}

.clock-container #num9 {
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  left: 2px;
}

.clock-container #num12 {
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
}

.clock-container #dot {
  position: absolute;
  border: 1px solid black;
  width: 14px;
  height: 14px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  margin: auto;
  border-radius: 50%;
  z-index: 10;
}

/*초, 분, 시 바늘 CSS*/
.clock-container #second {
  position: absolute;
  width: 2px;
  height: 80px;
  background-color: red;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 130px;
  transform-origin: center bottom;
}

.clock-container #minute {
  position: absolute;
  width: 2px;
  height: 95px;
  background-color: black;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 130px;
  transform-origin: center bottom;
}

.clock-container #hour {
  position: absolute;
  width: 7px;
  height: 60px;
  background-color: black;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 130px;
  transform-origin: center bottom;
}
</style>