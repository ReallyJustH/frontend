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
}

export type PlayerStance = "Attack" | "Defend" | "Act" | null;

export interface Player {
  id: string;
  stance: PlayerStance;
  value: number;
  items: Item[];
  readyState: boolean;
}

export interface ClientResponse {
  serverMessage: MessageFromServer,
  player?: Player,
  allPlayers?: Player[],
  item?: Item
}