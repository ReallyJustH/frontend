<script lang="ts">
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
</script>

<div class="flex flex-col justify-center w-full items-center p-4 h-screen my-2" style="">
	<div class="w-[300px] text-center">
		<h1 class="text-6xl text-teal-500 text-style">Marketplace Melee!</h1>
	</div>
	<div>{$id}</div>
	{#if $allPlayers?.length > 0}
		{#each $allPlayers as player}
			<div>{player.id}</div>
		{/each}
	{/if}
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
