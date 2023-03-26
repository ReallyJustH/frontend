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
                <h1 class="text-4xl text-white text-style">Movement Phase</h1>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer flex flex-wrap items-center my-2">
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col items-center mr-2">
                <div class=" box border border-black flex justify-center p-1 w-fit px-10" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">100</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Value</h1>
            </div>
            <div class="flex flex-col items-center">
                <div class=" box border border-black flex justify-center p-1 w-fit px-10" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">-20</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Decay</h1>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer my-2 flex flex-col items-center">
        <h1 class="text-4xl text-white text-style">Event</h1>
        <div class="w-full">
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <p class="box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac erat massa.
                </p>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer my-2 flex flex-col items-center">
        <h1 class="text-4xl text-white text-style">Bounty</h1>
        <div class="w-full">
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <p class="box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac erat massa.
                </p>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Inventory</h1>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">End Turn</h1>
            </div>
        </div>
    </div>
</div>


