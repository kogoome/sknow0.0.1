<script context="module">
  export const load = async ({url, params})=>{
    const user = params.user
    const {origin, pathname, href} = url
    return { 
      props:{ origin, user, },
      stuff:{ user },
    }
  }
</script>
<script>
  import Edit from '$lib/layout/editor/index.svelte'
  export let user
</script>

<svelte:head> <title>{user}'sKnow</title> </svelte:head>
<Edit><slot/></Edit>
  