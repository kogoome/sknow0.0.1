<script>
  $: search="main, other1, other2"
</script>

<div class="currentRoot">


  <div class="hidde modalbg w-screen h-screen overflow-hidden
  fixed z-10 left-0 top-0 flex flex-row justify-center
  peer-checked:fixed">
    <div class="flex flex-col justify-center">
      <div class="bg-slate-100 w-full h-fit rounded-btn p-5 ">
        <input type="text" class="btn btn-ghost w-full" bind:value={search}>
        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <button class="btn">Yay!</button>
      </div>
    </div>
  </div>


</div>