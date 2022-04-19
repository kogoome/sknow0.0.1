<script>
import Sortable from 'sortablejs';
import { onMount } from 'svelte'
import {accordionOpen} from '$lib/layout/editor/accordion.js'
let accordionList = null
onMount(() => {
  const title = accordionList.querySelectorAll('.accordion')
  title.forEach(titleElement=>titleElement.addEventListener('click', accordionOpen))
  const ul = accordionList.querySelectorAll('.accordion-content')
  ul.forEach(ulElement=>{
    Sortable.create(ulElement, {
      group: 'items',
      animation: 100,
      ghostClass: 'bg-secondary',
      touchStartThreshold: 10,
      sort:true,
    })
  })
})

</script>

<!-- 다른곳으로 리스크 이동시 길이가 고정되는 부작용이 있다. -->
<div bind:this={accordionList} class="flex flex-cor">
  <div class="flex-none">
    <div class="accordion text-white px-2
    bg-neutral active:bg-secondary-content hover:bg-secondary 
    transition ease-in-out ">
      <i class="fa-solid fa-angle-right pointer-events-none"></i>
      <span class="pointer-events-none">타이틀</span>
    </div>
    <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
      <li class="active:bg-secondary">컨텐츠1</li>
      <li class="active:bg-secondary">컨텐츠2</li>
      <li class="active:bg-secondary">컨텐츠3</li>
      <li class="active:bg-secondary">컨텐츠4</li>
    </ul>
  </div>
  <div class="flex-none">
    <div class="accordion text-white px-2
    bg-neutral active:bg-secondary-content hover:bg-secondary 
    transition ease-in-out ">
      <i class="fa-solid fa-angle-right pointer-events-none"></i>
      <span class="pointer-events-none">타이틀</span>
    </div>
    <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
      <li class="active:bg-secondary">컨텐츠1</li>
      <li class="active:bg-secondary">컨텐츠2</li>
      <li class="active:bg-secondary">컨텐츠3</li>
      <li class="active:bg-secondary">컨텐츠4</li>
    </ul>
  </div>
  <div class="flex-none">
    <div class="accordion text-white px-2
    bg-neutral active:bg-secondary-content hover:bg-secondary 
    transition ease-in-out ">
      <i class="fa-solid fa-angle-right pointer-events-none"></i>
      <span class="pointer-events-none">타이틀</span>
    </div>
    <ul class="accordion-content overflow-hidden max-h-0 transition-all duration-300">
      <li class="active:bg-secondary">컨텐츠1</li>
      <li class="active:bg-secondary">컨텐츠2</li>
      <li class="active:bg-secondary">컨텐츠3</li>
      <li class="active:bg-secondary">컨텐츠4</li>
    </ul>
  </div>
</div>
