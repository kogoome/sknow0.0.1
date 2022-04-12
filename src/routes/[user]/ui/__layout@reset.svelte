<script context="module">
  export const load = async ({url, params})=>{
    const user = params.user
    const {origin, pathname, href} = url
  
    return {
      props:{
        origin,
        user,
      }
    }
  }
</script>

<script>
  import Theme from '$lib/featureComponent/theme-select.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  onMount(() => themeChange(false))
  export let user
  export let origin
  let drawerOpen = true
  let sidebarWidth = 256
  let manuIconClassName = "fa-solid fa-angles-left"
  const openSidebar = () => {
    if (drawerOpen) {
      document.getElementById("sidebar").style.width = "0";
      manuIconClassName = "fa-solid fa-bars"
    } else {
      document.getElementById("sidebar").style.width = `${sidebarWidth}px`
      manuIconClassName = "fa-solid fa-angles-left"
    }
    drawerOpen=!drawerOpen
  }
  const resize = (e)=>{
    sidebarWidth = sidebarWidth+e.movementX
    
    document.getElementById("sidebar").style.width = `${sidebarWidth}px`
  }
  const stopResize = (e)=>{
    document.getElementById("container").style.cursor = ""
    document.getElementById("sidebar").style.transition= "0.4s"
    document.getElementById("content").style.transition= "0.4s"
    document.removeEventListener("mousemove", resize, false)
    document.removeEventListener("mouseup", stopResize, false)
  }
  const resizer = (e)=>{
    document.getElementById("container").style.cursor = "col-resize"
    document.getElementById("sidebar").style.transition= "none"
    document.getElementById("content").style.transition= "none"
    document.addEventListener("mousemove", resize, false);
    document.addEventListener("mouseup", stopResize, false);
  }

</script>
<svelte:head>
  <title>{user}'sKnow</title>
</svelte:head>

<div id="container" class="flex flex-row h-screen">
  <!-- 사이드바 -->
  <div class="flex-none flex flex-row ">
    <div id="sidebar" class="flex-none w-64 max-w-6xl bg-secondary-focus h-screen top-0 left-0 overflow-x-hidden transition-all duration-500">
      <div class="m-10 block text-2xl">
        LOGO
      </div>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <!-- 리사이져 -->
    <button id="resizer" class="flex-none bg-secondary-focus active:bg-primary-focus w-1 " style="cursor:col-resize" on:mousedown={resizer}></button>
  </div>

  <!-- 네비 & 컨텐츠 -->
  <div id="content" class="grow flex flex-col h-screen transition-all duration-500">
    <!-- 네비게이션 -->
    <div class="flex-none first-letter:w-full h-auto bg-neutral flex flex-row ">
      <!-- 네비 왼쪽 -->
      <div class="flex-none">
        <button type="button"  class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg  transition duration-150 ease-in-out" on:click={openSidebar} >
          <i id="menuIcon" class={manuIconClassName}></i> menu
        </button>
        <button type="button" class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-focus active:shadow-lg transition duration-150 ease-in-out" >
          1
        </button>
        <button type="button" class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-focus active:shadow-lg transition duration-150 ease-in-out" >
          2
        </button>
        <button type="button" class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-focus active:shadow-lg transition duration-150 ease-in-out" >
          3
        </button>
        <button type="button" class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-focus active:shadow-lg transition duration-150 ease-in-out" >
          4
        </button>
      </div>
      <!-- 네비 중단 -->
      <div class="grow"></div>
      <!-- 네비 오른쪽 -->
      <div class="flex-none pr-3"> <Theme/> </div>
    </div>
    <!-- 컨텐츠 -->
    <div class="grow flex flex-row">
      <!-- 목차보기 -->
      <div class="flex-none w-32 bg-base-200 z-10"></div>
      <div class="flex-auto overflow-y-auto">
        <slot/> 
      </div>
    </div>
    <div class="flex-none h-8 w-full bg-black text-white">footer</div>
  </div>
</div>




<style>
/* The navigation menu links */
a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
}
a:hover {
  color: #f1f1f1;
}
/* 높이 450미만 미디어쿼리 */
@media screen and (max-height: 450px) {
  a {font-size: 18px;}
}
</style>