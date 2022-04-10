<script>
  import { createPopperActions } from 'svelte-popperjs';
  const [popperRef1, popperContent1] = createPopperActions();
  const [popperRef2, popperContent2] = createPopperActions();
  const placement = 'left-start';
  const popperOptions = {
    placement,
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] } }
    ],
  };

  let showTooltip1 = false;
  let showTooltip2 = false;
</script>
<div class="h-screen w-full text-center pt-10 bg-orange-300">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad obcaecati error quidem sit eaque eveniet fugiat eligendi pariatur, facilis natus quibusdam deserunt ullam laudantium voluptatibus dignissimos excepturi distinctio doloribus! Lorem ipsum dolor sit amet
  <span use:popperRef1 on:mouseenter={() => showTooltip1 = true} on:mouseleave={() => showTooltip1 = false} >
    "My span"
  </span>
  {#if showTooltip1}
    <div id="tooltip" use:popperContent1={popperOptions} class="">
      My tooltip asdasdasdasd<br>
      asdfasdfaasdasdasdsdf <br>
      basdfadssdaasdasdasdf<br>
      basdfadssdaasdasdasdf<br>
      basdfadssdaasdasdasdf<br>
      <div id="arrow" data-popper-arrow placement={placement}/>
    </div>
  {/if}
  consectetur adipisicing elit. Itaque ad obcaecati error quidem sit eaque eveniet fugiat eligendi pariatur, facilis natus quibusdam deserunt ullam laudantium voluptatibus dignissimos excepturi distinctio doloribus!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad obcaecati error quidem sit eaque eveniet fugiat eligendi pariatur, facilis natus 
  quibusdam deserunt ullam laudantium voluptatibus dignissimos excepturi distinctio doloribus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad obcaecati error quidem sit eaque eveniet fugiat eligendi pariatur, facilis natus quibusdam deserunt ullam laudantium voluptatibus dignissimos excepturi distinctio doloribus!
  <span use:popperRef2 on:mouseenter={() => showTooltip2 = true} on:mouseleave={() => showTooltip2 = false} >
    "My span"
  </span>
  {#if showTooltip2}
    <div id="tooltip" use:popperContent2={popperOptions} class="">
      My tooltip asdasdasdasd<br>
      asdfasdfaasdasdasdsdf <br>
      basdfadssdaasdasdasdf<br>
      basdfadssdaasdasdasdf<br>
      basdfadssdaasdasdasdf<br>
      <div id="arrow" data-popper-arrow placement={placement}/>
    </div>
  {/if}
</div>
