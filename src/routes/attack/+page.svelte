<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, targetPlayer } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import type { PlayerStance } from './types';
	import { goto } from '$app/navigation';
</script>

<main class=" bg-gradient-to-b from-[#cf142b] to-white">
	<div class="box z-10">
		<div class="flex flex-col justify-center w-full items-center p-4 h-screen my-2" style="">
			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white"
				on:click={() => {
					goto('stance');
				}}
			>
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color: #D9D9D9 ;"
					>
						<h1 class="text-4xl text-white text-style">Back To Stance Menu</h1>
					</div>
				</div>
			</button>

			{#each $allPlayers as player}
				{#if !($id === player.id)}
					<button on:click={() => ($targetPlayer = player)}>
						<div
							class=" box border border-black flex justify-center p-1 mt-8"
							style="background-color:#cf142b  ;"
						>
							<h1 class="text-4xl text-white text-style">{player.id}</h1>
						</div>
					</button>
				{/if}
			{/each}
		</div>
	</div>
</main>
