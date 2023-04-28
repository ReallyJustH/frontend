import { writable } from 'svelte/store';
import type { Player } from './types';
import type Item from './types';

export const id = writable<string>();
export const thisPlayer = writable<Player>();
export const allPlayers = writable<Player[]>();
export const shopItems = writable<Item[]>();
export const deadPlayers = writable<Player[]>();
export const connection = writable<WebSocket>();
export let targetPlayer = writable<Player>();
export let pageName = writable<string>();
export const yearlyEvent = writable<yearlyEvent>();
