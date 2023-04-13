<script lang="ts">
	import StanceMenu from '$lib/StanceMenu.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { ClientResponse } from '$lib/types';
	import { Connect, ParseServerMessage, SendMessage } from '$lib/utils';
	import InfoMenu from '$lib/InfoMenu.svelte';

	let messagesFromServer: string[] = [];
	let parsedMessages: ClientResponse[] = [];
	let connection: WebSocket;

	// client data
	let clientId: string;
	let change: boolean;
	function toggleMenu(): void {
		change = change ? false : true;
	}

	let info: boolean = false;
	function toggleInfo(): void {
		info = info ? false : true;
	}
</script>

<StanceMenu state={change} />
<InfoMenu infoState={info} />

<div class="flex flex-col justify-center w-full items-center p-4 h-screen">
	<div class="border border-black w-[300px] p-2 outer mb-2">
		<div>
			<div
				class=" box border border-black flex justify-center p-1"
				style="background-color:#205295 ;"
			>
				<h1 class="text-4xl text-white text-style">Movement Phase</h1>
			</div>
		</div>
	</div>

	<div class="flex flex-row items-center justify-around w-[300px] my-3">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="border border-black w-[140px] p-2 outer" on:click={toggleInfo}>
			<div>
				<div
					class=" box border border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">info</h1>
				</div>
			</div>
		</div>
		<div class="border border-black w-[140px] p-2 outer">
			<div>
				<div
					class=" box border border-black flex justify-center p-1"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">2011</h1>
				</div>
			</div>
		</div>
	</div>

	<div
		class="border border-black w-[300px] p-2 outer flex flex-row justify-center items-center my-3"
	>
		<div class="flex flex-row justify-evenly">
			<div class="flex flex-col items-center mr-2">
				<div
					class=" box border border-black flex justify-center p-1 w-fit px-10"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">100</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Value</h1>
			</div>
			<div class="flex flex-col items-center">
				<div
					class=" box border border-black flex justify-center p-1 w-fit px-10"
					style="background-color:#205295 ;"
				>
					<h1 class="text-4xl text-white text-style">-20</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Decay</h1>
			</div>
		</div>
	</div>

	<div class="border border-black w-[300px] p-2 outer flex flex-col items-center my-3">
		<div class="flex flex-row justify-evenly">
			<div class="flex flex-col items-center mr-2">
				<div
					class=" box border border-black flex justify-center p-1 w-[130px]"
					style="background-color:#CC2C2C ;"
				>
					<h1 class="text-4xl text-white text-style">+5</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Atk</h1>
			</div>
			<div class="flex flex-col items-center">
				<div
					class=" box border border-black flex justify-center p-1 w-[130px]"
					style="background-color:#39ADD1 ;"
				>
					<h1 class="text-4xl text-white text-style">+10</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Def</h1>
			</div>
		</div>

		<div class="flex flex-row justify-evenly">
			<div class="flex flex-col items-center mr-2">
				<div
					class=" box border border-black flex justify-center p-1 w-[130px] "
					style="background-color:#FFB637 ;"
				>
					<h1 class="text-4xl text-white text-style">+4IN</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Range</h1>
			</div>
			<div class="flex flex-col items-center">
				<div
					class=" box border border-black flex justify-center p-1 w-[130px] "
					style="background-color:#209525 ;"
				>
					<h1 class="text-4xl text-white text-style">-3IN</h1>
				</div>
				<h1 class="text-4xl text-white text-style">Mov Range</h1>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="border border-black w-[300px] p-2 outer my-3" on:click={toggleMenu}>
		<div>
			<div
				class=" box border border-black flex justify-center p-1"
				style="background-color:#205295 ;"
			>
				<h1 class="text-4xl text-white text-style">Stance</h1>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="border border-black w-[300px] p-2 outer my-3"
		on:click={() => SendMessage(connection, 'CLIENT:_' + clientId + '_:gameInventory')}
	>
		<div>
			<div
				class=" box border border-black flex justify-center p-1"
				style="background-color:#205295 ;"
			>
				<h1 class="text-4xl text-white text-style">Inventory</h1>
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="border border-black w-[300px] p-2 outer my-3"
		on:click={() => SendMessage(connection, 'CLIENT:_' + clientId + '_:endTurn')}
	>
		<div>
			<div
				class=" box border border-black flex justify-center p-1"
				style="background-color:#205295 ;"
			>
				<h1 class="text-4xl text-white text-style">End Turn</h1>
			</div>
		</div>
	</div>
</div>
