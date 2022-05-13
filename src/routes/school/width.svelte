<script>
	import { onMount } from 'svelte';
  import {throttle} from 'lodash-es';
	
  let searchBar;
  $: innerWidth =0
	onMount(() => {

    innerWidth = window.innerWidth;
		window.addEventListener('resize', onResize);
		return () => {
      window.removeEventListener('resize', onResize);
      console.log("event removed")
    }
	});

  const onResize = throttle(()=>{
    innerWidth = window.innerWidth;
    console.log(innerWidth);
  }, 300)
	
</script>

<div>
	Width: {innerWidth}
</div>