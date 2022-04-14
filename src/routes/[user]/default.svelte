<script>
  import mousetrap from 'svelte-use-mousetrap';
  import {contentFocus} from '$lib/layout/editor/keyContents.js'

</script>

<!-- 단축키 -->
<div use:mousetrap={[
  [['esc'], contentFocus],
]}></div>

<div class="contentRoot">

  <div class="w-full h-full bg-slate-400">
  </div>
  <div class="w-full h-full bg-slate-400">
  </div>

  
</div>