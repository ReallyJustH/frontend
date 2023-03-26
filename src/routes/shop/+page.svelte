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
                <h1 class="text-4xl text-white text-style">Shop</h1>
            </div>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer flex flex-col items-center my-2">
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

    <div class="border border-black w-[300px] p-2 outer flex flex-col items-center my-2">
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col items-center mr-2">
                <div class=" box border border-black flex justify-center p-1 w-[130px]" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">+5</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Atk</h1>
            </div>
            <div class="flex flex-col items-center">
                <div class=" box border border-black flex justify-center p-1 w-[130px]" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">+10</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Def</h1>
            </div>
        </div>

        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col items-center mr-2">
                <div class=" box border border-black flex justify-center p-1 w-[130px] " style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">+4IN</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Range</h1>
            </div>
            <div class="flex flex-col items-center">
                <div class=" box border border-black flex justify-center p-1 w-[130px]" style="background-color: {color} ;">
                    <h1 class="text-4xl text-white text-style">-3IN</h1>
                </div>
                <h1 class="text-4xl text-white text-style">Mov Range</h1>
            </div>
        </div>
    </div>
    
    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Attack!</h1>
            </div>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Defend!</h1>
            </div>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Act!</h1>
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