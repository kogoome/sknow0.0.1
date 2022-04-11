<script>
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g90";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
</svelte:head>

<Theme bind:theme />

<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
  {#each ["white", "g10", "g80", "g90", "g100"] as value}
    <RadioButton labelText={value} {value} />
  {/each}
</RadioButtonGroup>
