<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, pageName } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import { goto } from '$app/navigation';
	import InfoMenu from '$lib/InfoMenu.svelte';
	import PlayerStats from '$lib/PlayerStats.svelte';
	import { base } from '$app/paths';

	let info: boolean = false;

	function toggleInfo(): void {
		info = info ? false : true;
	}
</script>

<InfoMenu infoState={info} />
<main class=" bg-gradient-to-b from-[#205295] to-white">
	<div class="box z-10 h-[100%]">
		<div class="flex flex-col justify-center w-full items-center p-4 h-[100%]">
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">Movement Phase</h1>
				</div>
			</div>

			<button
				class="border-2 border-black w-[300px] px-2 outer my-3 bg-white"
				on:click={toggleInfo}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1 mt-2"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">2011</h1>
				</div>
				<h2 class="text-style text-white text-4xl text-center mb-1">Current Year</h2>
			</button>

			<PlayerStats />

			<!-- svelte-ignore a11y-click-events-have-key-events -->

			<button
				class="border-2 border-black w-[300px] p-2 outer my-3 bg-white rounded-md"
				on:click={() => {
					$pageName = 'move';
					goto(`${base}/inventory`);
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-4xl text-white text-style">Inventory</h1>
				</div>
			</button>
			<button
				class="border-2 border-black w-[300px] p-2 outer my-3 bg-white rounded-md"
				on:click={() => {
					goto(`${base}/stance`);
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">Stance</h1>
				</div>
			</button>
		</div>
	</div>
</main>
