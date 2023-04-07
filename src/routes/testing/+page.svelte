<script lang="ts">
	import { browser } from '$app/environment';
	import type { ClientResponse } from '$lib/types';
	import { Connect, ParseServerMessage, SendMessage } from '$lib/utils';

	let messagesFromServer: string[] = [];
	let parsedMessages: ClientResponse[] = [];
	let connection: WebSocket;

	// client data
	let clientId: string;

	if (browser) {
		connection = Connect();
		connection.onmessage = function (message: MessageEvent) {
			messagesFromServer.push(message.data);
			messagesFromServer = messagesFromServer;
			console.log(message.data);
			let parsedMessage = ParseServerMessage(message);
			// TODO make sure this only happens once, only triggered on actually getting the clientId
			parsedMessages.push(parsedMessage);
			parsedMessages = parsedMessages;
		};
	}
</script>

<button on:click={() => SendMessage(connection, 'CLIENT:resetGame')}>reset game</button>

<h1>logging</h1>
<div>
	{#each messagesFromServer as message}
		<p>{message}</p>
	{/each}
</div>
<div>
	{#each parsedMessages as message}
		<p>{message.serverMessage}</p>
		<p>{message.player?.id}</p>
		{#if message.allPlayers?.length !== undefined}
			{#each message.allPlayers as player}
				<p>{player.id}</p>
			{/each}
		{/if}
	{/each}
</div>
