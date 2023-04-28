export type MessageFromServer =
	| 'clientConnected'
	| 'newPlayer'
	| 'allPlayers'
	| 'playerDeath'
	| 'shopItems'
	| 'event'
	| 'gameCreated'
	| 'gameEvent'
	| 'gameCalculate'
	| 'gameShop'
	| 'gameMove'
	| 'gameStance'
	| 'gameResolve';

export default interface Item {
	name: string;
	description: string;
	consumable: boolean;
	numUses?: number;
	price: number;
	rarity: Rarity;
	effect: Effect;
}

/** The rarity of the items, how commonly they appear in the shop */
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary';

/** The stat that the item effects */
export type AffectedStats = 'Attack' | 'Defend' | 'Range' | 'Value';
/** the type of effect */
export type EffectType = 'additive' | 'multiplicative';

/** The effected stat, type, and volume of the change */
export interface Effect {
	stat: AffectedStats;
	type: EffectType;
	amount: number;
}

export type PlayerStance = 'Attack' | 'Defend' | 'Act' | null;

export interface Player {
	id: string;
	stance: PlayerStance;
	value: number;
	items: Item[];
	readyState: boolean;
	statAttack: number;
	statDefend: number;
	playerAlive: boolean;
}

export interface yearlyEvent {
	year: number;
	description: string;
	direction: "positive" | "negative";
	amount: number;
	turn: number;
	decay: number;
}

export interface ClientResponse {
	serverMessage: MessageFromServer;
	clientId?: string;
	player?: Player;
	allPlayers?: Player[];
	deadPlayers?: Player[];
	items?: Item[];
	yearlyEvent?: yearlyEvent;
}
