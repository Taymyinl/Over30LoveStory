export interface RelationshipScores {
  poeLay: number;
  hninPwint: number;
  thuThuMay: number;
  wati: number;
  aungYeMan: number;
  htunKoKo: number;
  linKo: number;
  htetNaing: number;
  htooAung: number;
}

export interface GameState {
  currentSceneId: string;
  relationshipScores: RelationshipScores;
  keyEvents: string[];
}

export interface RelationshipScoreUpdate {
  character: keyof RelationshipScores;
  change: number;
}

export interface PlayerChoice {
  text: string;
  nextSceneId: string;
  stateUpdates?: {
    relationshipScores?: RelationshipScoreUpdate[];
    keyEvents?: string[];
  };
}

export interface CharacterLine {
  character: string;
  line: string;
}

export interface Scene {
  sceneId: string;
  narratorText: string[];
  internalMonologue?: string;
  dialogue?: CharacterLine[];
  playerChoices: PlayerChoice[];
}
