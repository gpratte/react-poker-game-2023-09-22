import React, {createContext, useState} from "react";
import Details from "./Details";
import useGame from "../hooks/useGame";
import '../../common/style/common.css'
import {Accordion} from "react-bootstrap";
import GamePlayers from "./GamePlayers";
import Loading from "../../common/components/Loading";
import {GameData} from "../model/GameData";

export interface GameContextType {
  game: GameData;
  refreshGame: () => void;
  showAddPlayer: boolean;
  setShowAddPlayer: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameContext = createContext<GameContextType | null>(null);

function Game() {

  const {
    game,
    refreshGame,
    isLoading,
    showAddPlayer,
    setShowAddPlayer
  } = useGame();

  const [detailsAccordionOpen, setDetailsAccordionOpen] = useState(true)

  return (
    <GameContext.Provider value={{game, refreshGame, showAddPlayer, setShowAddPlayer}}>
      <Loading isLoading={isLoading}/>
      <div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Button onClick={() => setDetailsAccordionOpen(!detailsAccordionOpen)}>
              Details {detailsAccordionOpen && <i className="fa-solid fa-chevron-up"></i>}{!detailsAccordionOpen &&
              <i className="fa-solid fa-chevron-down"></i>}
            </Accordion.Button>
            <Accordion.Body>
              <Details game={game}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <GamePlayers />
      </div>
    </GameContext.Provider>
  )
}

export default Game;
