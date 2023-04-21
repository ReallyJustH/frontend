<script lang="ts">
	import PlayerCard from '$lib/PlayerCard.svelte';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
</script>

<main class=" bg-gradient-to-b from-[#205295] to-white h-screen">
	<div class="box z-10 h-[100%]">
		<div class="flex flex-col justify-center w-full items-center p-4 my-2 h-[100%]" style="">
			<div class="w-[300px] text-center">
				<h1 class="text-6xl text-white text-style">Marketplace Melee!</h1>
			</div>
			<div class="flex flex-col flex-wrap justify-between items-center my-2">
				{#if $allPlayers?.length > 0}
					{#each $allPlayers as player}
						<PlayerCard id={player.id} value={player.value} />
					{/each}
				{/if}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<button class="border border-black bg-white w-[300px] p-2 outer my-2" id="join">
				<div
					class=" box border border-black flex justify-center p-1"
					style="background-color: #205295;"
				>
					<h1
						class="text-4xl text-white text-style"
						on:click={() => {
							SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
							SendMessage($connection, 'CLIENT$$' + $id + '$$startGame');
						}}
					>
						Start Game
					</h1>
				</div>
			</button>
		</div>
	</div>
</main>
