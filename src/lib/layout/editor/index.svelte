<script>
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import Theme from '$lib/featureComponent/theme-select.svelte'
  import { openSidebar,resizer } from './keySidebar'
  import mousetrap from 'svelte-use-mousetrap'
  import Sortable from 'sortablejs'
  import { accordionOpen } from './accordion'
  import { Motion } from "svelte-motion"
  let accordionList = null

  // 유져 페이지 진입시 파라매터로 유져 정보 보여주는데, 세션키값으로 인증절차 필요. 구현안됨
  onMount(() => {
    themeChange(false)
    // nav tap dnd
    const tap = document.getElementById("tap")
    Sortable.create(tap, {
      ghostClass: 'bg-base-content',
      animation: 200,
    })
    // sidebar list dnd
    const title = accordionList.querySelectorAll('.accordion')
    title.forEach(titleElement=> titleElement.addEventListener('click', accordionOpen))
    const ul = accordionList.querySelectorAll('.accordion-content')
    ul.forEach(ulElement=>{
      Sortable.create(ulElement, {
        group: 'items',
        animation: 100,
        ghostClass: 'bg-secondary',
        touchStartThreshold: 10,
        sort:true,
      })
    })
  })
  // 1. 태그속성으로 데이터 수신
  export let user = "unknown" // 받는값이 없으면 초기값으로 대체
  // 2. $page.stuff.user 페이지데이터로 수신

  // @대분류 #노드 $엣지 미구현
  // #이차방정식 #근 $근의공식
  $: keyword ="수학 이차방정식 근의공식"
  $: searchModal = false
  $: unregisteredNodes = []
  $: registeredNodes = {}


  // 키코드 함수
  const pressSearchInput= (e)=>{
    if(e.keyCode==13) {
      searchModal = true
      const focus = setTimeout(()=>{ 
        document.getElementById("searchModal").focus() 
        clearTimeout(focus)
      },100)
      searchNodes()
    } else if (e.keyCode==27 || e.keyCode==17) {
      e.target.blur()
    } 
  }
  const pressModalInput= (e)=>{
    if(e.keyCode==27) { // esc 모달 닫기
      searchModal = false
    } else if (e.keyCode==17) { // ctrl 포커싱 버리기
      document.getElementById("searchModal").blur()
    } else if (e.keyCode==13) { // enter 검색
      searchNodes()
    }
  }
  // 검색함수
  const searchNodes = async ()=>{
    const {result} = await fetch(`/api/document/node?search_node=${keyword.split(' ').join('+')}` ,{
			method:"GET",
      // body:JSON.stringify({keyword}),
		}).then(res=>res.json()).catch(err=>alert(err))
    unregisteredNodes = result.unregisteredNodes
    registeredNodes= result.registeredNodes
  }
  const registNode = async (e)=>{
    const node = e.target.previousElementSibling.text
    await fetch('/api/document/regist_node' ,{
      method:"POST",
      body:""
    }).then(res=>res.json()).catch(err=>alert(err))
  }
</script>

<div use:mousetrap={[
  [['ctrl+shift+f'], ()=>{
    searchModal = !searchModal;
    const focus = setTimeout(()=>{
      if(searchModal) document.getElementById("searchModal").focus()
      clearTimeout(focus)
    },100)
  }],
  [['ctrl+shift+e'], openSidebar],
  [['esc'], ()=>{searchModal = false}],
]}></div>

<style> 
  #search { border-width: 1px; } 
  #search+label { top:1px; }
</style>

