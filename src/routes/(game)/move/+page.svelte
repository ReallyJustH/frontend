 <svelte:head>
<title>Move Page</title>
</svelte:head>

<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, pageName, yearlyEvent } from '$lib/stores';
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

<main class=" bg-gradient-to-b from-[#205295] to-white min-h-screen relative">
	<InfoMenu infoState={info} />
	<div class="box z-10 min-h-screen h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 min-h-screen h-full">
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">Movement Phase</h1>
				</div>
			</div>

			<div class="border-2 border-black w-[300px] px-2 outer my-3 bg-white text-center">
				<div class="flex flex-row">
					<div
						class=" box border-2 border-black flex justify-center p-1 mt-2 mr-2 w-full"
						style="background-color:#205295 ;"
					>
						<p class="text-4xl text-white text-style">{$yearlyEvent.decay}</p>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button role="dialog"
						class=" box border-2 border-black flex justify-center p-1 mt-2 w-full"
						style="background-color:#205295 ;"
						on:click={toggleInfo}
					>
						<p class="text-4xl text-white text-style">{$yearlyEvent.year}</p>
					</button>
				</div>
				<div class="flex flex-row">
					<h1 class="text-4xl text-style text-white w-full mr-2">Decay</h1>
					<h1 class="text-4xl text-style text-white w-full">Year</h1>
				</div>
			</div>

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
					<p class="text-4xl text-white text-style">Inventory</p>
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
					<p class="text-4xl text-white text-style">Stance</p>
				</div>
			</button>
		</div>
	</div>
</main>
