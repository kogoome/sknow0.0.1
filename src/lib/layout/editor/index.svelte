<script>
  import {page} from '$app/stores'
  import Theme from '$lib/featureComponent/theme-select.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import {manuIconClassName,openSidebar,resizer,searchFocus} from './keySidebar'
  import mousetrap from 'svelte-use-mousetrap';
  import Sortable from 'sortablejs';
  let container = null
  onMount(() => {
    themeChange(false)
    const tap = document.getElementById("tap")
    Sortable.create(tap, {
      ghostClass: 'bg-base-content',
      animation: 200,
    })
    

  })

</script>

<!-- 마우스트랩 -->
<div use:mousetrap={[
  [['ctrl+shift+f'], searchFocus],
  [['ctrl+shift+e'], openSidebar],
]}></div>


<div id="container" class="flex flex-row h-screen">
  <!-- 사이드바 -->
  <div id="sidebar" class="flex-none w-64 max-w-6xl bg-secondary-focus h-screen top-0 left-0 overflow-x-hidden transition-all duration-500">
    <div class="flex flex-col justify-start pl-1">
      <div class="text-2xl text-white pt-3 pb-3">
        {$page.stuff.user}'s<span class="text-orange-500">K</span>now
      </div>
      <!-- 서치바 -->
      <div class="relative z-0 w-full group drop-shadow-md mb-2">
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <input id="search" type="text" name="search" class="block pt-1 h-12 px-5 w-full bg-base-100 rounded-lg text-xl text-center bg-transparent border-0 border-b-4 border-warning appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
        <label for="search" class="absolute px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-error peer-placeholder-shown:scale-100 whitespace-nowrap peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-warning text-xl on:click={()=>document.getElementById('search').focus()}">
          SEARCH <kbd class="kbd kbd-sm">ctrl</kbd>+<kbd class="kbd kbd-sm">shift</kbd>+<kbd class="kbd kbd-sm">f</kbd>
        </label>
      </div>
      <div tabindex="0" class="collapse collapse-arrow">
        <div class="collapse-title bg-secondary text-center text-lg"> 목차 </div>
        <div class="collapse-content"> 
          <ul class="steps steps-vertical">
            <li class="step step-primary">Register</li>
            <li class="step step-primary">Choose plan</li>
            <li class="step">Purchase</li>
            <li class="step">Receive Product</li>
          </ul>
        </div>
      </div>
      <div tabindex="0" class="collapse collapse-arrow">
        <div class="collapse-title bg-secondary text-center text-lg"> 라이브러리 </div>
        <div class="collapse-content"> 
          <ul class="steps steps-vertical">
            <li class="step step-primary">Register</li>
            <li class="step step-primary">Choose plan</li>
            <li class="step">Purchase</li>
            <li class="step">Receive Product</li>
          </ul>
        </div>
      </div>
      <div tabindex="0" class="collapse collapse-arrow">
        <div class="collapse-title bg-secondary text-center text-lg"> 컨텐츠 </div>
        <div class="collapse-content"> 
          <ul class="steps steps-vertical">
            <li class="step step-primary">Register</li>
            <li class="step step-primary">Choose plan</li>
            <li class="step">Purchase</li>
            <li class="step">Receive Product</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
  <!-- 리사이져 -->
  <button id="resizer" class="flex-none bg-secondary-focus active:bg-primary-focus w-1 " style="cursor:col-resize" on:mousedown={resizer}></button>
  <div class="flex-none flex flex-row ">
  </div>

  <!-- 네비 & 컨텐츠 -->
  <div id="content" class="grow flex flex-col h-screen transition-all duration-500">
    <!-- 네비게이션 -->
    <div class="flex-none w-full h-auto bg-neutral flex flex-row">
      <!-- 네비 왼쪽 -->
      <div class="flex-none flex flex-row gap-1">
        <button type="button"  class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs  shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" on:click={openSidebar} >
          <i id="menuIcon" class={manuIconClassName}></i> 
          <div class="uppercase tooltip tooltip-primary tooltip-bottom to-violet-600 " data-tip=" ctrl+shift+e ">
            menu
          </div>
        </button>
        <button class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" >
          <a href="/">home</a>
        </button>
        <!-- 탭 들 -->
        <ul id="tap" class="flex flex-row gap-1">
          <li type="botton" class="bg-base-300 px-4 active:bg-base-100 hover:bg-base-100">first</li>
          <li type="botton" class="bg-base-300 px-4 active:bg-base-100 hover:bg-base-100">second</li>
          <li type="botton" class="bg-base-300 px-4 active:bg-base-100 hover:bg-base-100">third</li>
          <li type="botton" class="bg-base-300 px-4 active:bg-base-100 hover:bg-base-100">fourth</li>
        </ul>
      </div>
      <!-- 네비 중단 -->
      <div class="grow"></div>
      <!-- 네비 오른쪽 -->
      <div class="flex-none pr-3"> <Theme/> </div>
    </div>
    <!-- 컨텐츠 -->
    <div class="grow flex flex-row">
      <div class="flex-auto">
        <slot/> 
      </div>
      <!-- 목차보기 -->
      <!-- <div class="flex-none w-32 bg-base-200"></div> -->
    </div>
    <!-- <div class="flex-none h-5 w-full bg-neutral text-white text-sm">footer</div> -->
  </div>
</div>