<div id="container" class="flex flex-row h-screen transition-all duration-500">
  <!-- 사이드바 그룹 -->
  <div id="sidebarBox" class="flex-none flex flex-row w-64 max-w-6xl relative transition-all duration-500 select-none z-20">
    <!-- 사이드바 -->
    <div id="sidebar" class="flex-none w-64 bg-neutral h-screen top-0 left-0 overflow-x-hidden transition-all duration-500 flex flex-col justify-start max-w-6xl">
      <!-- 사이드바 로고 -->
      <div class="text-2xl text-white p-3 mt-5 text-center ">
        <a href="/{user}">
          {user}'s<span class="text-orange-500">K</span>now
          
        </a>
      </div>
      <!-- 서치바 -->
      <Motion whileHover={{ scale: 1.1, transition: { duration: .3 } }} let:motion>
      <div use:motion class="relative z-0 group mb-5 ml-5 mr-5 mt-5">
        <input id="search" bind:value={keyword} type="text" name="search_node" class="block h-8 px-5 w-full rounded-2xl  border-gray-300 text-md text-gray-300 text-center bg-transparent appearance-none focus:outline-none focus:ring-0 peer " placeholder=" " on:keydown={pressSearchInput}/>
        <label for="search" class="absolute peer-focus:bg-secondary-focus px-2 duration-300 rounded-3xl transform -translate-y-7 scale-75 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 whitespace-nowrap peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 text-gray-300 text-lg" on:click={()=>searchModal=true}>
          <div class="tooltip tooltip-accent tooltip-right to-violet-600 " data-tip="Ctrl+<Shift>+F">
            Search Nodes
          </div>
        </label>
      </div>
      </Motion>
      <!-- 목차 -->
      <div bind:this={accordionList} class="flex flex-col justify-start">
        <div class="">
          <div class="accordion text-white px-5
          bg-neutral hover:bg-secondary flex flex-row justify-start items-center 
          transition ease-in-out">
            <i class="fa-solid fa-caret-right pointer-events-none w-3"></i>
            <span class="grow pointer-events-none pl-1">node</span>
            <a href="/{user}/registNode" class=""><i class="fa-solid fa-circle-plus text-sm"></i></a>
          </div>
          <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
            <!-- 
              카테고리 클릭시 node 페이지로 이동하고, []이용해서 해당 이름으로 정보 띄울것, 
            -->
            <li class="active:bg-secondary px-6">카테고리1</li>
          </ul>
        </div>
        <div class="">
          <div class="accordion text-white px-5
          bg-neutral hover:bg-secondary flex flex-row justify-start items-center
          transition ease-in-out ">
            <i class="fa-solid fa-caret-right pointer-events-none w-3"></i>
            <span class="pointer-events-none pl-1">library</span>
          </div>
          <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
            <li class="active:bg-secondary px-6">컨텐츠1</li>
            <li class="active:bg-secondary px-6">컨텐츠2</li>
            <li class="active:bg-secondary px-6">컨텐츠3</li>
            <li class="active:bg-secondary px-6">컨텐츠4</li>
          </ul>
        </div>
        <div class="">
          <div class="accordion text-white px-5
          bg-neutral hover:bg-secondary flex flex-row justify-start items-center
          transition ease-in-out ">
            <i class="fa-solid fa-caret-right pointer-events-none w-3"></i>
            <span class="pointer-events-none pl-1">document</span>
          </div>
          <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
            <li class="active:bg-secondary px-6">컨텐츠1</li>
            <li class="active:bg-secondary px-6">컨텐츠2</li>
            <li class="active:bg-secondary px-6">컨텐츠3</li>
            <li class="active:bg-secondary px-6">컨텐츠4</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 리사이져 -->
    <button id="resizer" class="absolute active:bg-secondary-focus w-1 h-full z-10 right-0" style="cursor:col-resize" on:mousedown={resizer}></button>
  </div>
  <!-- 네비 & 컨텐츠 -->
  <div id="content" class="grow flex flex-col h-screen transition-all duration-500 z-20">
    <!-- 네비게이션 -->
    <div class="flex-none w-full h-auto bg-neutral flex flex-row select-none z-30">
      <!-- 네비 왼쪽 메뉴 홈 탭 -->
      <div class="flex-none flex flex-row gap-1">
        <!-- 메뉴 -->
        <button type="button"  class="px-2 h-full py-1 bg-neutral text-white font-medium text-xs  shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" on:click={openSidebar} >
          <div class="tooltip tooltip-accent tooltip-bottom to-violet-600 " data-tip="Ctrl+<Shift>+E">
            <i id="menuIcon" class="fa-solid fa-angles-left"></i> 
            MENU
          </div>
        </button>
        <!-- 홈 -->
        <button class="px-5 h-full py-1 bg-secondary-focus text-white font-medium text-xs uppercase shadow-md hover:bg-secondary hover:shadow-lg transition duration-150 ease-in-out active:bg-error" >
          <a href="/">home</a>
        </button>
        <!-- 탭 들 -->
        <ul id="tap" class="flex flex-row gap-1">
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">
            <a href="/{user}/default">default</a>
          </li>
          <li type="botton" class="bg-base-300 px-4 rounded-t-md active:bg-base-100 hover:bg-base-100">
            <a href="/{user}/releaseNote">releaseNote</a>
          </li>
        </ul>
      </div>
      <!-- 네비 중단 -->
      <div class="grow"></div>
      <!-- 네비 오른쪽 -->
      <div class="flex-none pr-3 "> <Theme/> </div>
    </div>
    <!-- 컨텐츠 -->
    <div class="grow flex flex-row relative">
      <div class="flex-auto">
        <!-- 에디터 태그 사이 슬롯이 여기 -->
        <slot/> 
        <!-- 서치 모달창 -->
        {#if searchModal}
          <!-- 모달 뒷배경 -->
          <div class="modalbg w-full h-full absolute z-20 left-0 top-0 flex flex-row justify-center transition-all" on:click|self={()=>searchModal=false}>
            <!-- 모달 안배경 -->
            <div class="bg-base-100 w-3/5 h-4/5 rounded-2xl py-3 m-auto flex flex-col drop-shadow-lg">
              <!-- 모달 헤더 -->
              <header class="flex-none flex flex-row gap-3 px-5 pb-3 border-b-2 border-secondary items-center">
                <i class="fa-solid fa-magnifying-glass hover:text-secondary m-auto" on:click={searchNodes}></i>
                <input id="searchModal" class="grow text-xl bg-base-100 focus:outline-none" bind:value={keyword} placeholder="search nodes" on:keydown={pressModalInput} name="search_node">
                <div><kbd class="kbd hover:shadow-md" on:click={()=>searchModal=false}>esc</kbd></div>
              </header>
              <!-- 모달 컨텐츠 -->
              <div class="grow overflow-y-auto p-5">


                <fieldset class="p-3 my-2 rounded-lg bg-base-100 drop-shadow-sm border-2">
                  <legend>등록되지 않은 노드</legend>
                  <!--
                  폼데이터 없에고 함수값으로 처리할것. 
                  리턴값 후처리해서 노드리스트에 추가하게 할것.
                  페이지 진입시 세션 확인하고 url파람과 아이디일치시, userdoc 데이터 읽어와서 사이드바 데이터에 추가 
                  -->
                  <form action="/api/document/node" class="flex flex-row gap-2 items-center" method="post" target="_blank">
                    {#if unregisteredNodes.length>0}
                      {#each unregisteredNodes as node }
                        <label>
                          <input type="checkbox" class="peer hidden" name="regist_node" value={node}>
                          <div class="peer-checked:bg-base-200 rounded-md p-1"> {node} </div>
                        </label>
                      {/each}
                      <div class="grow"></div>
                      <input type="submit" class="btn btn-ghost btn-sm h-5 hover:drop-shadow-lg" value="등록" on:click={()=>{window.location.href =`/${user}`}}>
                    {/if}
                  </form>
                </fieldset>


                <fieldset class="flex flex-row gap-2 p-3 my-2 rounded-lg bg-base-100 items-center drop-shadow-sm border-2">
                  <legend>등록되지 않은 노드</legend>
                  {#if unregisteredNodes.length>0}
                    {#each unregisteredNodes as node }
                      <label>
                        <input type="checkbox" class="peer hidden">
                        <div class="peer-checked:bg-base-200 rounded-md p-1"> {node} </div>
                      </label>
                    {/each}
                    <div class="grow"></div>
                    <button class="btn btn-ghost btn-sm h-5 hover:drop-shadow-lg">등록</button>
                  {/if}
                </fieldset>
                <fieldset class="flex flex-row gap-2 p-3 my-2 rounded-lg bg-base-100 items-center drop-shadow-sm border-2">
                  <legend>등록되지 않은 노드</legend>
                  {#if unregisteredNodes.length>0}
                    {#each unregisteredNodes as node }
                      <label>
                        <input type="checkbox" class="peer hidden">
                        <div class="peer-checked:bg-base-200 rounded-md p-1"> {node} </div>
                      </label>
                    {/each}
                    <div class="grow"></div>
                    <button class="btn btn-ghost btn-sm h-5 hover:drop-shadow-lg">등록</button>
                  {/if}
                </fieldset>

                






              </div>
              <footer class="flex-none px-5 text-2xl">footer</footer>
            </div>
          </div>
        {/if}
      </div>
      <!-- 컨텐츠 목차 영역 -->
      <!-- <div class="flex-none w-32 bg-base-200"></div> -->
      
    </div>
    <!-- <div class="flex-none h-5 w-full bg-neutral text-white text-sm">footer</div> -->
    
  </div>
</div>
