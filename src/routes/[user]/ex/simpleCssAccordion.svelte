<script>


	let accordionChecked = false
</script>

<div class="contentRoot flex flex-col justify-start">
	<h1 class="text-2xl">tailwindcss peer is awesome!!!</h1>


	<div>
		<input id="second" type="checkbox" class="hidden peer "> 
		<label for="second" class="peer-checked:bg-red-500"> title1</label>
		<ul class="max-h-0 overflow-hidden 
			peer-checked:max-h-max 
			">
			<li class="pl-1">list1</li>
			<li class="pl-1">list2</li>
			<li class="pl-1">
				<input id="first" type="checkbox" class="hidden peer "> 
				<label for="first" class="peer-checked:bg-red-500"> title1</label>
				<ul class="max-h-0 overflow-hidden bg-base-100
					peer-checked:max-h-max
					">
					<li class="pl-1">list1</li>
					<li class="pl-1">list2</li>
					<li class="pl-1">list3</li>
					<li class="pl-1">list4</li>
				</ul>
			</li>
		</ul>
	</div>

	<div>
		<input id="third" type="checkbox" class="hidden peer "> 
		<label for="third" class="peer-checked:bg-red-500"> title1</label>
		<ul class="max-h-0 overflow-hidden
			peer-checked:max-h-max 
			">
			<li class="pl-3">list1</li>
			<li class="pl-3">list2</li>
			<li class="pl-3">
				<input id="fourth" type="checkbox" class="hidden peer "> 
				<label for="fourth" class="peer-checked:bg-red-500"> title1</label>
				<ul class="max-h-0 overflow-hidden
					peer-checked:max-h-fit  
					">
					<li class="pl-3">list1</li>
					<li class="pl-3">list2</li>
					<li class="pl-3">list3</li>
					<li class="pl-3">list4</li>
				</ul>
			</li>
		</ul>
	</div>

	<div class="bg-primary">primary</div>
	<div class="bg-primary-focus">primary-focus</div>
	<div class="bg-primary-content">primary-content</div>
	<div class="bg-secondary">secondary</div>
	<div class="bg-secondary-focus">secondary-focus</div>
	<div class="bg-secondary-content">secondary-content</div>

	htmltag, accodion
	<details class="open:bg-base-200">
		<summary class="text-sm select-none">
			title
		</summary>
		<div class="">
			<p class="pl-2">list 1</p>
			<p class="pl-2">list 1</p>
			<p class="pl-2">list 1</p>
			<p class="pl-2">list 1</p>
			<p class="pl-2">
				<details class="open:bg-base-200">
					<summary class="text-sm select-none">
						title
					</summary>
					<div class="">
						<p class="pl-2">list 1</p>
						<p class="pl-2">list 1</p>
						<p class="pl-2">list 1</p>
						<p class="pl-2">list 1</p>
						<p class="pl-2">
						</p>
					</div>
				</details>
			</p>
		</div>
	</details>

</div>