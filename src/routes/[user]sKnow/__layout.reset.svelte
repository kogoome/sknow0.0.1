<script context="module">
  export const load = async ({url, params})=>{
    const user = params.user
    const paths = url.pathname.split("/").filter(path => path.length>0)
    const origin = url.origin
  
    return {
      props:{
        paths,
        origin,
        user
      }
    }
  }
</script>

<script>
  export let paths
  export let origin
  export let user
</script>

<svelte:head>
  <title>{user}</title>
</svelte:head>


<div class="navbar bg-base-100 drop-shadow-xl">
  <div class="flex-none">
    <label for="my-drawer" class="btn btn-ghost drawer-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div>
  <div class="flex-1">
    <button class="btn btn-ghost normal-case text-xl">
      <a href="{origin}">
        <span class="text-orange-400 text-2xl">{user}</span>'sKnow
      </a>
    </button>
    {#each paths as item}
      <button class="btn btn-ghost">
        <a href="/{item}">/{item}</a>
      </button>
    {/each}
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>


<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
      
    <slot/>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      
    </ul>
  </div>
</div>