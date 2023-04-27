<script lang="ts">
	import { goto } from '$app/navigation';
	import PlayerCard from '$lib/PlayerCard.svelte';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import { base } from '$app/paths';
</script>

<main class=" bg-gradient-to-b from-[#205295] to-white min-h-screen">
	<div class="box z-10 min-h-screen h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 my-2 min-h-screen h-full">
			<div class="w-[300px] text-center">
				<h1 class="text-6xl text-white text-style">Marketplace Melee!</h1>
			</div>
			<button
				class="border border-black bg-white w-[300px] p-2 outer my-2"
				id="join"
				on:click={() => {
					goto(`${base}/join`);
				}}
			>
				<div
					class=" box border border-black flex justify-center p-1"
					style="background-color: #205295;"
				>
					<h1 class="text-4xl text-white text-style">Join Game</h1>
				</div>
			</button>
		</div>
	</div>
</main>
