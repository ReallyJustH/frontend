import { writable } from "svelte/store";
import type { Player } from "./types";

export const id = writable<string>();
export const thisPlayer = writable<Player>();
export const allPlayers = writable<Player[]>();
export const connection = writable<WebSocket>();
export let targetPlayer = writable<Player>();