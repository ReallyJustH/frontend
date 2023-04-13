export type MessageFromServer =
  | "clientConnected"
  | "newPlayer"
  | "allPlayers"
  | "gameEvent"
  | "gameCalculate"
  | "gameShop"
  | "gameMove"
  | "gameResolve";

export interface Item {
  name: string;
  description: string;
  consumable: boolean;
  numUses: number;
  price: number;
  effect: Effect;
}

export type AffectedStats = "Attack" | "Defend" | "Range";
export type EffectType = "additive" | "multiplicative";

export interface Effect {
  stat: AffectedStats;
  type: EffectType;
  amount: number;
}

export type PlayerStance = "Attack" | "Defend" | "Act" | null;

export interface Player {
  id: string;
  stance: PlayerStance;
  value: number;
  items: Item[];
  readyState: boolean;
  baseStatAttack: number;
  baseStatDefend: number;
  playerAlive: boolean;
}

export interface ClientResponse {
  serverMessage: MessageFromServer;
  clientId?: string;
  player?: Player;
  allPlayers?: Player[];
  item?: Item;
}
