<script>
  let node

  const click = (e)=>{
    e.target.innerHTML+="🚀"
  }
</script>

<button type="text" bind:this={node} on:click={click} > 테스트 </button>