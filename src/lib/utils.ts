import type { ClientResponse, MessageFromServer } from "./types";

export const SOCKET_URL: string = "wss://hcd-lab.student.rit.edu/socket";

/** Works only in browser */
export function Connect(): WebSocket {
  return new WebSocket(SOCKET_URL);
}
/** Works only in browser. Sends a message to the server. */
export function SendMessage(
  socket: WebSocket,
  message: string | ArrayBufferLike | Blob | ArrayBufferView,
) {
  socket.send(message);
}

/** Parses messages recieved from the server. */
export function ParseServerMessage(message: MessageEvent): ClientResponse {
  let stringMessage = message.data.toString();
  let messageData = stringMessage.split(":");
  switch (<MessageFromServer>messageData[1]) {
    case "clientConnected":
      return { serverMessage: messageData[1] };
    /** returns the name of the newPlayer, the client. */
    case "newPlayer":
      return { serverMessage: messageData[1], player: messageData[2] };
    /** retuns an array of all players. */
    case "allPlayers":
      return { serverMessage: messageData[1], allPlayers: messageData[2] };
    case "gameEvent":
      // TODO trigger the event for each client,
      return { serverMessage: messageData[1] };
    case "gameCalculate":
      // TODO an animation? call that a stretch goal, but do something when the server calculates
      return { serverMessage: messageData[1] };
    case "gameShop":
      // TODO open the shop
      return { serverMessage: messageData[1] };
    case "gameMove":
      // TODO open the move menu
      return { serverMessage: messageData[1] };
    case "gameResolve":
      // TODO show a leaderboard page? just move to next turn? not sure
      return { serverMessage: messageData[1] };
    default:
      return { serverMessage: messageData[1] };
  }
}
