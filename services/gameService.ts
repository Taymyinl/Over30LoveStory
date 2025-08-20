import { gameData } from '../data';
import type { GameState, Scene, PlayerChoice, RelationshipScores } from '../types';

export interface OfflineResponse {
  nextScene: Scene;
  updatedGameState: GameState;
}

export const getNextScene = (
  gameState: GameState,
  playerChoice: PlayerChoice
): OfflineResponse => {
  let nextSceneId = playerChoice.nextSceneId;

  // Check for conditional branches
  if (playerChoice.branches) {
    for (const branch of playerChoice.branches) {
      if (gameState.keyEvents.includes(branch.requiredKeyEvent)) {
        nextSceneId = branch.nextSceneId;
        break; // Use the first matching branch
      }
    }
  }
  
  const nextScene = gameData[nextSceneId];

  if (!nextScene) {
    // Fallback scene for missing data
    return {
      nextScene: {
        sceneId: 'error',
        narratorText: [`Error: Scene with id "${nextSceneId}" not found. The story ends here for now.`],
        playerChoices: []
      },
      updatedGameState: gameState,
    }
  }

  // Create a deep copy of the game state to modify
  const updatedGameState: GameState = JSON.parse(JSON.stringify(gameState));
  updatedGameState.currentSceneId = nextSceneId;

  if (playerChoice.stateUpdates) {
    // Update relationship scores
    if (playerChoice.stateUpdates.relationshipScores) {
      playerChoice.stateUpdates.relationshipScores.forEach(update => {
        if (updatedGameState.relationshipScores.hasOwnProperty(update.character)) {
            updatedGameState.relationshipScores[update.character as keyof RelationshipScores] += update.change;
        }
      });
    }
    // Update key events, avoiding duplicates
    if (playerChoice.stateUpdates.keyEvents) {
      updatedGameState.keyEvents = [
        ...new Set([...updatedGameState.keyEvents, ...playerChoice.stateUpdates.keyEvents])
      ];
    }
  }

  return {
    nextScene,
    updatedGameState,
  };
};