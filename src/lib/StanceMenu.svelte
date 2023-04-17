<script lang="ts">
	import AttackMenu from './AttackMenu.svelte';

	import { id, thisPlayer, allPlayers, connection, targetPlayer } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import type { PlayerStance } from './types';

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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<AttackMenu {stateAttack} />
<div class={state ? style_shown : style_hidden}>
	<div class="border border-black w-[300px] p-4 outer my-3 bg-white">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={toggleMenu}>
			<div
				class=" box border border-black flex items-center justify-center py-1 px-4 mb-6"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Close</h1>
			</div>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={toggleAttackMenu}>
			<!-- on:attack={handleMessage} -->
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Attack</h1>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (stance = 'Defend')}>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#39ADD1 ;"
			>
				<h1 class="text-4xl text-white text-style">Defend!</h1>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (stance = 'Act')}>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#FFB637 ;"
			>
				<h1 class="text-4xl text-white text-style">Act!</h1>
			</div>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
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
			<div
				class=" box border border-black flex justify-center p-1 mt-8"
				style="background-color:#209525 ;"
			>
				<h1 class="text-4xl text-white text-style">Confirm Stance</h1>
			</div>
		</div>
	</div>
</div>
