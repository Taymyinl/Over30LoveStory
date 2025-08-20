import React, { useState, useEffect } from 'react';
import type { GameState, Scene, PlayerChoice, CharacterLine } from './types';
import { getNextScene } from './services/gameService';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);

  useEffect(() => {
    // Automatically start the game on first load
    const initialGameState: GameState = {
      currentSceneId: 'start',
      relationshipScores: {
        poeLay: 0,
        hninPwint: 0,
        thuThuMay: 0,
        wati: 0,
        aungYeMan: 0,
        htunKoKo: 0,
        linKo: 0,
        htetNaing: 0,
        htooAung: 0,
      },
      keyEvents: [],
    };
    
    // Create a dummy choice to kickstart the game to the first scene
    const startChoice: PlayerChoice = { text: 'Start Game', nextSceneId: 'scene_01_bar_ambush' };
    const response = getNextScene(initialGameState, startChoice);

    setGameState(response.updatedGameState);
    setCurrentScene(response.nextScene);
  }, []);

  const handleChoice = (choice: PlayerChoice) => {
    if (!gameState) return;
    
    const response = getNextScene(gameState, choice);
    setGameState(response.updatedGameState);
    setCurrentScene(response.nextScene);
    window.scrollTo(0, 0); // Scroll to top on scene change
  };

  const renderGame = () => {
    if (!currentScene) {
        return null; // Don't render anything until the first scene is loaded
    }
    
    return (
      <div className="p-4 sm:p-8 max-w-3xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex-grow flex flex-col justify-center">
          <div className="space-y-4 mb-8 text-lg leading-relaxed">
              {currentScene.narratorText.map((text, index) => (
                  <p 
                      key={`${currentScene.sceneId}-narrator-${index}`}
                      className="text-gray-300" 
                  >
                    {text}
                  </p>
              ))}

              {currentScene.internalMonologue && (
                  <p
                    key={`${currentScene.sceneId}-monologue`}
                    className="text-cyan-300 italic pl-4 border-l-2 border-cyan-500 my-4" 
                  >
                    {currentScene.internalMonologue}
                  </p>
              )}
              
              {currentScene.dialogue && (
                <div className="space-y-2 mt-4">
                  {currentScene.dialogue.map((line: CharacterLine, index: number) => (
                    <p 
                      key={`${currentScene.sceneId}-dialogue-${index}`}
                      className="text-gray-100"
                    >
                      <span className="font-bold text-cyan-400">{line.character}:</span> {line.line}
                    </p>
                  ))}
                </div>
              )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
        {currentScene.playerChoices.map((choice, index) => (
            <button
            key={index}
            onClick={() => handleChoice(choice)}
            className="w-full text-left p-4 bg-slate-900 hover:bg-cyan-900/50 border border-slate-700 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
            <p className="text-gray-200 text-lg">{choice.text}</p>
            </button>
        ))}
        </div>
      </div>
    );
  };
  
  return (
    <main>
       {renderGame()}
    </main>
  );
};

export default App;
