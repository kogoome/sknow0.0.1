<script>
  // import mousetrap from 'svelte-use-mousetrap';
  // import {contentFocus} from '$lib/layout/editor/keyContents.js'
  import {page} from '$app/stores'
</script>
<!-- <div use:mousetrap={[
  [['esc'], contentFocus],
]}></div> -->

<div class="contentRoot flex justify-center">
  <div class="flex flex-col justify-center">
    <div class="tooltip tooltip-primary tooltip-bottom to-violet-600" data-tip=" 생각을 모아보세요! ">
      <h1 class="text-3xl font-semibold">hello '<span class="text-orange-400">{$page.stuff.user}</span>'</h1>
    </div>
  </div>
</div>

