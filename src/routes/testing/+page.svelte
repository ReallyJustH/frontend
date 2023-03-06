<script lang="ts">
	// const axios = require('axios').default;
	import {} from '@sveltejs/kit';
	import { browser, building, dev, version } from '$app/environment';

	// let messageFromServer: string;

	let messagesFromServer: string[];
	messagesFromServer.push('');

	if (browser) {
		// let connection = new WebSocket('ws://100.83.232.113:3883/socket', ['soap', 'xmpp']);
		let connection = new WebSocket('ws://hcd-lab.student.rit.edu:3883/socket', ['soap', 'xmpp']);
		connection.onmessage = function (message: MessageEvent) {
			// messageFromServer = message.data;
			messagesFromServer.push(message.data);
		};
	}
</script>

<div>
	{#each messagesFromServer as message}
		<p>{message}</p>
	{/each}
</div>
