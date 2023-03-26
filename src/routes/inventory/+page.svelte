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

<div class="flex flex-col justify-center w-full items-center p-4 h-screen">
    <div class="border border-black w-[300px] p-2 outer mb-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Inventory</h1>
            </div>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer flex flex-col items-center my-2">
        <div class="flex flex-row justify-end items-end">
            <div class="border border-black w-[140px] h-[140px] mx-2">

            </div>
            <div class=" box border border-black flex justify-center p-1 w-[125px] h-[50px]" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">+5</h1>
            </div>
        </div>
        <h1 class="text-4xl text-white text-style self-start py-1">Pointy Stick</h1>
        <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
            <p class="box-text text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ipsum quis nulla condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac erat massa.
            </p>
        </div>
        <div class="flex flex-row w-full items-center justify-between my-2">
            <h1 class="text-4xl text-white text-style">Uses: 3</h1>
            <div class=" box border border-black flex justify-center p-1 w-[125px] h-[50px]" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Use</h1>
            </div>
        </div>
    </div>
   
    <div class="border border-black w-[300px] p-2 outer my-2 flex flex-row items-center justify-evenly">
        <div class="border border-black w-[45px] h-[45px]">

        </div>
        <div class="flex flex-col mx-1">
            <h3 class="text-xl text-white text-style">Pebble</h3>
            <p class="box-text text-black"> Uses: 3 | Atk + 5</p>
        </div>
        <div class=" box border border-black flex justify-center p-1 w-[65px] h-[40px] items-center" style="background-color: {color} ;">
            <h1 class="text-2xl text-white text-style">Use</h1>
        </div>
    </div>

    <div class="border border-black w-[300px] p-2 outer my-2 flex items-center justify-evenly">
            <div class="border border-black w-[45px] h-[45px]">

            </div>
            <div class="flex flex-col mx-1">
                <h3 class="text-xl text-white text-style">Pebble</h3>
                <p class="box-text text-black"> Uses: 3 | Atk + 5</p>
            </div>
            <div class=" box border border-black flex justify-center p-1 w-[65px] h-[40px] items-center self-end" style="background-color: {color} ;">
                <h1 class="text-2xl text-white text-style">Use</h1>
            </div>
    </div>

    
    <div class="border border-black w-[300px] p-2 outer my-2">
        <div>
            <div class=" box border border-black flex justify-center p-1" style="background-color: {color} ;">
                <h1 class="text-4xl text-white text-style">Return</h1>
            </div>
        </div>
    </div>
</div>