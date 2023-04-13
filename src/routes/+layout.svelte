<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import type { ClientData, ClientResponse, Player } from '$lib/types';
	import { Connect, ParseServerMessage, SendMessage } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	// Create a store and update it when necessary...
	// const clientData = writable<ClientData>();
	const id = writable<string>();
	const allPlayers = writable<Player[]>();
	// thisPlayer: Player;
	// allPlayers: Player[];
	$: id.set(data.id);
	$: allPlayers.set(data.allPlayers);

	let parsedMessages: ClientResponse[] = [];
	let connection: WebSocket;

	let clientId: string = '';

	if (browser) {
		connection = Connect();
		connection.onmessage = function (message: MessageEvent) {
			let parsedMessage = ParseServerMessage(message);
			console.log('message from server parsed');
			if (parsedMessage.serverMessage === 'clientConnected' && clientId === '') {
				clientId = parsedMessage.clientId!;
				id.set(clientId);
			}
			if (parsedMessage.serverMessage === 'allPlayers') {
				allPlayers.set(parsedMessage.allPlayers!);
			}
			if (parsedMessage.serverMessage === 'newPlayer' && parsedMessage.player?.id === clientId) {
				// thisPlayer = parsedMessage.player!;
			}
			parsedMessages.push(parsedMessage);
			parsedMessages = parsedMessages;
		};
	}

	// ...and add it to the context for child components to access
	setContext('id', id);
	setContext('allPlayers', allPlayers);
	// setContext('id', clientId);
	// setContext('thisPlayer', thisPlayer!);
	// setContext('allPlayers', allPlayers!);
	// setContext('connection', connection!);
	// setContext('allPlayers');
</script>

<div id="debug" class="absolute right-0 top-0 p-6 border-2 border-red-800">
	{clientId}
	<br />
	{$id}
	{#if $allPlayers?.length > 0}
		{#each $allPlayers as player}
			<div>{player.id}</div>
		{/each}
	{/if}
</div>

<slot />
