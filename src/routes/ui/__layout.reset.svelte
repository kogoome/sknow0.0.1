<script>
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";
  let theme = "white";
</script>


<svelte:head>
  <link
  rel="stylesheet"
  href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
  <title>tailwind elements & carbon-components-svelte</title>
</svelte:head>




<div id="asdf" class="text-center flex flex-col justify-center ">
  <div class="">
    <Theme
      render="select"
      select={{
        themes: ["white", "g10", "g80", "g90", "g100"],
        labelText: "Select a theme",
        inline: true,
      }}
    />
    <slot/>
  </div>
</div>