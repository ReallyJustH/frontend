<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import LoadingPopUp from '$lib/LoadingPopUp.svelte';

	/** the name of the item being purchased */
	let itemName: string;

	let loading: boolean = false;

	function toggleLoading(): void {
		loading = loading ? false : true;
	}
</script>

<LoadingPopUp show={loading} />
<main class=" bg-gradient-to-b from-[#631D73] to-white">
	<div class="box z-10">
		<div class="flex flex-col justify-center w-full items-center p-4 h-[100%] z-20">
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #631D73  ;"
				>
					<h1 class="text-4xl text-white text-style">Shop</h1>
				</div>
			</div>
			<div
				class=" whitespace-nowrap overflow-y-hidden overflow-x-scroll w-[330px] inline-flex scrollbar-hide snap-x snap-start"
			>
				<div
					class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center my-2 mr-4 whitespace-normal bg-white"
				>
					<div class="flex flex-row justify-end items-end">
						<div class="border-2 border-black w-[140px] h-[140px] mx-2" />
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #CC2C2C  ;"
						>
							<h1 class="text-4xl text-white text-style">+5</h1>
						</div>
					</div>
					<h1 class="text-4xl text-white text-style self-start py-1">Pointy Stick</h1>
					<div
						class=" border-2 border-black flex justify-center p-1"
						style="background-color: #D9D9D9  ;"
					>
						<p class="box-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis
							nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur ac erat massa.
						</p>
					</div>
					<div class="flex flex-row w-full items-center justify-between my-2">
						<h1 class="text-4xl text-white text-style">Cost: 15</h1>
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #631D73 ;"
						>
							<h1 class="text-4xl text-white text-style">Buy</h1>
						</div>
					</div>
				</div>

				<div
					class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center my-2 mr-4 whitespace-normal bg-white"
				>
					<div class="flex flex-row justify-end items-end">
						<div class="border-2 border-black w-[140px] h-[140px] mx-2" />
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #CC2C2C  ;"
						>
							<h1 class="text-4xl text-white text-style">+5</h1>
						</div>
					</div>
					<h1 class="text-4xl text-white text-style self-start py-1">Pointy Stick</h1>
					<div
						class="border-2 border-black flex justify-center p-1"
						style="background-color: #D9D9D9  ;"
					>
						<p class="box-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis
							nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur ac erat massa.
						</p>
					</div>
					<div class="flex flex-row w-full items-center justify-between my-2">
						<h1 class="text-4xl text-white text-style">Cost: 15</h1>
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #631D73 ;"
						>
							<h1 class="text-4xl text-white text-style">Buy</h1>
						</div>
					</div>
				</div>

				<div
					class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center my-2 mr-4 whitespace-normal bg-white"
				>
					<div class="flex flex-row justify-end items-end">
						<div class="border border-black w-[140px] h-[140px] mx-2" />
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #CC2C2C  ;"
						>
							<h1 class="text-4xl text-white text-style">+5</h1>
						</div>
					</div>
					<h1 class="text-4xl text-white text-style self-start py-1">Pointy Stick</h1>
					<div
						class="border-2 border-black flex justify-center p-1"
						style="background-color: #D9D9D9  ;"
					>
						<p class="box-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis
							nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Curabitur ac erat massa.
						</p>
					</div>
					<div class="flex flex-row w-full items-center justify-between my-2">
						<h1 class="text-4xl text-white text-style">Cost: 15</h1>
						<div
							class=" box border-2 border-black flex justify-center p-1 w-[125px] h-[50px]"
							style="background-color: #631D73 ;"
						>
							<h1 class="text-4xl text-white text-style">Buy</h1>
						</div>
					</div>
				</div>
			</div>

			<button class="border-2 border-black w-[300px] p-2 outer my-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #631D73  ;"
				>
					<h1
						class="text-4xl text-white text-style"
						on:click={() => {
							SendMessage($connection, 'CLIENT$$' + $id + '$$requestNewItems');
						}}
						on:keypress={() => {
							SendMessage($connection, 'CLIENT$$' + $id + '$$requestNewItems');
						}}
					>
						Reroll
					</h1>
				</div>
			</button>

			<div
				class="border-2 border-black w-[300px] p-2 outer my-2 flex flex-row items-center bg-white"
			>
				<div class="border-2 border-black w-[45px] h-[45px] mx-2" />
				<p class="box-text text-black mr-2">Cost: 5 Value | Atk + 5</p>
				<div
					class=" box border-2 border-black flex justify-center p-1 w-[65px] h-[40px] items-center"
					style="background-color: #D9D9D9  ;"
				>
					<h1 class="text-3xl text-white text-style">Buy</h1>
				</div>
			</div>

			<div
				class="border-2 border-black w-[300px] p-2 outer my-2 flex flex-row items-center bg-white"
			>
				<div class="border-2 border-black w-[45px] h-[45px] mx-2" />
				<p class="box-text text-black mr-2">Cost: 5 Value | Atk + 5</p>
				<div
					class=" box border-2 border-black flex justify-center p-1 w-[65px] h-[40px] items-center"
					style="background-color: #D9D9D9  ;"
				>
					<h1 class="text-3xl text-white text-style">Buy</h1>
				</div>
			</div>

			<button class="border-2 border-black w-[300px] p-2 outer my-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #205295  ;"
				>
					<h1
						class="text-4xl text-white text-style"
						on:click={() => {
							SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
							toggleLoading();
							SendMessage($connection, 'CLIENT$$' + $id + '$$doneShopping');
						}}
						on:keypress={() => {
							SendMessage($connection, 'CLIENT$$' + $id + '$$ready');
							toggleLoading();
							SendMessage($connection, 'CLIENT$$' + $id + '$$doneShopping');
						}}
					>
						done shopping
					</h1>
				</div>
			</button>
		</div>
	</div>
</main>
