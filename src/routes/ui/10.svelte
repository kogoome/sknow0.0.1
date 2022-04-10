<script>
  import Popper from "@popperjs/svelte";

  const css = obj =>
    Object.entries(obj || {})
      .map(x => x.join(":"))
      .join(";");

  let referenceElement;
  let popperElement;
  let arrowElement;
  $: options = {
    modifiers: [
      { name: "offset", options: { offset: [0, 5] } },
      { name: "arrow", options: { element: arrowElement } }
    ]
  };

  let styles = {};
  let attributes = {};

  console.log(styles);
</script>

<style>
  .tooltip[data-popper-placement^="top"] > .arrow {
    bottom: -4px;
  }

  .tooltip[data-popper-placement^="bottom"] > .arrow {
    top: -4px;
  }

  .tooltip[data-popper-placement^="left"] > .arrow {
    right: -4px;
  }

  .tooltip[data-popper-placement^="right"] > .arrow {
    left: -4px;
  }
</style>

<Popper
  reference={referenceElement}
  popper={popperElement}
  {options}
  bind:styles
  bind:attributes>
  <button bind:this={referenceElement}>reference</button>
  <div
    bind:this={popperElement}
    class="tooltip"
    style={css(styles.popper)}
    {...attributes.popper}>
    popper
    <div bind:this={arrowElement} class="arrow" style={css(styles.arrow)} />
  </div>
</Popper>