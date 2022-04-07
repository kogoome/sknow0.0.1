<script>
	import Nav from '$lib/layout/nav/index.svelte'
	import Footer from '$lib/layout/footer.svelte';
	import '../app.css';
</script>

<Nav/>
<slot />
<Footer/>
