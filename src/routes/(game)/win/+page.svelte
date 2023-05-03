 <svelte:head>
<title>Victory Page</title>
</svelte:head>

<script lang="ts">
	import PlayerCard from '$lib/PlayerCard.svelte';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
</script>

<main class=" bg-gradient-to-b from-[#209525] to-white min-h-screen">
	<div class="box z-10 min-h-screen h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 my-2 min-h-screen h-full">
			<div class="flex flex-col flex-wrap justify-between items-center my-2">
				<div class="w-[300px] text-center">
					<h1 class="text-6xl text-white text-style">You're Winner!</h1>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<button
				class="border border-black bg-white w-[300px] p-2 outer my-2"
				id="join"
				on:click={() => {
					SendMessage($connection, 'ADMIN$$noClient$$resetGame');
				}}
			>
				<div
					class=" box border border-black flex justify-center p-1"
					style="background-color: #209525;"
				>
					<h1 class="text-4xl text-white text-style">Start A New Game!</h1>
				</div>
			</button>
		</div>
	</div>
</main>
