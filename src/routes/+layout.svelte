<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import type { ClientResponse, Player } from '$lib/types';
	import { Connect, ParseServerMessage } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const id = writable<string>();
	const thisPlayer = writable<Player>();
	const allPlayers = writable<Player[]>();
	const connection = writable<WebSocket>();

	$: id.set(data.id);
	$: thisPlayer.set(data.thisPlayer);
	$: allPlayers.set(data.allPlayers);
	$: connection.set(data.connection);

	let parsedMessages: ClientResponse[] = [];
	// let connection: WebSocket;

	let clientId: string = '';

	if (browser) {
		$connection = Connect();
		$connection.onmessage = function (message: MessageEvent) {
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
				thisPlayer.set(parsedMessage.player!);
			}
			parsedMessages.push(parsedMessage);
			parsedMessages = parsedMessages;
		};
	}
	setContext('id', id);
	setContext('thisPlayer', thisPlayer);
	setContext('allPlayers', allPlayers);
	setContext('connection', connection);
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
