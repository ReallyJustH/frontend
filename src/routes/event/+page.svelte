<script lang="ts">
	import { SendMessage } from '$lib/utils';
	import { id, thisPlayer, allPlayers, connection } from '$lib/stores';
	import { goto } from '$app/navigation';
</script>

<div>a fun and historically informative event</div>

<button class="text-4xl text-white text-style" on:click={() => goto('/shop')}> Done </button>
