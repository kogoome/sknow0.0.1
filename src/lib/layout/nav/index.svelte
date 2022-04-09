<script>
  import {page} from '$app/stores'

  const username = $page.stuff.loginId || ""
  const nav = [
      { title: `${username}'sKnow`, link: `/${username}` },
      { title: 'School', link: '/school' },
      { title: 'Agora', link: '/agora' },
      { title: 'Team', link: '/team' },
      { title: 'ReleaseNote', link: '/release' },
      { title: 'Time', link: '/time' },
    ]
      
  let link 
  $: link=$page.url.pathname

  import Acount from './acount.svelte'
</script>

<div class="navbar">
  <div class="navbar-start">
  <!-- --시작------------------------------------------ -->
    <a class="text-2xl font-bold p-3" href="/">s<span class="text-orange-400">K</span>now</a>
  </div>
  <div class="navbar-center hidden lg:flex">
  <!-- --가운데------------------------------------------ -->
    <ul class="flex gap-7 p-0">
			{#each nav as item}
				<li class="hover:text-[#ff9abc] transition-all duration-500">
					<a class:active={link === item.link} class="text-xl" href={item.link}>{item.title}</a>
				</li>
			{/each}
    </ul>
  </div>
  <div class="navbar-end pr-3">
  <!-- --마지막------------------------------------------ -->
    <Acount/>
  </div>
</div>

<style>
  .active {
    text-decoration: underline;
		font-size: 1.25rem;
		font-weight: bold;
    color: #ff9abc;
		/* transition: all 0.5s; */
  }
</style>