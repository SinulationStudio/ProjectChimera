/**
 * Card Component
 * 
 * Interactive card display with hover effects, play validation,
 * and dynamic styling based on card class and playability.
 */

import React, { useState } from 'react';
import { Card as CardType } from '../types/game';

interface CardComponentProps {
  card: CardType;
  onPlay: (cardId: string) => void;
  canPlay: boolean;
}

/**
 * Get card class colors for visual distinction
 */
const getCardClassColor = (cardClass: string): string => {
  switch (cardClass) {
    case 'Verbal':
      return {
        border: 'border-orange-400',
        background: 'bg-orange-900/50',
        accent: 'text-orange-300',
        glow: 'shadow-orange-400/50'
      };
    case 'Physical Upper':
      return {
        border: 'border-pink-400',
        background: 'bg-pink-900/50',
        accent: 'text-pink-300',
        glow: 'shadow-pink-400/50'
      };
    case 'Physical Lower':
      return {
        border: 'border-purple-400',
        background: 'bg-purple-900/50',
        accent: 'text-purple-300',
        glow: 'shadow-purple-400/50'
      };
    case 'Intimate':
      return {
        border: 'border-red-400',
        background: 'bg-red-900/50',
        accent: 'text-red-300',
        glow: 'shadow-red-400/50'
      };
    case 'Defensive':
      return {
        border: 'border-blue-400',
        background: 'bg-blue-900/50',
        accent: 'text-blue-300',
        glow: 'shadow-blue-400/50'
      };
    default:
      return {
        border: 'border-gray-400',
        background: 'bg-gray-900/50',
        accent: 'text-gray-300',
        glow: 'shadow-gray-400/50'
      };
  }
};

/**
 * Format resource values for display
 */
const formatResourceValue = (value: number): string => {
  return value > 0 ? `+${value}` : `${value}`;
};

/**
 * Format cost values for display
 */
const formatCostValue = (value: number): string => {
  return `-${value}`;
};

/**
 * Main Card Component
 */
export const Card: React.FC<CardComponentProps> = ({ card, onPlay, canPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = getCardClassColor(card.class);
  
  const handleClick = () => {
    if (canPlay) {
      onPlay(card.id);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`
        relative transition-all duration-200 cursor-pointer select-none
        ${canPlay ? 'hover:scale-105' : 'opacity-50 cursor-not-allowed'}
        ${isHovered && canPlay ? `transform -translate-y-4 ${colors.glow}` : ''}
        ${isHovered ? 'z-20' : 'z-10'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={canPlay ? 0 : -1}
      role="button"
      aria-label={`${card.name} card - ${canPlay ? 'playable' : 'not playable'}`}
    >
      <div
        className={`
          w-32 rounded-lg p-2 border-2 backdrop-blur-sm shadow-lg
          transition-all duration-200
          ${colors.border} ${colors.background}
          ${isHovered && canPlay ? `shadow-2xl ${colors.glow}` : ''}
          ${canPlay ? 'hover:shadow-2xl' : ''}
        `}
      >
        {/* Card Name */}
        <div className="text-white font-bold text-xs mb-1 text-center leading-tight">
          {card.name}
        </div>
        
        {/* Card Class Badge */}
        <div className={`${colors.accent} text-xs text-center mb-2 font-medium`}>
          {card.class}
        </div>
        
        {/* AP Cost */}
        <div className="text-yellow-300 text-xs text-center mb-2 font-semibold">
          AP: {card.apCost}
        </div>
        
        {/* Card Effects Display */}
        <div className="text-white/90 text-xs">
          {/* Compact view (when not hovered) */}
          {!isHovered && (
            <div className="text-center">
              {/* Show key stats in compact format */}
              <div className="space-y-0.5">
                {card.composureDamage && (
                  <div className="text-red-300 font-medium">
                    {card.composureDamage} dmg
                  </div>
                )}
                {card.tensionGain && (
                  <div className="text-orange-300">
                    T +{card.tensionGain}
                  </div>
                )}
                {card.arousalGain && (
                  <div className="text-pink-300">
                    A +{card.arousalGain}
                  </div>
                )}
                {card.focusGain && (
                  <div className="text-blue-300">
                    F +{card.focusGain}
                  </div>
                )}
                {card.tensionCost && (
                  <div className="text-red-400">
                    T {formatCostValue(card.tensionCost)}
                  </div>
                )}
                {card.arousalCost && (
                  <div className="text-pink-400">
                    A {formatCostValue(card.arousalCost)}
                  </div>
                )}
                {card.drawCards && (
                  <div className="text-green-300">
                    Draw {card.drawCards}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Expanded view (when hovered) */}
          {isHovered && (
            <div className="space-y-1">
              {/* Full effect description */}
              <div className="border-t border-white/20 pt-2">
                <div className="text-white/90 leading-tight">
                  {card.effect}
                </div>
              </div>
              
              {/* Detailed stats breakdown */}
              <div className="border-t border-white/20 pt-2 space-y-0.5">
                {/* Damage section */}
                {card.composureDamage && (
                  <div className="flex justify-between">
                    <span className="text-red-300">Damage:</span>
                    <span className="text-red-300 font-bold">{card.composureDamage}</span>
                  </div>
                )}
                
                {/* Gains section */}
                {(card.tensionGain || card.arousalGain || card.focusGain || card.drawCards) && (
                  <div>
                    <span className="text-green-400 text-xs font-semibold">Gains:</span>
                    {card.tensionGain && (
                      <div className="flex justify-between">
                        <span className="text-orange-300">Tension:</span>
                        <span className="text-orange-300">{formatResourceValue(card.tensionGain)}</span>
                      </div>
                    )}
                    {card.arousalGain && (
                      <div className="flex justify-between">
                        <span className="text-pink-300">Arousal:</span>
                        <span className="text-pink-300">{formatResourceValue(card.arousalGain)}</span>
                      </div>
                    )}
                    {card.focusGain && (
                      <div className="flex justify-between">
                        <span className="text-blue-300">Focus:</span>
                        <span className="text-blue-300">{formatResourceValue(card.focusGain)}</span>
                      </div>
                    )}
                    {card.drawCards && (
                      <div className="flex justify-between">
                        <span className="text-green-300">Draw:</span>
                        <span className="text-green-300">{card.drawCards}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Costs section */}
                {(card.tensionCost || card.arousalCost) && (
                  <div>
                    <span className="text-red-400 text-xs font-semibold">Costs:</span>
                    {card.tensionCost && (
                      <div className="flex justify-between">
                        <span className="text-orange-400">Tension:</span>
                        <span className="text-orange-400">{formatCostValue(card.tensionCost)}</span>
                      </div>
                    )}
                    {card.arousalCost && (
                      <div className="flex justify-between">
                        <span className="text-pink-400">Arousal:</span>
                        <span className="text-pink-400">{formatCostValue(card.arousalCost)}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Special requirements */}
                {card.requiresExposed && (
                  <div className="text-red-400 text-xs font-semibold border-t border-white/20 pt-1">
                    ⚠️ Requires: Sarah Exposed
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Playable indicator */}
        {canPlay && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        )}
        
        {/* Not playable indicator */}
        {!canPlay && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-600 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default Card;