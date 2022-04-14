<script>
  import mousetrap from 'svelte-use-mousetrap';
  import {contentFocus} from '$lib/layout/editor/keyContents.js'

</script>

<div use:mousetrap={[
  [['esc'], contentFocus],
]}></div>

<div class="contentRoot">

  <input type="text" id="editor">

  
</div>