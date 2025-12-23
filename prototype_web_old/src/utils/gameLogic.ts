/**
 * ProjectChimera Game Logic
 * 
 * Core game mechanics, damage calculation, AI behavior,
 * and state management utilities.
 */

import { 
  GameState, 
  Card, 
  EscalationState, 
  GuardedValues, 
  CharacterState, 
  PlayerState, 
  SarahAction,
  DamageResult 
} from '../types/game';

/**
 * Calculate Guarded damage reduction values
 * Based on character's inhibition and clothing state
 */
export function calculateGuarded(character: CharacterState): GuardedValues {
  // If exposed or inhibition is zero, no protection
  if (character.isExposed || character.inhibition === 0) {
    return { upper: 0, lower: 0 };
  }
  
  // Calculate protection based on clothing percentages
  // This represents how much damage is reduced
  return {
    upper: character.clothing.upper,
    lower: character.clothing.lower,
  };
}

/**
 * Calculate actual damage after guard reduction
 * Different card types interact with guard differently
 */
export function calculateDamage(
  baseDamage: number, 
  cardClass: string, 
  guarded: GuardedValues
): number {
  // Verbal and Defensive cards ignore guard
  if (cardClass === 'Verbal' || cardClass === 'Defensive') {
    return baseDamage;
  }
  
  // Physical Upper targets upper guard
  if (cardClass === 'Physical Upper') {
    const reduction = guarded.upper / 100;
    return Math.floor(baseDamage * (1 - reduction));
  }
  
  // Physical Lower and Intimate target lower guard
  if (cardClass === 'Physical Lower' || cardClass === 'Intimate') {
    const reduction = guarded.lower / 100;
    return Math.floor(baseDamage * (1 - reduction));
  }
  
  return baseDamage;
}

/**
 * Apply damage through the three-tier defense system
 * Layer 1: Focus absorbs damage first
 * Layer 2: Inhibition takes damage, affects clothing
 * Layer 3: Composure takes remaining damage
 */
export function applyDamage(
  character: CharacterState, 
  damage: number
): DamageResult {
  const log: string[] = [];
  let remainingDamage = damage;
  
  // Layer 1: Focus absorbs damage
  if (character.focus > 0 && remainingDamage > 0) {
    const absorbed = Math.min(character.focus, remainingDamage);
    character.focus -= absorbed;
    remainingDamage -= absorbed;
    
    if (absorbed > 0) {
      log.push(`Focus absorbed ${absorbed} damage`);
    }
  }
  
  // Layer 2: Inhibition takes damage and affects clothing
  if (remainingDamage > 0 && character.inhibition > 0) {
    const inhibitionDamage = Math.min(character.inhibition, remainingDamage);
    character.inhibition -= inhibitionDamage;
    remainingDamage -= inhibitionDamage;
    
    // Update clothing protection based on remaining inhibition
    const inhibitionPercent = (character.inhibition / character.inhibitionMax) * 100;
    character.clothing.upper = Math.max(0, Math.floor(inhibitionPercent * 0.3));
    character.clothing.lower = Math.max(0, Math.floor(inhibitionPercent * 0.3));
    
    log.push(`Inhibition -${inhibitionDamage} (Protection: ${character.clothing.upper}% upper, ${character.clothing.lower}% lower)`);
    
    // Check for exposure
    if (character.inhibition === 0) {
      character.isExposed = true;
      log.push('⚠️ EXPOSED! Intimate cards now more effective');
    }
  }
  
  // Layer 3: Composure takes remaining damage
  if (remainingDamage > 0) {
    const composureDamage = Math.min(character.composure, remainingDamage);
    character.composure -= composureDamage;
    log.push(`Composure -${composureDamage}`);
  }
  
  return { character, log };
}

/**
 * Determine escalation state based on intensity and exposure
 */
