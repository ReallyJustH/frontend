<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    var color;
    onMount(() => {
		color = set_BG();
	});
function set_BG(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#"+randomColor;
}

function hostClick(){
    goto('/players');
}
</script>

<div class="flex flex-col justify-center w-full items-center p-4 h-screen my-2" style="">
    <div class="w-[300px] text-center">
        <h1 class="text-6xl text-white text-style">Marketplace Melee!</h1>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="border border-black bg-white w-[300px] p-2 outer my-2" id="join">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style" >Start Game</h1>
            </div>
        </div>
    </div>
</div>
