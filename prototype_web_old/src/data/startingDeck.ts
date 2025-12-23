/**
 * ProjectChimera Starting Deck
 * 
 * Complete 20-card starting deck based on LDD design document.
 * All cards with their effects, costs, and classifications.
 */

import { Card } from '../types/game';

/**
 * Starting deck containing 20 cards across all card classes
 * 
 * Card distribution:
 * - Verbal: 6 cards (Make Her Blush x2, Whisper Promise, Read Body x2, Seductive Distraction, Sensory Overload)
 * - Physical Lower: 3 cards (Caress Thigh x2, Tactile Override, Firm Boundaries)
 * - Physical Upper: 3 cards (Fondle Breasts, Final Stand, Breaking Point)
 * - Defensive: 6 cards (Steel Nerves x2, Resist Temptation, Mental Fortress, Reflex Training, Controlled Breathing)
 */
export const STARTING_DECK: Card[] = [
  // === VERBAL CARDS (6 cards) ===
  
  // Make Her Blush (x2)
  {
    id: 'make_her_blush_1',
    name: 'Make Her Blush',
    class: 'Verbal',
    apCost: 1,
    effect: 'Deal 4 Composure damage to Sarah. Generate 5 Tension for yourself.',
    composureDamage: 4,
    tensionGain: 5,
  },
  {
    id: 'make_her_blush_2',
    name: 'Make Her Blush',
    class: 'Verbal',
    apCost: 1,
    effect: 'Deal 4 Composure damage to Sarah. Generate 5 Tension for yourself.',
    composureDamage: 4,
    tensionGain: 5,
  },
  
  // Whisper a Filthy Promise (x1)
  {
    id: 'whisper_promise',
    name: 'Whisper a Filthy Promise',
    class: 'Verbal',
    apCost: 2,
    effect: 'Cost: 15 Tension. Deal 16 Composure damage to Sarah.',
    tensionCost: 15,
    composureDamage: 16,
  },
  
  // Read Her Body Language (x2)
  {
    id: 'read_body_1',
    name: 'Read Her Body Language',
    class: 'Verbal',
    apCost: 0,
    effect: 'Generate 2 Tension and 2 Arousal. Draw 1 card from your deck.',
    tensionGain: 2,
    arousalGain: 2,
    drawCards: 1,
  },
  {
    id: 'read_body_2',
    name: 'Read Her Body Language',
    class: 'Verbal',
    apCost: 0,
    effect: 'Generate 2 Tension and 2 Arousal. Draw 1 card from your deck.',
    tensionGain: 2,
    arousalGain: 2,
    drawCards: 1,
  },
  
  // Seductive Distraction (x1)
  {
    id: 'seductive_distraction',
    name: 'Seductive Distraction',
    class: 'Verbal',
    apCost: 2,
    effect: 'Deal 10 Composure damage to Sarah. Generate 8 Tension for yourself.',
    composureDamage: 10,
    tensionGain: 8,
  },
  
  // Sensory Overload (x1)
  {
    id: 'sensory_overload',
    name: 'Sensory Overload',
    class: 'Verbal',
    apCost: 2,
    effect: 'Deal 14 Composure damage to Sarah. Generate 6 Tension for yourself.',
    composureDamage: 14,
    tensionGain: 6,
  },
  
  // === PHYSICAL LOWER CARDS (3 cards) ===
  
  // Caress Her Thigh (x2)
  {
    id: 'caress_thigh_1',
    name: 'Caress Her Thigh',
    class: 'Physical Lower',
    apCost: 1,
    effect: 'Deal 8 Composure damage to Sarah (reduced by lower clothing guard). Generate 4 Arousal.',
    composureDamage: 8,
    arousalGain: 4,
  },
  {
    id: 'caress_thigh_2',
    name: 'Caress Her Thigh',
    class: 'Physical Lower',
    apCost: 1,
    effect: 'Deal 8 Composure damage to Sarah (reduced by lower clothing guard). Generate 4 Arousal.',
    composureDamage: 8,
    arousalGain: 4,
  },
  
  // Tactile Override (x1)
  {
    id: 'tactile_override',
    name: 'Tactile Override',
    class: 'Physical Lower',
    apCost: 3,
    effect: 'Deal 20 Composure damage to Sarah. Generate 5 Tension and 5 Arousal.',
    composureDamage: 20,
    tensionGain: 5,
    arousalGain: 5,
  },
  
  // Firm Boundaries (x1)
  {
    id: 'firm_boundaries',
    name: 'Firm Boundaries',
    class: 'Physical Lower',
    apCost: 2,
    effect: 'Deal 10 Composure damage to Sarah. Gain 6 Focus for yourself.',
    composureDamage: 10,
    focusGain: 6,
  },
  
  // === PHYSICAL UPPER CARDS (3 cards) ===
  
  // Fondle Her Breasts (x1)
  {
    id: 'fondle_breasts',
    name: 'Fondle Her Breasts',
    class: 'Physical Upper',
    apCost: 1,
    effect: 'Cost: 12 Arousal. Deal 22 Composure damage to Sarah (reduced by upper clothing guard).',
    arousalCost: 12,
    composureDamage: 22,
  },
  
  // Final Stand (x1)
  {
    id: 'final_stand',
    name: 'Final Stand',
    class: 'Physical Upper',
    apCost: 2,
    effect: 'Deal 12 Composure damage to Sarah. Gain 12 Focus for yourself.',
    composureDamage: 12,
    focusGain: 12,
  },
  
  // Breaking Point (x1)
  {
    id: 'breaking_point',
    name: 'Breaking Point',
    class: 'Physical Upper',
    apCost: 3,
    effect: 'Cost: 20 Arousal. Deal 35 Composure damage to Sarah.',
    arousalCost: 20,
    composureDamage: 35,
  },
  
  // === DEFENSIVE CARDS (6 cards) ===
  
  // Steel Your Nerves (x2)
  {
    id: 'steel_nerves_1',
    name: 'Steel Your Nerves',
    class: 'Defensive',
    apCost: 1,
    effect: 'Gain 8 Focus for yourself. Focus absorbs incoming damage before other defenses.',
    focusGain: 8,
  },
  {
    id: 'steel_nerves_2',
    name: 'Steel Your Nerves',
    class: 'Defensive',
    apCost: 1,
    effect: 'Gain 8 Focus for yourself. Focus absorbs incoming damage before other defenses.',
    focusGain: 8,
  },
  
  // Resist Temptation (x1)
  {
    id: 'resist_temptation',
    name: 'Resist Temptation',
    class: 'Defensive',
    apCost: 2,
    effect: 'Gain 15 Focus for yourself. Focus absorbs incoming damage before other defenses.',
    focusGain: 15,
  },
  
  // Mental Fortress (x1)
  {
    id: 'mental_fortress',
    name: 'Mental Fortress',
    class: 'Defensive',
    apCost: 2,
    effect: 'Gain 20 Focus for yourself. Focus absorbs incoming damage before other defenses.',
    focusGain: 20,
  },
  
  // Reflex Training (x1)
  {
    id: 'reflex_training',
    name: 'Reflex Training',
    class: 'Defensive',
    apCost: 1,
    effect: 'Draw 2 cards from your deck. Generate 3 Tension for yourself.',
    drawCards: 2,
    tensionGain: 3,
  },
  
  // Controlled Breathing (x1)
  {
    id: 'controlled_breathing',
    name: 'Controlled Breathing',
    class: 'Defensive',
    apCost: 1,
    effect: 'Gain 10 Focus for yourself. Generate 2 Arousal for yourself.',
    focusGain: 10,
    arousalGain: 2,
  },
];