export function getEscalationState(
  intensity: number, 
  sarahExposed: boolean
): EscalationState {
  // Exposure takes priority
  if (sarahExposed) return 'Intimacy';
  
  // Intensity thresholds
  if (intensity >= 50) return 'Embrace';
  if (intensity >= 25) return 'Close Quarters';
  return 'Approach';
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Draw cards from draw pile with reshuffle
 */
export function drawCards(state: GameState, count: number): GameState {
  const newState = { ...state };
  const log: string[] = [];
  
  for (let i = 0; i < count; i++) {
    if (newState.drawPile.length === 0) {
      // Reshuffle discard pile into draw pile
      if (newState.discardPile.length === 0) break;
      newState.drawPile = shuffle(newState.discardPile);
      newState.discardPile = [];
      log.push('Draw pile empty - reshuffling discard pile');
    }
    
    const card = newState.drawPile.shift();
    if (card) {
      newState.hand.push(card);
    }
  }
  
  newState.actionLog = [...log, ...newState.actionLog].slice(0, 8);
  return newState;
}

/**
 * Validate if a card can be played
 */
export function canPlayCard(gameState: GameState, card: Card): boolean {
  if (gameState.gameOver) return false;
  
  // Check AP cost
  if (gameState.player.ap < card.apCost) return false;
  
  // Check resource costs
  if (card.tensionCost && gameState.player.tension < card.tensionCost) return false;
  if (card.arousalCost && gameState.player.arousal < card.arousalCost) return false;
  
  // Check special requirements
  if (card.requiresExposed && !gameState.sarah.isExposed) return false;
  
  return true;
}

/**
 * Sarah's AI action pools
 */
const SARAH_SMALL_ACTIONS: SarahAction[] = [
  { description: "Sarah leans forward, her breath warm against your neck", damage: 3, tensionGain: 2 },
  { description: "Her hand traces slowly along your inner thigh", damage: 4, arousalGain: 3 },
  { description: "She whispers suggestively in your ear", damage: 3, tensionGain: 3 },
  { description: "Her eyes lock with yours with predatory intensity", damage: 2, tensionGain: 2 },
  { description: "She slowly unbuttons her top button, maintaining eye contact", damage: 3, arousalGain: 2 },
  { description: "Her fingers brush against your chest deliberately", damage: 4, arousalGain: 2 },
  { description: "She bites her lower lip while watching you", damage: 2, tensionGain: 3 },
  { description: "Her hand slides up your arm with practiced ease", damage: 3, arousalGain: 2 },
];

const SARAH_MEDIUM_ACTIONS: SarahAction[] = [
  { description: "Sarah positions herself straddling you, her weight settling intimately", damage: 8, arousalGain: 5 },
  { description: "Her hands explore your chest and arms with growing confidence", damage: 7, tensionGain: 4, arousalGain: 3 },
  { description: "She guides your hands to her waist, pressing closer", damage: 8, arousalGain: 6 },
  { description: "She moves close enough for you to feel her body heat radiating", damage: 6, tensionGain: 5, arousalGain: 3 },
  { description: "Sarah grinds against you slowly, watching your reactions", damage: 9, arousalGain: 6 },
  { description: "Her lips trace your jawline as her hands wander", damage: 8, tensionGain: 5, arousalGain: 4 },
];

const SARAH_LARGE_ACTIONS: SarahAction[] = [
  { description: "Sarah takes complete control, positioning you both for maximum vulnerability", damage: 15, arousalGain: 10 },
  { description: "She demonstrates her complete dominance, overwhelming your defenses", damage: 14, tensionGain: 8, arousalGain: 8 },
  { description: "Sarah initiates a full intimate encounter, leaving no room for resistance", damage: 16, arousalGain: 12 },
  { description: "She orchestrates every movement, pushing you to your absolute limits", damage: 15, tensionGain: 7, arousalGain: 10 },
];

/**
 * Generate Sarah's turn actions based on escalation state
 */
export function generateSarahActions(escalationState: EscalationState): SarahAction[] {
  const roll = Math.random();
  const actions: SarahAction[] = [];
  
  // Early game: prefer multiple small actions or medium + small
  if (escalationState === 'Approach' || escalationState === 'Close Quarters') {
    if (roll < 0.6) {
      // 3 small actions (1AP + 1AP + 1AP)
      actions.push(
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)]
      );
    } else {
      // Medium + small (2AP + 1AP)
      actions.push(
        SARAH_MEDIUM_ACTIONS[Math.floor(Math.random() * SARAH_MEDIUM_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)]
      );
    }
  } 
  // Late game: prefer large actions or aggressive combinations
  else {
    if (roll < 0.5) {
      // Large action (3AP)
      actions.push(
        SARAH_LARGE_ACTIONS[Math.floor(Math.random() * SARAH_LARGE_ACTIONS.length)]
      );
    } else if (roll < 0.75) {
      // Medium + small (2AP + 1AP)
      actions.push(
        SARAH_MEDIUM_ACTIONS[Math.floor(Math.random() * SARAH_MEDIUM_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)]
      );
    } else {
      // 3 small actions (1AP + 1AP + 1AP)
      actions.push(
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)],
        SARAH_SMALL_ACTIONS[Math.floor(Math.random() * SARAH_SMALL_ACTIONS.length)]
      );
    }
  }
  
  return actions;
}

/**
 * Apply a single Sarah action to the player
 */
