<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
</script>

<button
	class="p-4 border-2 border-red-600 bg-slate-500 text-white rounded-lg m-4"
	on:click={() => SendMessage($connection, 'CLIENT$$anyClient$$resetGame')}>reset game</button
>
