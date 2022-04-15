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
  import Editorlayout from '$lib/layout/editor/index.svelte'
  export let user
</script>

<svelte:head> <title>{user}'sKnow</title> </svelte:head>

<!-- 태그 속성으로 데이터전달, 슬롯은 다음 태그문서 슬롯으로 전달 -->
<Editorlayout {user}><slot {user}/></Editorlayout>