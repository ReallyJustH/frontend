<script lang="ts">
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { SendMessage } from '$lib/utils';

	export let playerId: string;
</script>

<div>
	<h1>{playerId}</h1>
	<button
		class="p-4 border-2 border-black rounded-lg bg-pink-500 text-white"
		on:click={() => SendMessage($connection, 'ADMIN$$' + playerId + '$$killPlayer')}
		>Crush His Skull</button
	>
	<button
		class="p-4 border-2 border-black rounded-lg bg-pink-500 text-white"
		on:click={() => SendMessage($connection, 'ADMIN$$' + playerId + '$$valueUp')}>+10 Value</button
	>
	<button
		class="p-4 border-2 border-black rounded-lg bg-pink-500 text-white"
		on:click={() => SendMessage($connection, 'ADMIN$$' + playerId + '$$valueDown')}
		>-10 Value</button
	>
	<button
		class="p-4 border-2 border-black rounded-lg bg-pink-500 text-white"
		on:click={() => SendMessage($connection, 'ADMIN$$' + playerId + '$$addItem')}
		><s>Add Item</s></button
	>
</div>
