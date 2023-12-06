import {createStore, applyMiddleware, Store} from "redux";
// @ts-ignore
import reduxImmutableStateInvariant from  "redux-immutable-state-invariant";
import leagueReducer from "./leagueReducer";
import {GameData} from "../../game/model/GameData";
import gameClient from "../../clients/gameClient";

const game: GameData = GameData.fromObj(gameClient.getGame());

const leagueStore = createStore(leagueReducer,
  {game},
  applyMiddleware(reduxImmutableStateInvariant()));

export default leagueStore;
