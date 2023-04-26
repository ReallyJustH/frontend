<script lang="ts">
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
</script>

<div class="border-2 border-black w-[300px] p-2 outer flex flex-col items-center mb-3 bg-white">
	<div class="flex flex-row justify-evenly">
		<div class="flex flex-col items-center mr-2">
			<div
				class=" box border-2 border-black flex justify-center p-1 w-[85px]"
				style="background-color:#205295 ;"
			>
				<h1 class="text-3xl text-white text-style">{$thisPlayer?.value}</h1>
			</div>
			<h1 class="text-4xl text-white text-style">Value</h1>
		</div>
		<div class="flex flex-col items-center mr-2">
			<div
				class=" box border-2 border-black flex justify-center p-1 w-[85px]"
				style="background-color:#CC2C2C ;"
			>
				<h1 class="text-3xl text-white text-style">{$thisPlayer?.statAttack}</h1>
			</div>
			<h1 class="text-4xl text-white text-style">Atk</h1>
		</div>
		<div class="flex flex-col items-center">
			<div
				class=" box border-2 border-black flex justify-center p-1 w-[85px]"
				style="background-color:#39ADD1 ;"
			>
				<h1 class="text-3xl text-white text-style">{$thisPlayer?.statDefend}</h1>
			</div>
			<h1 class="text-4xl text-white text-style">Def</h1>
		</div>
	</div>
</div>
