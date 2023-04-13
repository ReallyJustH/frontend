<script lang="ts">
	import { onMount } from 'svelte';

	export let stateAttack: boolean = false;

	function toggleMenu(): void {
		stateAttack = stateAttack ? false : true;
	}

	export let showImg: boolean = false;

	function kapow(): void {
		showImg = showImg ? false : true;
	}

	let attack_hidden: string = 'bg-black top-0 left-0 hidden z-10 w-full h-full';
	let attack_shown: string =
		'bg-black/50 top-0 left-0 absolute block z-10 w-full h-full flex items-center justify-center';

	let kapow_shown: string = 'absolute block z-20 translate-x-[200px] translate-y-[-35px]';
	let kapow_hidden: string = 'top-0 left-0 hidden z-20';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={stateAttack ? attack_shown : attack_hidden}>
	<div class="border border-black w-[300px] p-4 outer my-3 bg-white relative">
		<div on:click={toggleMenu}>
			<div
				class=" box border border-black flex items-center justify-center py-1 px-4 mb-6 w-full"
				style="background-color:#cf142b ;"
			>
				<h1 class="text-4xl text-white text-style">Close</h1>
			</div>
		</div>

		<div>
			<div class={showImg ? kapow_shown : kapow_hidden}>
				<img src="assets/images/pow.png" alt="" class="w-[125px] h-[75px]" />
			</div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#cf142b ;"
				on:click={kapow}
			>
				<h1 class="text-4xl text-white text-style">Other Player</h1>
			</div>
		</div>
		<div>
			<div class={showImg ? kapow_shown : kapow_hidden}>
				<img src="assets/images/pow.png" alt="" class="w-[125px] h-[75px]" />
			</div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#39ADD1 ;"
				on:click={kapow}
			>
				<h1 class="text-4xl text-white text-style">Other Player</h1>
			</div>
		</div>
		<div>
			<div class={showImg ? kapow_shown : kapow_hidden}>
				<img src="assets/images/pow.png" alt="" class="w-[125px] h-[75px]" />
			</div>
			<div
				class=" box border border-black flex justify-center p-1 my-2"
				style="background-color:#FFB637 ;"
				on:click={kapow}
			>
				<h1 class="text-4xl text-white text-style">Other Player</h1>
			</div>
		</div>

		<div>
			<div
				class=" box border border-black flex justify-center p-1 mt-8"
				style="background-color:#209525 ;"
			>
				<h1 class="text-4xl text-white text-style">Lock On!</h1>
			</div>
		</div>
	</div>
</div>
