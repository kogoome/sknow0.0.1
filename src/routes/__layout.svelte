<script context="module">
  export const load = async ({session,fetch})=>{
		let loginId = ""
		if( session.user && session.user.authenticated ) {
			const res = await fetch(`/api`,{
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
  export let loginId
	console.log("loginId: ", loginId);


</script>

<Nav/>
<slot />
<Footer/>
