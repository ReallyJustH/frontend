<script lang="ts">
	export let id: string;
	export let value: number;
</script>

<div class="border-2 border-black w-[300px] p-2 outer my-2 bg-white">
	<div
		class=" box border-2 border-black flex justify-center p-1"
		style="background-color:#205295 ;"
	>
		<h1 class="text-4xl text-white text-style">{id} | {value}</h1>
	</div>
</div>
