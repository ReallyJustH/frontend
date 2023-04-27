<script lang="ts">
	import { browser } from '$app/environment';
	import type { ClientResponse, Player } from '$lib/types';
	import { Connect, ParseServerMessage, clientDie } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection, deadPlayers, shopItems } from '$lib/stores';
	// import { goto } from '$app/navigation';
	// import { base } from '$app/paths';

	let parsedMessages: ClientResponse[] = [];

	let clientId: string = '';
	// let clientAlive: boolean = true;

	// function checkIfClientAlive(element: Player, _index: number, _array: Player[]) {
	// 	// ({ element.id, playerAlive }) => id === clientId && playerAlive === false
	// 	if (element.id === clientId && element.playerAlive === false) clientAlive = false;
	// }

	if (browser) {
		$connection = Connect();
		$connection.onmessage = function (message: MessageEvent) {
			let parsedMessage = ParseServerMessage(message);
			if (parsedMessage.serverMessage === 'clientConnected' && clientId === '') {
				if (parsedMessage.clientId !== undefined) {
					clientId = parsedMessage.clientId;
				}
				id.set(clientId);
				console.log('clientId set: ' + clientId);
			}
			if (parsedMessage.serverMessage === 'allPlayers') {
				allPlayers.set(parsedMessage.allPlayers!);
				$allPlayers.forEach((player) => {
					if (player.id === $id) {
						thisPlayer.set(player);
						console.log('printing player after thisPlayer is set: ' + player.id);
					}
				});
			}
			if (parsedMessage.serverMessage === 'playerDeath') {
				deadPlayers.set(parsedMessage.deadPlayers!);
				$deadPlayers.forEach((player) => {
					console.log('this player is dead: ' + player.id);
					if (player.id === $id) {
						// thisPlayer.set(player);
						clientDie();
					}
				});
			}
			if (parsedMessage.serverMessage === 'shopItems') {
				console.log('layout recieved serverMessage shopItems');
				shopItems.set(parsedMessage.items!);
				console.log($shopItems);
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
	This Player
	<br />
	{#if $thisPlayer !== null}
		<div>{$thisPlayer?.id}</div>
		<div>readyState: {$thisPlayer?.readyState}</div>
	{/if}
	<br />
	All Players
	<br />
	{#if $allPlayers?.length > 0}
		{#each $allPlayers as player}
			<div>{player.id}</div>
		{/each}
	{/if}
</div>

<slot />
