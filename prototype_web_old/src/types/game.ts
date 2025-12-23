/**
 * ProjectChimera Game Types
 * 
 * Core type definitions for the tactical card game system.
 * All type definitions used throughout the application.
 */

// Game progression states
export type EscalationState = 'Approach' | 'Close Quarters' | 'Embrace' | 'Intimacy';

// Card type classifications
export type CardClass = 'Verbal' | 'Physical Upper' | 'Physical Lower' | 'Intimate' | 'Defensive';

/**
 * Individual card definition with all possible effects
 */
export interface Card {
  id: string;
  name: string;
  class: CardClass;
  apCost: number;
  effect: string;
  
  // Resource gains (positive effects)
  tensionGain?: number;
  arousalGain?: number;
  focusGain?: number;
  drawCards?: number;
  
  // Resource costs (requirements)
  tensionCost?: number;
  arousalCost?: number;
  
  // Combat effects
  composureDamage?: number;
  
  // Special requirements
  requiresExposed?: boolean;
}

/**
 * Character clothing state
 */
export interface ClothingState {
  upper: number; // Percentage 0-100
  lower: number; // Percentage 0-100
}

/**
 * Base character state (shared by player and Sarah)
 */
export interface CharacterState {
  composure: number;
  composureMax: number;
  inhibition: number;
  inhibitionMax: number;
  focus: number;
  clothing: ClothingState;
  isExposed: boolean;
}

/**
 * Extended player state with resources
 */
export interface PlayerState extends CharacterState {
  tension: number;
  tensionMax: number;
  arousal: number;
  arousalMax: number;
  ap: number;
  apMax: number;
}

/**
 * Complete game state
 */
export interface GameState {
  player: PlayerState;
  sarah: CharacterState;
  escalationState: EscalationState;
  intensity: number;
  hand: Card[];
  drawPile: Card[];
  discardPile: Card[];
  actionLog: string[];
  turnNumber: number;
  gameOver: boolean;
  playerWon: boolean | null;
}

/**
 * Guarded damage reduction values
 */
export interface GuardedValues {
  upper: number; // Percentage reduction for upper body
  lower: number; // Percentage reduction for lower body
}

/**
 * Screen size and scaling information
 */
export interface ScreenSize {
  width: number;
  height: number;
  scale: number;
}

/**
 * Scaling utility functions
 */
export interface ScalingUtilities {
  top: (base: number) => string;
  left: (base: number) => string;
  right: (base: number) => string;
  bottom: (base: number) => string;
  width: (base: number) => string;
  height: (base: number) => string;
  fontSize: (base: number) => string;
  padding: (base: number) => string;
  margin: (base: number) => string;
  textSize: (base: number) => string;
}

/**
 * Damage calculation result
 */
export interface DamageResult {
  character: CharacterState;
  log: string[];
}

/**
 * Card play validation result
 */
export interface CardPlayResult {
  canPlay: boolean;
  reason?: string;
}

/**
 * Game event types for logging
 */
export type GameEventType = 
  | 'CARD_PLAYED'
  | 'DAMAGE_DEALT'
  | 'RESOURCE_CHANGED'
  | 'ESCALATION_CHANGED'
  | 'TURN_ENDED'
  | 'GAME_ENDED';

export interface GameEvent {
  type: GameEventType;
  data: any;
  timestamp: number;
}

/**
 * Sarah AI action definitions
 */
export interface SarahAction {
  description: string;
  damage: number;
  tensionGain?: number;
  arousalGain?: number;
  apCost?: number;
}

/**
 * Video background states
 */
export type VideoStatus = 'Loading' | 'Can Play' | 'Playing' | 'Error';

/**
 * Component props interfaces
 */
export interface CardComponentProps {
  card: Card;
  onPlay: (cardId: string) => void;
  canPlay: boolean;
}

export interface GameUIProps {
  gameState: GameState;
  scaled: ScalingUtilities;
  onPlayCard: (cardId: string) => void;
  onEndTurn: () => void;
  onResetGame: () => void;
}

export interface StatsPanelProps {
  character: CharacterState | PlayerState;
  scaled: ScalingUtilities;
  title: string;
  showResources?: boolean;
}