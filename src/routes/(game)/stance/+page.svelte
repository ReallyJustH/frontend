 <svelte:head>
<title>Stance Page</title>
</svelte:head>

<script lang="ts">
	import { id, thisPlayer, allPlayers, connection, targetPlayer, pageName } from '$lib/stores';
	import { SendMessage } from '$lib/utils';
	import type { PlayerStance } from './types';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import PlayerStats from '$lib/PlayerStats.svelte';
	import { base } from '$app/paths';

	export let stance: PlayerStance = null;

	//function to check if target player is assigned and will toggle image of attack and set stance to attack if true
	onMount(async () => {
		if (!($targetPlayer === undefined)) {
			if (showAct === true || showDef == true) {
				showAct = false;
				showDef = false;
			}
			showAtk = true;
			stance = 'Attack';
		} else {
			showAtk = false;
		}
	});

	//Variables for toggling Atk/Def/Act Images
	let showDef: boolean = false;
	let showAct: boolean = false;
	let showAtk: boolean = false;

	//Hide/Show Defend Image classes
	let defendImg: string = 'absolute translate-x-[225px] translate-y-[-35px]';
	let defendImgHidden: string = 'hidden';

	//Hide/Show Act Image classes
	let actImg: string = 'absolute translate-x-[225px] translate-y-[-35px]';
	let actImgHidden: string = 'hidden';

	//Hide/Show Attack Image classes
	let atkImg: string = 'absolute translate-x-[225px] translate-y-[-35px]';
	let atkImgHidden: string = 'hidden';
</script>

<main class=" bg-gradient-to-b from-[#FFB637] to-white min-h-screen">
	<div class="box z-10 min-h-screen h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 min-h-screen h-full my-2">
			<PlayerStats />

			<button
				class="border-2 border-black w-[300px] p-2 outer my-2 bg-white rounded-md"
				on:click={() => {
					goto(`${base}/move`);
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #205295;"
				>
					<h1 class="text-4xl text-white text-style">Return</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 mt-8 bg-white rounded-md"
				on:click={() => {
					goto('attack');
				}}
			>
				<img
					src="assets/images/pow.png"
					alt="Kapow!"
					class={showAtk ? atkImg : atkImgHidden}
					style="width: 100px; height: 75px;"
				/>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #cf142b ;"
				>
					<h1 class="text-4xl text-white text-style">Attack!</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white rounded-md"
				on:click={() => {
					stance = 'Defend';
					if (showAct === true || showAtk === true) {
						showAct = false;
						showAtk = false;
					}
					showDef = showDef ? false : true;
				}}
			>
				<img
					src="assets/images/pow.png"
					alt="Kapow!"
					class={showDef ? defendImg : defendImgHidden}
					style="width: 100px; height: 75px;"
				/>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #39ADD1 ;"
				>
					<h1 class="text-4xl text-white text-style">Defend!</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-8 bg-white rounded-md"
				on:click={() => {
					stance = 'Act';
					if (showDef === true || showAtk === true) {
						showDef = false;
						showAtk = false;
					}
					showAct = showAct ? false : true;
				}}
			>
				<img
					src="assets/images/pow.png"
					alt="Kapow!"
					class={showAct ? actImg : actImgHidden}
					style="width: 100px; height: 75px;"
				/>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color:#FFB637 ;"
				>
					<h1 class="text-4xl text-white text-style">Act!</h1>
				</div>
			</button>

			<button
				class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white rounded-md"
				on:click={() => {
					if (stance === 'Attack') {
						SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
						SendMessage(
							$connection,
							'CLIENT$$' + $id + '$$declareStance$$' + stance + '$$' + $targetPlayer.id
						);
					} else if (stance === 'Defend' || stance === 'Act') {
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
