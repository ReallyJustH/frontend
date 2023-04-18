<script lang="ts">
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import { goto } from '$app/navigation';
	import InfoMenu from '$lib/InfoMenu.svelte';

	let info: boolean = false;
	function toggleInfo(): void {
		info = info ? false : true;
	}
</script>

<InfoMenu infoState={info} />
<main class=" bg-gradient-to-b from-[#205295] to-white">
	<div class="box z-10">
		<div class="flex flex-col justify-center w-full items-center p-4 h-screen">
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">Movement Phase</h1>
				</div>
			</div>

			<div class="flex flex-row items-center justify-around w-[300px] my-3">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<button
					class="border-2 border-black w-[140px] p-2 outer bg-white cursor-pointer"
					on:click={toggleInfo}
				>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color:#205295 ;"
					>
						<h1 class="text-4xl text-white text-style">info</h1>
					</div>
				</button>
				<div class="border-2 border-black w-[140px] p-2 outer bg-white">
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color:#205295 ;"
					>
						<h1 class="text-4xl text-white text-style">2011</h1>
					</div>
				</div>
			</div>

			<div
				class="border-2 border-black w-[300px] p-2 outer flex flex-row justify-center items-center my-3 bg-white"
			>
				<div class="flex flex-row justify-evenly">
					<div class="flex flex-col items-center mr-2">
						<div
							class=" box border-2 border-black flex justify-center p-1 w-fit px-10"
							style="background-color:#205295 ;"
						>
							<h1 class="text-4xl text-white text-style">{$thisPlayer?.value}</h1>
						</div>
						<h1 class="text-4xl text-white text-style">Value</h1>
					</div>
				</div>
			</div>

			<div
				class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center my-3 bg-white"
			>
				<div class="flex flex-row justify-evenly">
					<div class="flex flex-col items-center mr-2">
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[130px]"
							style="background-color:#CC2C2C ;"
						>
							<h1 class="text-4xl text-white text-style">{$thisPlayer?.statAttack}</h1>
						</div>
						<h1 class="text-4xl text-white text-style">Atk</h1>
					</div>
					<div class="flex flex-col items-center">
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[130px]"
							style="background-color:#39ADD1 ;"
						>
							<h1 class="text-4xl text-white text-style">{$thisPlayer?.statDefend}</h1>
						</div>
						<h1 class="text-4xl text-white text-style">Def</h1>
					</div>
				</div>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<button
				class="border-2 border-black w-[300px] p-2 outer my-3 bg-white cursor-pointer"
				on:click={() => {
					goto('stance');
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">Stance</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer my-3 bg-white"
				on:click={() => {
					goto('inventory');
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-4xl text-white text-style">Inventory</h1>
				</div>
			</button>
		</div>
	</div>
</main>
