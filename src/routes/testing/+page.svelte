<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import PlayerControls from '$lib/testing/PlayerControls.svelte';
</script>

<button
	class="p-4 border-2 border-red-600 bg-slate-500 text-white rounded-lg m-4"
	on:click={() => SendMessage($connection, 'CLIENT$$anyClient$$resetGame')}>reset game</button
>

<div class="m-2 p-4 border border-black flex flex-col gap-4 justify-center items-center">
	{#if $allPlayers?.length > 0}
		{#each $allPlayers as player}
			<PlayerControls playerId={player.id} />
		{/each}
	{/if}
</div>
