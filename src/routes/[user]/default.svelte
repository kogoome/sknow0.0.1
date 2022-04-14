<script>
  import mousetrap from 'svelte-use-mousetrap';
  import {contentFocus} from '$lib/layout/editor/keyContents.js'
  import Timer from '$lib/featureComponent/timer.svelte'
</script>

<!-- 단축키 -->
<div use:mousetrap={[
  [['esc'], contentFocus],
]}></div>

<div class="contentRoot">
  <Timer/>


  
</div>