<script lang="ts">
	export let show: boolean = false;

	function toggleMenu(): void {
		show = show ? false : true;
	}

	let hidden: string = 'bg-black top-0 left-0 hidden z-20 w-full h-full';
	let loading: string =
		'bg-black/50 top-0 left-0 absolute block z-20 w-full h-full flex items-center justify-center';
</script>

<div class={show ? loading : hidden}>
	<div class="border-2 border-black w-[300px] p-2 outer mb-2 bg-white">
		<div
			class=" box border-2 border-black flex justify-center p-1"
			style="background-color: #D9D9D9  ;"
		>
			<h1 class="text-4xl text-white text-style">Waiting...</h1>
		</div>
	</div>
</div>
