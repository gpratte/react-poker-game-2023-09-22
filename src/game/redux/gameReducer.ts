import {GameData} from "../model/GameData";
import {RefreshGameAction} from "./refreshGameAction";

export default function gameReducer(state: GameData | undefined | null, action: RefreshGameAction): GameData | null {
  if (state === undefined) {
    state = null;
  }
  // TODO don't need a switch stmt yet
  switch (action.type) {
    case "REFRESH_GAME":
      return action.game;
    default:
      return state;
  }
}