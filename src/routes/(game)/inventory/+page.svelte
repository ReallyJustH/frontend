<script>
	import { id, thisPlayer, allPlayers, connection, pageName } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<main class=" bg-gradient-to-b from-[#D9D9D9] to-white">
	<div class="box z-10 h-full">
		<div class="flex flex-col justify-center w-full items-center p-4 h-full">
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
				</div>
			</div>
			<div
				class="border-2 border-black w-[300px] p-2 outer my-2 flex flex-row items-center justify-around bg-white"
			>
				<div class="border-2 border-black w-[45px] h-[45px]" />

				<p class="box-text text-black">Buff: Atk + 5</p>

				<div
					class=" box border-2 border-black flex justify-center p-1 w-[65px] h-[40px] items-center"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-2xl text-white text-style">Use</h1>
				</div>
			</div>

			<div
				class="border-2 border-black w-[300px] p-2 outer my-2 flex items-center justify-around bg-white"
			>
				<div class="border-2 border-black w-[45px] h-[45px]" />
				<p class="box-text text-black">Buff: Atk + 5</p>
				<div
					class=" box border-2 border-black flex justify-center p-1 w-[65px] h-[40px] items-center self-end"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-2xl text-white text-style">Use</h1>
				</div>
			</div>
		</div>
	</div>
</main>
