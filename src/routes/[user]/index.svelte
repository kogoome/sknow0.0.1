<script>
  import mousetrap from 'svelte-use-mousetrap';
  import {contentFocus} from '$lib/layout/editor/keyContents.js'

</script>
<style>.hello{height: 96vh; overflow-y: scroll;}</style>

<div use:mousetrap={[
  [['esc'], contentFocus],
]}></div>

<div class="hello flex justify-center">
  <div class="flex flex-col justify-center">
    <div id="editor" contenteditable placeholder='메시지를 입력해주세요'></div>
    <!-- tooltip -->
    <div class="tooltip tooltip-primary tooltip-bottom to-violet-600" data-tip="
    생각을 모아보세요!
    ">
      <h1 class="text-3xl font-semibold">someth<span class="text-orange-400">i</span>nk</h1>
    </div>
    
  </div>
</div>

