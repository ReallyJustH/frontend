<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection, shopItems } from '$lib/stores';
	import type { Rarity, Effect } from './types';
	import { page } from '$app/stores';

	export let itemName: string;
	export let itemDescription: string;
	export let itemPrice: number;
	export let isConsumable: boolean;
	export let numUses: number = 1;
	export let itemRarity: Rarity;
	export let itemEffect: Effect;
</script>

<div
	class="border-2 border-black min-w-[300px] min-h-[350px] p-2 outer flex flex-col my-2 mr-4 whitespace-normal bg-white"
>
	<h1 class="text-2xl text-white text-style self-start py-1">{itemName}</h1>
	<div class="flex flex-row justify-end items-end snap-x">
		<img
			src={'assets/icons/' + itemName.toLowerCase() + '.png'}
			alt=""
			class="w-[140px] h-[140px]"
		/>
		<div
			class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
			style="background-color: #CC2C2C;"
		>
			<h1 class="text-3xl text-white text-style">{itemEffect.type}{itemEffect?.amount}</h1>
		</div>
	</div>
	<h1 class="text-2xl text-white text-style self-start py-1">{itemRarity}</h1>
	<div class=" border-2 border-black flex p-1" style="background-color: #D9D9D9;">
		<p class="box-text flex-grow">
			{itemDescription}
		</p>
	</div>
	<div class="flex flex-row w-full items-center justify-between my-1">
		<h1 class="text-2xl text-white text-style">Cost: {itemPrice}</h1>
	</div>
	{#if isConsumable}
		<div class="flex flex-row w-full items-center justify-between my-1">
			<h1 class="text-2xl text-white text-style">Uses: {numUses}</h1>
		</div>
	{/if}
	{#if $page.url.pathname === '/marketplace-melee/shop'}
		<button
			class=" box border-2 border-black flex justify-center p-1 w-full h-[50px] self-end"
			style="background-color: #631D73 ;"
			on:click={() => {
				if ($thisPlayer.value > itemPrice) {
					shopItems.update(() => $shopItems.filter((item) => !(item.name === itemName)));
				}
				SendMessage($connection, 'CLIENT$$' + $id + '$$shop$$' + itemName);
			}}
			on:keypress={() => {
				if ($thisPlayer.value > itemPrice) {
					shopItems.update(() => $shopItems.filter((item) => !(item.name === itemName)));
				}
				SendMessage($connection, 'CLIENT$$' + $id + '$$shop$$' + itemName);
			}}
		>
			<h1 class="text-4xl text-white text-style">Buy</h1>
		</button>
	{/if}
</div>
