<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import type { ClientResponse } from '$lib/types';
	import { Connect, ParseServerMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';

	let parsedMessages: ClientResponse[] = [];

	let clientId: string = '';

	if (browser) {
		$connection = Connect();
		$connection.onmessage = function (message: MessageEvent) {
			let parsedMessage = ParseServerMessage(message);
			if (parsedMessage.serverMessage === 'clientConnected' && clientId === '') {
				if (parsedMessage.clientId !== undefined) {
					clientId = parsedMessage.clientId;
				}
				id.set(clientId);
			}
			if (parsedMessage.serverMessage === 'allPlayers') {
				allPlayers.set(parsedMessage.allPlayers!);
			}
			if (parsedMessage.serverMessage === 'newPlayer' && parsedMessage.player?.id === clientId) {
				thisPlayer.set(parsedMessage.player!);
			}
			parsedMessages.push(parsedMessage);
			parsedMessages = parsedMessages;
		};
	}

	function beforeUnload(): void {
		$connection.close();
	}
</script>

<svelte:window on:beforeunload={beforeUnload} />

<div id="debug" class="absolute right-0 top-0 p-6 border-2 border-red-800">
	All Players
	<br />
	{#if $allPlayers?.length > 0}
		{#each $allPlayers as player}
			<div>{player.id}</div>
		{/each}
	{/if}
</div>

<slot />
