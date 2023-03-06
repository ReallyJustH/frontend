<script>
    import { onMount } from 'svelte';
    var color;
    onMount(() => {
		color = set_BG();
	});
function set_BG(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#"+randomColor;
}
</script>
<div class="border border-black w-[300px] p-2 outer">
    <div>
        <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
            <h1 class="text-4xl text-white">Movement Phase</h1>
        </div>
    </div>
</div>

<div class="border border-black w-[300px] p-2 outer">
    <div class="">
        <div class=" box border border-black flex justify-center p-1 w-fit px-2" style="background-color: {color} ;">
            <h1 class="text-4xl text-white">100</h1>
        </div>
        <div class=" box border border-black flex justify-center p-1 w-fit px-2" style="background-color: {color} ;">
            <h1 class="text-4xl text-white">100</h1>
        </div>
    </div>
</div>