/**
 * Get cards by class
 */
export const getCardsByClass = (cardClass: string): Card[] => {
  return STARTING_DECK.filter(card => card.class === cardClass);
};

/**
 * Get cards that require exposed target
 */
export const getExposedCards = (): Card[] => {
  return STARTING_DECK.filter(card => card.requiresExposed);
};

/**
 * Get zero-cost cards
 */
export const getZeroCostCards = (): Card[] => {
  return STARTING_DECK.filter(card => card.apCost === 0);
};

/**
 * Get high-cost cards
 */
export const getHighCostCards = (): Card[] => {
  return STARTING_DECK.filter(card => card.apCost >= 2);
};

/**
 * Get all unique card names (for deck building)
 */
export const getUniqueCardNames = (): string[] => {
  const names = [...new Set(STARTING_DECK.map(card => card.name))];
  return names.sort();
};

/**
 * Get card counts by class
 */
export const getCardCountsByClass = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  STARTING_DECK.forEach(card => {
    counts[card.class] = (counts[card.class] || 0) + 1;
  });
  return counts;
};

/**
 * Deck statistics
 */
export const getDeckStatistics = () => {
  const totalCards = STARTING_DECK.length;
  const classCounts = getCardCountsByClass();
  const avgApCost = STARTING_DECK.reduce((sum, card) => sum + card.apCost, 0) / totalCards;
  const zeroCostCount = getZeroCostCards().length;
  
  return {
    totalCards,
    classCounts,
    avgApCost: Number(avgApCost.toFixed(2)),
    zeroCostCount,
    deckComposition: {
      'Verbal': `${((classCounts['Verbal'] || 0) / totalCards * 100).toFixed(1)}%`,
      'Physical Lower': `${((classCounts['Physical Lower'] || 0) / totalCards * 100).toFixed(1)}%`,
      'Physical Upper': `${((classCounts['Physical Upper'] || 0) / totalCards * 100).toFixed(1)}%`,
      'Defensive': `${((classCounts['Defensive'] || 0) / totalCards * 100).toFixed(1)}%`,
    }
  };
};