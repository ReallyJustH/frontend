 <svelte:head>
<title>Inventory Page</title>
</svelte:head>

<script>
	import { id, thisPlayer, allPlayers, connection, pageName } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import ItemCard from '$lib/ItemCard.svelte';
</script>

<main class=" bg-gradient-to-b from-[#D9D9D9] to-white min-h-screen">
	<div class="box z-10 min-h-screen h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 min-h-screen h-full">
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white rounded-md">
				<div
					class=" box border-2 border-black flex justify-center p-1 relative"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-4xl text-white text-style">Inventory</h1>
				</div>
			</div>
			<button
				class="border-2 border-black w-[300px] p-2 outer my-2 bg-white rounded-md"
				on:click={() => {
					goto(`${base}/` + $pageName);
				}}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #205295;"
				>
					<h1 class="text-4xl text-white text-style">Return</h1>
				</div>
			</button>
			<div
				class=" whitespace-nowrap overflow-y-hidden overflow-x-scroll w-[330px] inline-flex scrollbar-hide relative translate-x-[15px]"
			>
				{#if $thisPlayer?.items.length > 0}
					{#each $thisPlayer?.items as item}
						<ItemCard
							itemName={item.name}
							itemDescription={item.description}
							itemEffect={item.effect}
							itemPrice={item.price}
							itemRarity={item.rarity}
							isConsumable={item.consumable}
						/>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</main>
