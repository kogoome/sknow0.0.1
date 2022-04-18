<!-- <script context="module">
	export const load = async ({url, fetch})=>{
		// node검색 완료
		const searchRes = await fetch('/api/document/search_node'+url.search,{
			method:"GET",
		}).then(res=>res.json())
		// .catch(err=>alert(err))
		console.log("searchRes:", searchRes.resNodes)
		// path 검색, edge 검색

		return {
			props:{ }
		}
	}

</script> -->
<script>
	import {getContext} from 'svelte';
	let search = getContext('search')
	console.log("search:", search)
	// export let nodes
</script>
  
<div class="contentRoot">
	tutorial <br>
	search: main, other, other, ... <br>
	{JSON.stringify(search)}
	<!-- {nodes} -->
</div>