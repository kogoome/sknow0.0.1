<script>
import Sortable from 'sortablejs';
import { onMount } from 'svelte'
let root
onMount(() => {
  const el = root.querySelector('#items')
  let sortable = Sortable.create(el, {
    group: 'items',
    animation: 100,
    ghostClass: 'bg-secondary',
    touchStartThreshold: 10,
  })
})
</script>
<style>.hello{height: 96vh; overflow-y: scroll;}</style>

<div class="hello"  bind:this="{root}">
  <ul id="items" class="text-lg transition flex flex-col w-1/3" >
    <li class="bg-slate-100 text-center py-1">item 1</li>
    <li class="bg-slate-100 text-center py-1">item 2</li>
    <li class="bg-slate-100 text-center py-1">item 3</li>
    <li class="bg-slate-100 text-center py-1">item 4</li>
    <li class="bg-slate-100 text-center py-1">item 5</li>
    <li class="bg-slate-100 text-center py-1">item 6</li>
    <li class="bg-slate-100 text-center py-1">item 7</li>
    <li class="bg-slate-100 text-center py-1">item 8</li>
    <li class="bg-slate-100 text-center py-1">item 9</li>
    <li class="bg-slate-100 text-center py-1">item 10</li>
    <li class="bg-slate-100 text-center py-1">item 11</li>
    <li class="bg-slate-100 text-center py-1">item 12</li>
  </ul>
  
</div>