<script>
  import {onMount, onDestroy, tick} from "svelte"

  let month, day, hour, minute, second = 0
  let timeUpdate = null

  const getTimee = ()=>{
    let now = new Date()
    return now
  }
  const updateTime = (date)=>{
    month = date.getMonth()
    day = date.getDate()
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()
  }
  // 목표시간 + 고정된 현재시간 - 가져오는 현재시간 = 남은 목표시간
  const goalTime = ()=>{
    const now = getTimee()
    const goal = now.getTime()+ 600000 +2000
    return goal
  }
  const leftTime = () => {
    const goal = goalTime()
    hour=0, minute=0, second=0
    clearInterval(timeUpdate)
    timeUpdate=setInterval(()=>{
      let left = goal - getTimee().getTime()
      hour = Math.floor(left/3600000)
      minute = Math.floor(left/60000) - (hour*60)
      second = Math.floor(left/1000) - (hour*3600) - (minute*60)
    }, 1000)
  }
  const currentTime = ()=>{
    clearInterval(timeUpdate)
    timeUpdate=setInterval(()=>{
      updateTime(getTimee())
      tick()
    }, 1000)
  }
  onMount(async()=>{
    timeUpdate = setInterval(()=>{
      updateTime(getTimee())
      tick()
    }, 1000)
  })
  onDestroy(()=>{
    clearInterval(timeUpdate)
  })
</script>
<style>
  .timer { height: 75vh; width: 100vw; transition: all 0.5s;}
</style>
<div class="timer flex justify-center h-full">
  <!-- 가로 플렉스 공간 채우기 ㄴㄴ -->
  <div class="flex flex-col justify-center h-full" >
    <!-- 세로 플렉스 공간 채우기 ㅇㅋ-->
    <div class="pb-3">
      <button class="btn btn-ghost btn-primary" on:click={currentTime}>현재시간</button>
      <button class="btn btn-ghost btn-secondary" on:click={leftTime}>10분타이머</button>
    </div>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content drop-shadow-lg">
        <span class="countdown font-mono text-5xl text-slate-500">
          <span style="--value:{month};"></span>
        </span>
        month
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content drop-shadow-lg">
        <span class="countdown font-mono text-5xl text-slate-500">
          <span style="--value:{day};"></span>
        </span>
        day
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content drop-shadow-lg">
        <span class="countdown font-mono text-5xl">
          <span style="--value:{hour};"></span>
        </span>
        hour
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content drop-shadow-lg">
        <span class="countdown font-mono text-5xl">
          <span style="--value:{minute};"></span>
        </span>
        min
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content drop-shadow-lg">
        <span class="countdown font-mono text-5xl">
          <span style="--value:{second};"></span>
        </span>
        sec
      </div>
    </div>
  </div>
</div>

