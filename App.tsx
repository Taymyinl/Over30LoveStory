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

  const parseChoice = (text: string) => {
    const match = text.match(/^(\[.*?\])\s*(.*)/);
    if (match) {
        return { prefix: match[1], main: match[2] };
    }
    return { prefix: null, main: text };
  };

  const renderGame = () => {
    if (!currentScene) {
        return null;
    }
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-lg sm:text-xl leading-relaxed">
            <button className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-700/80 text-gray-300 font-semibold py-2 px-5 rounded-lg border border-slate-600 transition-colors duration-300">
                Save Game
            </button>
            <div className="space-y-6 mb-8" style="padding-top:40px;">
                {currentScene.narratorText.map((text, index) => (
                    <p 
                        key={`${currentScene.sceneId}-narrator-${index}`}
                        className="text-gray-300" 
                    >
                      {text}
                    </p>
                ))}

                {currentScene.internalMonologue && (
                    <blockquote
                      key={`${currentScene.sceneId}-monologue`}
                      className="text-amber-300 italic pl-4 border-l-4 border-amber-400 my-6" 
                    >
                      {currentScene.internalMonologue}
                    </blockquote>
                )}
                
                {currentScene.dialogue && (
                  <div className="space-y-4 mt-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScene.playerChoices.map((choice, index) => {
                const { prefix, main } = parseChoice(choice.text);
                return (
                    <button
                        key={index}
                        onClick={() => handleChoice(choice)}
                        className="w-full text-left p-4 bg-slate-800/50 hover:bg-slate-700/70 border border-slate-600 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        aria-label={choice.text}
                    >
                        <p className="text-gray-200">
                            {prefix && <span className="text-amber-300 mr-2">{prefix}</span>}
                            {main}
                        </p>
                    </button>
                )
            })}
            </div>
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