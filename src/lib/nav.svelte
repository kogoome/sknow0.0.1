<script>
  // 네비 메뉴 자동 가져오기(사이드바 만들때 많이 쓴다고 함)
  const pathArr = Object.keys(import.meta.glob("../routes/**"))
	const nav = pathArr
		.filter(path => path.includes(".svelte") && !path.includes("__"))
		.map(path => {
			const cleanPath = path.slice(9).replace(".svelte", "")
			const title =
				cleanPath.includes("/index") ?
					cleanPath.slice(1).replace("/index", "")
					: cleanPath.slice(1)
			const link =
				cleanPath.includes("/index") ?
					cleanPath == "/index" ?
						"/"
						: cleanPath.replace("/index", "")
					: cleanPath.replace("index", "")
			return { title, link }
		})
	import {page} from '$app/stores'

  let link 
  $: link=$page.url.pathname
	console.log(nav)
</script>

<!-- <nav class="">
	<ul class="flex list-none justify-center gap-6 pb-7 pt-7">
    {#each nav as item}
      <li class="hover:text-[#ff9abc] transition-all duration-500">
        <a class:active={link === item.link} class="text-2xl" href={item.link}>{item.title}</a>
      </li>
		{/each}
  </ul>
</nav> -->


<div class="navbar">
  <div class="navbar-start">
    <a class="text-2xl font-bold p-3" href="/">s<span class="text-orange-400">K</span>now</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="flex gap-7 p-0">
			{#each nav as item}
				<li class="hover:text-[#ff9abc] transition-all duration-500">
					<a class:active={link === item.link} class="text-2xl" href={item.link}>{item.title}</a>
				</li>
			{/each}
    </ul>
  </div>
  <div class="navbar-end">
		<div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<style>
  .active {
    text-decoration: underline;
		font-size: 1.5rem;
		font-weight: bold;
    color: #ff9abc;
		/* transition: all 0.5s; */
  }
</style>