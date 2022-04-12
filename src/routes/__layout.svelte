<script context="module">
	// 쿠키로 서버세션에서 아이디 가져오기
  export const load = async ({session,fetch})=>{
		let loginId = ""
		if( session.user && session.user.authenticated ) {
			// 가지고있는 세션값이 서버에 등록된 값과 일치하는지 확인,
			// 일치시 로그인 아이디 리턴
			const res = await fetch(`/api/acount/getSession`,{
				method:"POST",
				body:JSON.stringify({
					sessionId:session.user.sknowSession,
				})
			}).then(res=>res.json()).catch(err=>console.log(err))
			// console.log("res: ", res);
			loginId = res.loginId
		}

    return { 
			props:{ loginId },
			stuff:{ loginId }
		}
  }
</script>

<script>
	import Nav from '$lib/layout/nav/index.svelte'
	import Footer from '$lib/layout/footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  onMount(() => {
    themeChange(false)
  })
</script>



<Nav/>
<slot />
<Footer/>
