<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import type { Rarity, Effect } from './types';

	export let itemName: string;
	export let itemDescription: string;
	export let itemPrice: number;
	export let isConsumable: boolean;
	export let numUses: number = 1;
	export let itemRarity: Rarity;
	export let itemEffect: Effect;
</script>

<div
	class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center my-2 mr-4 whitespace-normal bg-white"
>
	<div class="flex flex-row justify-end items-end snap-x">
		<div class="border-2 border-black w-[140px] h-[140px] mx-2" />
		<div
			class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
			style="background-color: #CC2C2C;"
		>
			<h1 class="text-4xl text-white text-style">{itemEffect?.amount}</h1>
		</div>
	</div>
	<h1 class="text-4xl text-white text-style self-start py-1">{itemName}</h1>
	<div class=" border-2 border-black flex justify-center p-1" style="background-color: #D9D9D9;">
		<p class="box-text">
			{itemDescription}
		</p>
	</div>
	<div class="flex flex-row w-full items-center justify-between my-2">
		<h1 class="text-4xl text-white text-style">Cost: {itemPrice}</h1>
		<div
			class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
			style="background-color: #631D73 ;"
		>
			<h1
				class="text-4xl text-white text-style"
				on:click={() => {
					SendMessage($connection, 'CLIENT$$' + $id + '$$shop$$' + itemName);
				}}
				on:keypress={() => {
					SendMessage($connection, 'CLIENT$$' + $id + '$$requestNewItems');
				}}
			>
				Buy
			</h1>
		</div>
	</div>
</div>