function applySarahAction(player: PlayerState, action: SarahAction): { player: PlayerState; log: string[] } {
  // Create a copy of player state for damage calculation
  const playerCopy: CharacterState = { 
    composure: player.composure,
    composureMax: player.composureMax,
    inhibition: player.inhibition,
    inhibitionMax: player.inhibitionMax,
    focus: player.focus,
    clothing: { ...player.clothing },
    isExposed: player.isExposed
  };
  
  const damageResult = applyDamage(playerCopy, action.damage);
  
  const updatedPlayer: PlayerState = {
    ...player,
    composure: damageResult.character.composure,
    inhibition: damageResult.character.inhibition,
    focus: damageResult.character.focus,
    clothing: damageResult.character.clothing,
    isExposed: damageResult.character.isExposed
  };
  
  const log: string[] = [action.description, ...damageResult.log];
  
  return { player: updatedPlayer, log };
}

/**
 * Process end of turn - Sarah's attack and game progression
 */
export function endTurn(state: GameState): GameState {
  const newState = { ...state };
  const log: string[] = ['--- End Turn ---'];
  
  // Degrade Focus by 50%
  const oldFocus = newState.player.focus;
  newState.player.focus = Math.floor(newState.player.focus / 2);
  if (oldFocus > 0) {
    log.push(`Focus degraded: ${oldFocus} → ${newState.player.focus}`);
  }
  
  // Sarah's turn with AI-generated actions
  const sarahActions = generateSarahActions(newState.escalationState);
  
  for (const action of sarahActions) {
    const result = applySarahAction(newState.player, action);
    newState.player = result.player;
    log.push(...result.log);
    
    // Apply resource gains to player
    if (action.tensionGain) {
      newState.player.tension = Math.min(100, newState.player.tension + action.tensionGain);
    }
    if (action.arousalGain) {
      newState.player.arousal = Math.min(100, newState.player.arousal + action.arousalGain);
    }
  }
  
  // Check lose condition
  if (newState.player.composure <= 0) {
    newState.gameOver = true;
    newState.playerWon = false;
    log.push('💀 DEFEAT! You have been overwhelmed!');
  }
  
  // Reset for next turn
  newState.player.ap = newState.player.apMax;
  newState.turnNumber++;
  
  // Add to action log
  newState.actionLog = [...log, ...newState.actionLog].slice(0, 8);
  
  return newState;
}

/**
 * Play a card from hand
 */
export function playCard(state: GameState, cardId: string): GameState {
  const cardIndex = state.hand.findIndex(c => c.id === cardId);
  if (cardIndex === -1) return state;
  
  const card = state.hand[cardIndex];
  
  // Validate card play
  if (!canPlayCard(state, card)) return state;
  
  const newState = { ...state };
  const log: string[] = [`🎴 Played: ${card.name}`];
  
  // Remove card from hand and add to discard
  newState.hand = newState.hand.filter((_, i) => i !== cardIndex);
  newState.discardPile.push(card);
  
  // Pay costs
  newState.player.ap -= card.apCost;
  if (card.tensionCost) {
    newState.player.tension -= card.tensionCost;
  }
  if (card.arousalCost) {
    newState.player.arousal -= card.arousalCost;
  }
  
  // Apply resource gains
  if (card.tensionGain) {
    newState.player.tension = Math.min(100, newState.player.tension + card.tensionGain);
    log.push(`🔺 Tension +${card.tensionGain}`);
  }
  
  if (card.arousalGain) {
    newState.player.arousal = Math.min(100, newState.player.arousal + card.arousalGain);
    log.push(`❤️ Arousal +${card.arousalGain}`);
  }
  
  if (card.focusGain) {
    newState.player.focus += card.focusGain;
    log.push(`🧠 Focus +${card.focusGain}`);
  }
  
  // Apply damage to Sarah
  if (card.composureDamage) {
    const guarded = calculateGuarded(newState.sarah);
    const actualDamage = calculateDamage(card.composureDamage, card.class, guarded);
    const result = applyDamage(newState.sarah, actualDamage);
    newState.sarah = result.character;
    log.push(...result.log);
    
    // Increase intensity based on damage dealt
    newState.intensity = Math.min(100, newState.intensity + Math.floor(actualDamage / 2));
  }
  
  // Draw cards if specified
  if (card.drawCards) {
    const drawResult = drawCards(newState, card.drawCards);
    Object.assign(newState, drawResult);
    log.push(`🃏 Drew ${card.drawCards} card(s)`);
  }
  
  // Update escalation state
  const newEscalation = getEscalationState(newState.intensity, newState.sarah.isExposed);
  if (newEscalation !== newState.escalationState) {
    log.push(`📈 Escalation: ${newState.escalationState} → ${newEscalation}`);
    newState.escalationState = newEscalation;
  }
  
  // Check win condition
  if (newState.sarah.composure <= 0) {
    newState.gameOver = true;
    newState.playerWon = true;
    log.push('🏆 VICTORY! Sarah has been overwhelmed!');
  }
  
  // Update action log
  newState.actionLog = [...log, ...newState.actionLog].slice(0, 8);
  
  return newState;
}