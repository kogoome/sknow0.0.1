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
  // export let paths
  export let origin
  export let user
</script>

<svelte:head>
  <title>{user}</title>
</svelte:head>

<div class="navbar">
  <label for="my-drawer" class="btn btn-ghost drawer-button text-2xl">
    <i class="fa-solid fa-bars"></i>
  </label>
  <div class="flex-1">
    <button class="btn btn-ghost normal-case text-xl leading-loose">
      <a href="{origin}/{user}">
        <span class="text-orange-400 text-2xl">{user}</span>'sKnow
      </a>
    </button>

    <div class="text-sm breadcrumbs top-0">
      <ul>
        <li>
          <button class="btn btn-ghost normal-case text-xl leading-loose flex justify-center">
            <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
          </button>
        </li> 
        <li>
          <button class="btn btn-ghost normal-case text-xl leading-loose flex justify-center">
            <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
          </button>
        </li>
        <li>
          <button class="btn btn-ghost normal-case text-xl leading-loose flex justify-center">
            <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="flex-none pr-3">
    <button class="btn btn-ghost normal-case text-xl leading-loose">
      <a href="{origin}">
        <i class="fa-solid fa-house"></i>
      </a>
    </button>
  </div>
</div>


<div class="drawer" style="cursor:col-resize">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
      
    <slot/>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><input type="text" placeholder="search" class="bg-purple-100"></li>
      <li><hr></li>
      <li><a href="{origin}/{user}/tutorial">Tutorial</a></li>
      <li><a href="{origin}/{user}/library">Library</a></li>
      <li>서랍기능 클릭하면 아래 리스트 출력</li>
      <li>list</li>
      <li>list</li>
      <li><a href="{origin}/{user}/write">Docs</a></li>
      <li>서랍기능 클릭하면 아래 리스트 출력</li>
      <li>public list</li>
      <li> list</li>
      <li> list</li>
      <li>private list</li>
      <li> list</li>

      
    </ul>
  </div>
</div>


