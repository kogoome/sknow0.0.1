<script>
  import { page } from '$app/stores'
  import Theme from '$lib/featureComponent/theme-select.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import { openSidebar,resizer,searchFocus } from './keySidebar'
  import mousetrap from 'svelte-use-mousetrap';
  import Sortable from 'sortablejs';
  
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

<!-- 툴팁
<div class="tooltip tooltip-accent tooltip-top to-violet-600 " data-tip="Ctrl+<Shift>+F">
  Search
</div> -->

<style> 
  #search { border-width: 1px; } 
  #search+label { top:1px; }
</style>

<div id="container" class="flex flex-row h-screen">
  <!-- 사이드바 -->
  <div id="sidebarBox" class="flex-none flex flex-row w-64 max-w-6xl relative transition-all duration-500">
    <div id="sidebar" class="flex-none w-64 bg-neutral h-screen top-0 left-0 overflow-x-hidden transition-all duration-500">
      <div class="flex flex-col justify-start">
        <div class="text-2xl text-white p-3 mt-5 text-center ">
          {$page.stuff.user}'s<span class="text-orange-500">K</span>now
        </div>
        <!-- 서치바 -->
        <div class="relative z-0 group mb-5 ml-5 mr-5 mt-5">
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <input id="search" type="text" name="search" class="block h-8 px-5 w-full rounded-2xl  border-gray-300 text-md text-gray-300 text-center bg-transparent appearance-none focus:outline-none focus:ring-0 peer " placeholder=" " required />
          <label for="search" class="absolute peer-focus:bg-secondary-focus px-2 duration-300 rounded-3xl transform -translate-y-7 scale-75 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 whitespace-nowrap peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 text-gray-300 text-lg on:click={()=>document.getElementById('search').focus()}">
            <div class="tooltip tooltip-accent tooltip-right to-violet-600 " data-tip="Ctrl+<Shift>+F">
              Search
            </div>
          </label>
        </div>
        <!-- 목차 -->
        <button class="accordion text-white active:bg-secondary-content hover:bg-secondary transition ease-in-out">Section 1</button>
        <div class="panel text-white active:bg-secondary">
          <p>Lorem ipsum...</p>
        </div>
        <div tabindex="0" class="collapse whitespace-nowrap">
          <div class="text-base-100 bg-slate-600 px-3"> 목차  </div>
          <div class="collapse-content"> 
            <ul class="steps steps-vertical">
              <li class="step step-primary">Register</li>
              <li class="step step-primary">Choose plan</li>
              <li class="step">Purchase</li>
              <li class="step">Receive Product</li>
  
            </ul>
          </div>
        </div>
        <div tabindex="0" class="collapse group whitespace-nowrap">
          <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
            Focus me to see content
          </div>
          <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </div>
    <button id="resizer" class="absolute active:bg-secondary-focus w-1 h-full z-10 right-0" style="cursor:col-resize" on:mousedown={resizer}></button>
  </div>
  <!-- 리사이져 -->
  


  <!-- 네비 & 컨텐츠 -->
  <div id="content" class="grow flex flex-col h-screen transition-all duration-500">
    <!-- 네비게이션 -->
    <div class="flex-none w-full h-auto bg-neutral flex flex-row">
      <!-- 네비 왼쪽 -->
      <div class="flex-none flex flex-row gap-1">
        <button type="button"  class="px-2 h-full py-1 bg-neutral text-white font-medium text-xs  shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" on:click={openSidebar} >
          <div class="tooltip tooltip-accent tooltip-bottom to-violet-600 " data-tip="Ctrl+<Shift>+E">
            <i id="menuIcon" class="fa-solid fa-angles-left"></i> 
            MENU
          </div>
        </button>
        <button class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" >
          <a href="/">home</a>
        </button>
        <!-- 탭 들 -->
        <ul id="tap" class="flex flex-row gap-1">
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">first</li>
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">second</li>
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">third</li>
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">fourth</li>
        </ul>
      </div>
      <!-- 네비 중단 -->
      <div class="grow"></div>
      <!-- 네비 오른쪽 -->
      <div class="flex-none pr-3 "> <Theme/> </div>
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
