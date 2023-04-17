<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, targetPlayer } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import type { PlayerStance } from './types';
	import { goto } from '$app/navigation';

	export let stance: PlayerStance = null;

	export let state: boolean = false;
	export let stateAttack: boolean = false;

	export let target: string = '';

	function toggleMenu(): void {
		state = state ? false : true;

		stance = 'Attack';
	}

	function toggleAttackMenu(): void {
		stateAttack = stateAttack ? false : true;
	}

	let style_hidden: string = 'bg-black top-0 left-0 hidden z-0 w-full h-full';
	let style_shown: string =
		'bg-black/50 top-0 left-0 absolute block z-0 w-full h-full flex items-center justify-center';
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
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color: #D9D9D9 ;"
					>
						<h1 class="text-4xl text-white text-style">Return</h1>
					</div>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 mt-8 bg-white"
				on:click={() => {
					goto('attack');
				}}
			>
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color: #cf142b ;"
					>
						<h1 class="text-4xl text-white text-style">Attack!</h1>
					</div>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white"
				on:click={() => (stance = 'Defend')}
			>
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color: #39ADD1 ;"
					>
						<h1 class="text-4xl text-white text-style">Defend!</h1>
					</div>
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
						SendMessage(
							$connection,
							'CLIENT$$' + $id + '$$declareStance$$' + stance + '$$' + targetPlayer
						);
					} else {
						SendMessage($connection, 'CLIENT$$' + $id + '$$declareStance$$' + stance);
					}
				}}
			>
				<div>
					<div
						class=" box border-2 border-black flex justify-center p-1"
						style="background-color: #209525 ;"
					>
						<h1 class="text-4xl text-white text-style">Confirm Stance</h1>
					</div>
				</div>
			</button>
		</div>
	</div>
</main>
