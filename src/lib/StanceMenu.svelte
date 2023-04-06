<script lang="ts">
	import { onMount } from 'svelte';

	export let state: boolean = false;

	function toggleMenu(): void {
		state = state ? false : true;
	}

	let style_hidden: string = 'bg-black top-0 left-0 hidden z-0 w-full h-full';
	let style_shown: string =
		'bg-black/50 top-0 left-0 absolute block z-0 w-full h-full flex items-center justify-center';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={state ? style_shown : style_hidden}>
	<div class="border border-black w-[300px] p-4 outer my-3 bg-white">
		<div on:click={toggleMenu}>
			<div
				class=" box border border-black flex  items-center justify-center py-1 px-4 mb-6"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Close</h1>
			</div>
		</div>

		<div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Attack</h1>
			</div>
		</div>
		<div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#39ADD1 ;"
			>
				<h1 class="text-4xl text-white text-style">Defend!</h1>
			</div>
		</div>
		<div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#FFB637 ;"
			>
				<h1 class="text-4xl text-white text-style">Act!</h1>
			</div>
		</div>

		<div>
			<div
				class=" box border border-black flex justify-center p-1 mt-8"
				style="background-color:#209525 ;"
			>
				<h1 class="text-4xl text-white text-style">Confirm Stance</h1>
			</div>
		</div>
	</div>
</div>
