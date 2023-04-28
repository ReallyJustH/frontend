<script lang="ts">
	import { browser } from '$app/environment';
	import type { ClientResponse, Player } from '$lib/types';
	import { Connect, ParseServerMessage, clientDie } from '$lib/utils';
	import {
		id,
		thisPlayer,
		allPlayers,
		connection,
		deadPlayers,
		shopItems,
		yearlyEvent
	} from '$lib/stores';

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
				console.log('clientId set: ' + clientId);
			}
			if (parsedMessage.serverMessage === 'allPlayers') {
				allPlayers.set(parsedMessage.allPlayers!);
				$allPlayers.map((player) => {
					if (player.id === $id) {
						thisPlayer.update((thisplayer) => (thisplayer = player));
						if ($thisPlayer.playerAlive === false) {
							clientDie();
						}
						console.log('printing player after thisPlayer is set: ' + player.id);
					}
				});
			}
			if (parsedMessage.serverMessage === 'playerDeath') {
				deadPlayers.set(parsedMessage.deadPlayers!);
				$deadPlayers.map((player) => {
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
			if (parsedMessage.serverMessage === 'event') {
				console.log('layout recieved serverMessage event');
				yearlyEvent.set(parsedMessage.yearlyEvent!);
				console.log($yearlyEvent);
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

<slot />
