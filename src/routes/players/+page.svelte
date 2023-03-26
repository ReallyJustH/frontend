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

<div class="flex flex-col justify-center w-full items-center p-4">
    <div class="border border-black w-[300px] p-2 outer mb-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Waiting For Players</h1>
            </div>
        </div>
    </div>

    <div class="flex flex-col my-10" id="players-box">
        <div class="border border-black w-[300px] p-2 outer mb-2">
            <div>
                <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">Player 1</h1>
                </div>
            </div>
        </div>
    
        <div class="border border-black w-[300px] p-2 outer mb-2">
            <div>
                <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">Player 2</h1>
                </div>
            </div>
        </div>
    
        <div class="border border-black w-[300px] p-2 outer mb-2">
            <div>
                <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">Player 3</h1>
                </div>
            </div>
        </div>
    
        <div class="border border-black w-[300px] p-2 outer mb-2">
            <div>
                <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">Player 4</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer mb-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Start Game!</h1>
            </div>
        </div>
    </div>
    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Cancel</h1>
            </div>
        </div>
    </div>

</div>