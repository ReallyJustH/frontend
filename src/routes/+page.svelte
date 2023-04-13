<script lang="ts">
	import PlayerCard from '$lib/PlayerCard.svelte';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
</script>

<div class="flex flex-col justify-center w-full items-center p-4 h-screen my-2" style="">
	<div class="w-[300px] text-center">
		<h1 class="text-6xl text-teal-500 text-style">Marketplace Melee!</h1>
	</div>
	<div class="flex flex-row flex-wrap justify-between items-center">
		{#if $allPlayers?.length > 0}
			{#each $allPlayers as player}
				<PlayerCard id={player.id} value={player.value} />
			{/each}
		{/if}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="border border-black bg-white w-[300px] p-2 outer my-2" id="join">
		<div>
			<div
				class=" box border border-black flex justify-center p-1"
				style="background-color: #205295;"
			>
				<h1 class="text-4xl text-white text-style">Start Game</h1>
			</div>
		</div>
	</div>
</div>
