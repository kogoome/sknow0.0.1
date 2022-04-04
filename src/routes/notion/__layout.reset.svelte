<script context="module">
  export const load = async ({url})=>{
    const pathname = url.pathname
    const origin = url.origin
    const str = "asdf"
    return {
      props:{
        pathname,
        origin,
      }
    }
  }
</script>

<script>
  export let pathname
  export let origin
</script>

<a href="{origin}">sKnow.com</a>
<a href="{origin+pathname}">{pathname}</a>


<slot/>