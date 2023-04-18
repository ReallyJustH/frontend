<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, targetPlayer } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import type { PlayerStance } from './types';
	import { goto } from '$app/navigation';

	export let stance: PlayerStance = null;
</script>

<main class=" bg-gradient-to-b from-[#FFB637] to-white">
	<div class="box z-10">
		<div class="flex flex-col justify-center w-full items-center p-4 h-screen my-2" style="">
			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white"
				on:click={() => {
					goto('move');
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-4xl text-white text-style">Return</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 mt-8 bg-white"
				on:click={() => {
					goto('attack');
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #cf142b ;"
				>
					<h1 class="text-4xl text-white text-style">Attack!</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white"
				on:click={() => (stance = 'Defend')}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #39ADD1 ;"
				>
					<h1 class="text-4xl text-white text-style">Defend!</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-8 bg-white"
				on:click={() => (stance = 'Act')}
			>
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color:#FFB637 ;"
					>
						<h1 class="text-4xl text-white text-style">Act!</h1>
					</div>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white"
				on:click={() => {
					if ((stance = 'Attack')) {
						SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
						SendMessage(
							$connection,
							'CLIENT$$' + $id + '$$declareStance$$' + stance + '$$' + targetPlayer
						);
					} else {
						SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
						SendMessage($connection, 'CLIENT$$' + $id + '$$declareStance$$' + stance);
					}
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #209525 ;"
				>
					<h1 class="text-4xl text-white text-style">Confirm Stance</h1>
				</div>
			</button>
		</div>
	</div>
</main>
