import {GameData} from "../model/GameData";

export type RefreshGameAction = {
  "type": string;
  "game": GameData;
}
export default function refreshGameAction(game: GameData): RefreshGameAction {
  // TODO type should be in a seperate enum file
  return { type: "REFRESH_GAME", game}
}

