<script lang="ts">
	import { onMount } from 'svelte';

	export let infoState: boolean = false;

	function toggleMenu(): void {
		infoState = infoState ? false : true;
	}

	let info_hidden: string = 'bg-black top-0 left-0 hidden z-10 w-full h-min-screen h-full';
	let info_shown: string =
		'bg-black/50 top-0 left-0 absolute block z-10 w-full h-min-screen h-full flex items-center justify-center';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={infoState ? info_shown : info_hidden}>
	<div class="border border-black w-[300px] p-4 outer my-3 bg-white relative">
		<div on:click={toggleMenu}>
			<div
				class=" box border border-black flex items-center justify-center py-1 px-4 mb-6 w-full"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Close</h1>
			</div>
		</div>

		<div>
			<div
				class=" box border border-black flex flex-col items-center justify-center py-1 px-4 mb-6 w-full"
				style="background-color:#205295;"
			>
				<h1 class="text-3xl text-white text-style">Rules Of The Game!</h1>
				<h2 class="text-2xl text-white text-style my-2">
					1. An event based on real world data will occur
				</h2>
				<h2 class="text-2xl text-white text-style my-2">2. The Shop will become available</h2>
				<h2 class="text-2xl text-white text-style my-2">
					3. Players will take turns moving their figures
				</h2>
				<h2 class="text-2xl text-white text-style my-2">
					4. Everyone chooses a stance and reveals them simultaneously
				</h2>
				<h2 class="text-2xl text-white text-style my-2">
					5.At the end of a year all players will depreciate a set amount
				</h2>
			</div>
		</div>
	</div>
</div>
