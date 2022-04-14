<script>
import Sortable from 'sortablejs';
import { onMount } from 'svelte'
let accordionList = null
onMount(() => {
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
  const title = accordionList.querySelectorAll('.accordion')
  title.forEach(titleElement=>{
    titleElement.addEventListener('click', accordionOpen)
  })
})
const accordionOpen = (e)=>{
  const title = e.target
  const icon = title.firstChild
  const panel = title.nextElementSibling
  title.classList.toggle('active')
  if (panel.style.maxHeight){
    icon.classList.remove('fa-angle-down')
    icon.classList.add('fa-angle-right')
    panel.style.maxHeight = null
  } else {
    icon.classList.remove('fa-angle-right')
    icon.classList.add('fa-angle-down')
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
}
</script>


<div bind:this={accordionList} class="flex flex-row">
  <div class="flex-none">
    <div class="accordion text-white px-2
    <!-- 배경색 -->
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
    <!-- 배경색 -->
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
