<script>
  import Tooltip from './8_.svelte'
  import {tooltip} from './8_.js'
</script>
<style>
  table {
    width: 750px;
    border-collapse: collapse;
  }

  table, th, td {
    border: 1px solid black;
  }

  .scrollable {
    height: 300px;
    overflow-y: scroll;
  }
	.inspo {
		padding-top: 25px;
	}

	
</style>

<div class="scrollable">
  <table>
    <tr>
      <th>First</th>
      <th>Second</th>
      <th>Third</th>
      <th>Fourth</th>
    </tr>
    {#each Array(1000) as unit, idx}
      <tr>
        <td use:tooltip={{ content: Tooltip, row: idx, column: 1 }}>1</td>
        <td use:tooltip={{ content: Tooltip, row: idx, column: 2 }}>2</td>
        <td use:tooltip={{ content: Tooltip, row: idx, column: 3 }}>3</td>
        <td use:tooltip={{ content: Tooltip, row: idx, column: 4 }}>4</td>
      </tr>
    {/each}
  </table>
</div>

<div>
	<h2>
		Proof of concept for <a href="https://popper.js.org/">Popper.js</a> in Svelte.
	</h2>
	<div>
		Popper also created a Svelte tool <a href="https://github.com/popperjs/svelte-popper">here</a>, which instead of using an action wraps the triggering element in a Popper component (which has the potential to get ugly). Here is my take on a more simplistic version.
	</div>
	<div class="inspo">
		<small>
			(heavily inspired by Kev from the Svelte Discord REPL tooltip demo <a href="https://svelte.dev/repl/f27d278f08a1437ba46c3a7f71b3e36d?version=3.20.1">here</a>)
		</small>
	</div>
</div>