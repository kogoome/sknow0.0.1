<script>
  let node

  const click = (e)=>{
    e.target.innerHTML+="🚀"
  }
</script>
<!-- html document 바인딩 -->
<button type="text" bind:this={node} on:click={click} > 테스트 </button>