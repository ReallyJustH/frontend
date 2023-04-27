<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
</script>

<main class=" bg-gradient-to-b from-[#205295] to-white">
	<div class="box z-10">
		<div class="flex flex-col justify-center w-full items-center p-4 h-screen">
			<div class="border-2 border-black w-[300px] p-2 outer mb-6 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1 text-center"
					style="background-color: #205295 ;"
				>
					<p class="text-style text-white text-4xl">Event</p>
				</div>
			</div>
			<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
				<div
					class=" box border-2 border-black flex justify-center p-1 text-center"
					style="background-color: #D9D9D9  ;"
				>
					<p class="text-style text-white text-3xl">A fun and historically informative event.</p>
				</div>
			</div>

			<button
				class="border-2 border-black w-[300px] p-2 outer my-3 bg-white rounded-md"
				on:click={() => goto(`${base}/shop`)}
			>
				<div
					class=" box border-2 border-black flex justify-center p-1"
					style="background-color: #D9D9D9 ;"
				>
					<h1 class="text-4xl text-white text-style">Done</h1>
				</div>
			</button>
		</div>
	</div>
</main>
