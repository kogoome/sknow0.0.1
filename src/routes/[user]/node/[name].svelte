<script context="module">
  export const load = async ({params})=>{
    const nodeName = params.name
    // 세션아이디와 일치하는지 확인하고 타인 계정으로 접속하지 않게.
    // const {origin, pathname, href} = url
    return { 
      props:{ nodeName },// 에디터레이아웃에서 사용
    }
  }
</script>
<script>
  export let nodeName
</script>
{nodeName} 페이지 테스트
