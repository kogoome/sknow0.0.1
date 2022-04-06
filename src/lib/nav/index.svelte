<script>
  const username = '닉네임'
  const nav = [
      { title: `${username}'sKnow`, link: `/${username}` },
      { title: 'School', link: '/school' },
      { title: 'Agora', link: '/agora' },
      { title: 'Team', link: '/team' },
      { title: 'Roadmap', link: '/roadmap' },
      { title: 'Time', link: '/time' },
    ]
      
  import {page} from '$app/stores'
  let link 
  $: link=$page.url.pathname

  import Signup from '../signup.svelte'
  import Signin from './signin.svelte'
  import Profile from './profile.svelte'
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
  <!-- --시작------------------------------------------ -->
    <a class="text-2xl font-bold p-3" href="/">s<span class="text-orange-400">K</span>now</a>
  </div>
  <div class="navbar-center hidden lg:flex">
  <!-- --가운데------------------------------------------ -->
    <ul class="flex gap-7 p-0">
			{#each nav as item}
				<li class="hover:text-[#ff9abc] transition-all duration-500">
					<a class:active={link === item.link} class="text-2xl" href={item.link}>{item.title}</a>
				</li>
			{/each}
    </ul>
  </div>
  <div class="navbar-end pr-3">
  <!-- --마지막------------------------------------------ -->
    <Signin />
    <Profile />
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