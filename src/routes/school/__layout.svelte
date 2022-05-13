<script>
  import { onDestroy, onMount } from 'svelte'
  import {state} from '../../stores.js'
  import {fly, fade, slide} from 'svelte/transition'
  $: stateValue = 0
  // 0으로 초기화
  const updateState = ()=>{
    state.update(n => n+1)
  }
  const setState = (n)=>{
    state.set(Number(n))
  }
  const keypress = (e)=>{
    if(e.keyCode == 13) setState(e.target.value)
  }
  const unsubscribe = state.subscribe(n => stateValue = n)
  onDestroy(unsubscribe)

  $: visible=false
	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>


<button on:click={()=>visible=!visible} class="btn"> visible</button>
{#if visible}
  <div in:typewriter out:slide > this is typing transition </div>
  <ul in:slide out:slide>
    <li>aa</li>
    <li>aa</li>
    <li>aa</li>
    <li>aa</li>
  </ul>
  <div in:fly={{y:100, duration:2000}} out:slide>
    레이아웃
    <div class="text-lg text-red-400">{stateValue}</div>
    <input type="number" on:keydown={keypress} placeholder="숫자 셋">
    <button on:click={updateState} class="btn"> +1 버튼</button>
  </div>
{/if}


<slot />