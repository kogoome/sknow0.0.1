<script context="module">
  export const load = async ({url, params})=>{
    const user = params.user
    // 세션아이디와 일치하는지 확인하고 타인 계정으로 접속하지 않게.
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

<!-- 가로스크롤 방지 -->
<div class="overflow-hidden">
  <!-- 태그 속성으로 데이터전달, 슬롯은 다음 태그문서 슬롯으로 전달 -->
  <!-- 슬롯에는 프롭전달이 안됨. -->
  <Editorlayout {user}><slot/></Editorlayout>
</div>