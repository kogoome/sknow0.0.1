<script>
  import mousetrap from 'svelte-use-mousetrap';
  import {contentFocus} from '$lib/layout/editor/keyContents.js'
  import { createEditor } from 'svelte-editorjs';

  const { editor, data, isReady } = createEditor();
</script>

<div use:mousetrap={[
  [['esc'], contentFocus],
]}></div>

<div class="contentRoot text-center">
  ⬇ 아래 클릭하고 입력 ⬇
  <div use:editor id="editor"/>
</div>