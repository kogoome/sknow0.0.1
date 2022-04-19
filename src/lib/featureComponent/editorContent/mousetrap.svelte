<script>
import mousetrap from 'svelte-use-mousetrap';

// run on 'command+q', 'ctrl+q'
const fn1 = (e) => console.log('fn1', e);

// run on 'shift+q'
const fn2 = (e) => console.log('fn2', e);
// run on 'shift+q'
const fn3 = (e) => console.log('fn3', e);

// 잘 되는거 확인, 이벤트는 바디 전역 돔
</script>

<div use:mousetrap={[
  [['ctrl+shift+q'], fn1],
  ['q', [fn3]],
  ['w', [fn2]],
]}></div>

<div class="contentRoot">

  마우스 트랩 예제
  
</div>