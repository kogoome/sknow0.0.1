<script>
	import Tooltip from './9_.svelte'
	import { tooltip } from './9_.js'
	let name = 'world';
</script>

<h1 use:tooltip={{content: Tooltip, text:' new word'}}>
	Hello
</h1>