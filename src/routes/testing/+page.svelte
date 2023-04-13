<script lang="ts">
	import { browser } from '$app/environment';
	import type { ClientResponse } from '$lib/types';
	import { Connect, ParseServerMessage, SendMessage } from '$lib/utils';

	let parsedMessages: ClientResponse[] = [];
	let connection: WebSocket;

	// client data
	let clientId: string = '';

	if (browser) {
		connection = Connect();
		connection.onmessage = function (message: MessageEvent) {
			let parsedMessage = ParseServerMessage(message);
			if (parsedMessage.serverMessage === 'clientConnected' && clientId === '') {
				clientId = parsedMessage.clientId!;
			}
			parsedMessages.push(parsedMessage);
			parsedMessages = parsedMessages;
		};
	}
</script>

<button on:click={() => SendMessage(connection, 'CLIENT$$resetGame')}>reset game</button>

<div id="debug" class="absolute right-0 top-0 p-6 border-2 border-red-800">
	{clientId}
</div>

<h1>logging</h1>
<p>parsedMessages</p>
<div>
	{#each parsedMessages as message}
		<p>ServerMessage: {message.serverMessage}</p>
		{#if message.clientId !== undefined}
			<p>Client Id: {message.clientId}</p>
		{/if}
		{#if message.player?.id !== undefined}
			<p>Player.id: {message.player?.id}</p>
		{/if}
		{#if message.allPlayers?.length !== undefined}
			{#each message.allPlayers as player}
				<p>AllPlayers Player.Id: {player.id}</p>
				<p>AllPlayers Player.stance: {player.stance}</p>
				<p>AllPlayers Player.baseStatAttack: {player.baseStatAttack}</p>
				<p>AllPlayers Player.baseStatDefend: {player.baseStatDefend}</p>
				<p>AllPlayers Player.readyState: {player.readyState}</p>
				<p>AllPlayers Player.Alive: {player.playerAlive}</p>
			{/each}
		{/if}
		<br />
	{/each}
</div>
