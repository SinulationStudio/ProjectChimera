/**
 * ProjectChimera Main Game Component
 * 
 * Complete tactical card game with responsive UI scaling,
 * animated backgrounds, and full game mechanics.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Card } from './components/Card';
import { STARTING_DECK } from './data/startingDeck';
import { 
  GameState, 
  PlayerState, 
  CharacterState, 
  EscalationState, 
  Card as CardType,
  ScreenSize,
  ScalingUtilities,
  VideoStatus
} from './types/game';
import { 
  applyDamage, 
  calculateDamage, 
  calculateGuarded, 
  getEscalationState,
  canPlayCard,
  playCard,
  endTurn
} from './utils/gameLogic';

function App() {
  // === VIDEO BACKGROUND STATES ===
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoStatus, setVideoStatus] = useState<VideoStatus>('Loading');
  const [userInteraction, setUserInteraction] = useState<boolean>(false);
  const [videoStarted, setVideoStarted] = useState<boolean>(false);

  // === RESPONSIVE SCALING STATES ===
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 1
  });

  // Calculate and update scaling factor based on screen size
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Base design optimized for 1920x1080 (desktop)
      const baseWidth = 1920;
      const baseHeight = 1080;
      
      // Use the smaller scale factor to ensure everything fits
      const widthScale = width / baseWidth;
      const heightScale = height / baseHeight;
      
      // Clamp scale between 0.5 (very small screens) and 1.5 (very large screens)
      const scale = Math.max(0.5, Math.min(1.5, Math.min(widthScale, heightScale)));
      
      setScreenSize({
        width,
        height,
        scale
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // === SCALING UTILITIES ===
  const scaled: ScalingUtilities = {
    // Position utilities
    top: (base: number) => `${base * screenSize.scale}px`,
    left: (base: number) => `${base * screenSize.scale}px`,
    right: (base: number) => `calc(100vw - ${base * screenSize.scale}px)`,
    bottom: (base: number) => `calc(100vh - ${base * screenSize.scale}px)`,
    
    // Size utilities
    width: (base: number) => `${base * screenSize.scale}px`,
    height: (base: number) => `${base * screenSize.scale}px`,
    
    // Typography utilities
    fontSize: (base: number) => `clamp(${base * 0.7}px, ${base * screenSize.scale}px, ${base * 1.2}px)`,
    
    // Spacing utilities
    padding: (base: number) => `${base * screenSize.scale}px`,
    margin: (base: number) => `${base * screenSize.scale}px`,
    
    // Text size classes for Tailwind
    textSize: (base: number) => {
      if (screenSize.scale < 0.7) return 'text-xs';
      if (screenSize.scale < 0.9) return 'text-sm';
      if (screenSize.scale < 1.2) return 'text-base';
      return 'text-lg';
    }
  };

  // === GAME STATE ===
  const [gameState, setGameState] = useState<GameState>(() => ({
    player: {
      composure: 100,
      composureMax: 100,
      inhibition: 75,
      inhibitionMax: 75,
      focus: 0,
      clothing: { upper: 100, lower: 100 },
      isExposed: false,
      tension: 0,
      tensionMax: 100,
      arousal: 0,
      arousalMax: 100,
      ap: 3,
      apMax: 3,
    },
    sarah: {
      composure: 100,
      composureMax: 100,
      inhibition: 75,
      inhibitionMax: 75,
      focus: 0,
      clothing: { upper: 100, lower: 100 },
      isExposed: false,
    },
    escalationState: 'Approach',
    intensity: 0,
    hand: [...STARTING_DECK],
    drawPile: [],
    discardPile: [],
    actionLog: ['Game started! Begin your approach to Sarah.'],
    turnNumber: 1,
    gameOver: false,
    playerWon: null,
  }));

  // === VIDEO HANDLERS ===
  const logVideoDebug = (message: string) => {
    console.log(`🎬 Video Debug: ${message}`);
  };

  const startVideo = async () => {
    if (videoRef.current && !videoStarted) {
      try {
        console.log('🎬 Attempting to start video with user interaction');
        setVideoStarted(true);
        await videoRef.current.play();
        logVideoDebug('Video started successfully with user interaction');
        setVideoStatus('Playing');
      } catch (error) {
        console.error('❌ Failed to start video:', error);
        logVideoDebug(`Failed to start: ${error}`);
      }
    }
  };

  const handleUserInteraction = () => {
    setUserInteraction(true);
    startVideo();
  };

  const handleCanPlay = () => {
    setVideoStatus('Can Play');
    logVideoDebug('Can play');
    
    if (userInteraction && videoRef.current) {
      videoRef.current.play().catch(e => {
        logVideoDebug(`Auto-play failed: ${e.message}`);
      });
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const error = video.error;
    const errorMessage = error ? `Error: ${error.code}` : 'Unknown error';
    setVideoError(errorMessage);
    setVideoStatus('Error');
    console.error('❌ Video error:', error);
    logVideoDebug(`Error: ${errorMessage}`);
  };

  // === GAME FUNCTIONS ===
  const checkCanPlayCard = (card: CardType): boolean => {
    return canPlayCard(gameState, card);
  };

  const handlePlayCard = (cardId: string) => {
    setGameState(prevState => playCard(prevState, cardId));
  };

  const handleEndTurn = () => {
    setGameState(prevState => endTurn(prevState));
  };

  const handleResetGame = () => {
    setGameState({
      player: {
        composure: 100,
        composureMax: 100,
        inhibition: 75,
        inhibitionMax: 75,
        focus: 0,
        clothing: { upper: 100, lower: 100 },
        isExposed: false,
        tension: 0,
        tensionMax: 100,
        arousal: 0,
        arousalMax: 100,
        ap: 3,
        apMax: 3,
      },
      sarah: {
        composure: 100,
        composureMax: 100,
        inhibition: 75,
        inhibitionMax: 75,
        focus: 0,
        clothing: { upper: 100, lower: 100 },
        isExposed: false,
      },
      escalationState: 'Approach',
      intensity: 0,
      hand: [...STARTING_DECK],
      drawPile: [],
      discardPile: [],
      actionLog: ['Game reset! Begin your approach to Sarah.'],
      turnNumber: 1,
      gameOver: false,
      playerWon: null,
    });
    setUserInteraction(false);
    setVideoStarted(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* === VIDEO BACKGROUND === */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ 
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            opacity: 1,
            display: 'block',
            backgroundColor: 'transparent'
          }}
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          <source src="/videos/infinite_loop_perfect_v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* === USER INTERACTION PROMPT === */}
      {!userInteraction && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-50"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <div className="bg-white/95 p-8 rounded-lg text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">ProjectChimera</h2>
            <p className="text-gray-700 mb-4">
              An adult tactical card game with responsive design. Click to begin.
            </p>
            <div className="text-xs text-gray-500 mb-4">
              Scale: {screenSize.scale.toFixed(2)}x | Screen: {screenSize.width}x{screenSize.height}
            </div>
            <button 
              onClick={handleUserInteraction}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {/* === GAME UI OVERLAY === */}
      {userInteraction && !gameState.gameOver && (
        <>
          {/* === PLAYER STATUS - TOP LEFT === */}
          <div 
            className="absolute z-10 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            style={{
              top: scaled.top(24),
              left: scaled.left(24),
              width: scaled.width(208),
              padding: scaled.padding(16)
            }}
          >
            <div className={`text-white ${scaled.textSize(14)}`}>
              {/* Composure */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Composure</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.player.composure}/{gameState.player.composureMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-300"
                    style={{ width: `${(gameState.player.composure / gameState.player.composureMax) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Inhibition */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Inhibition</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.player.inhibition}/{gameState.player.inhibitionMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${(gameState.player.inhibition / gameState.player.inhibitionMax) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Clothing Status */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Upper Clothing</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {Math.floor(gameState.player.clothing.upper)}%
                  </span>
                </div>
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Lower Clothing</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {Math.floor(gameState.player.clothing.lower)}%
                  </span>
                </div>
              </div>
              
              {/* Tension */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Tension</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.player.tension}/{gameState.player.tensionMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className={`h-full transition-all duration-300 ${
                      gameState.player.tension > 0 
                        ? 'bg-gradient-to-r from-red-500 to-orange-500' 
                        : 'bg-transparent border border-white/30'
                    }`}
                    style={{ 
                      width: gameState.player.tension > 0 
                        ? `${(gameState.player.tension / gameState.player.tensionMax) * 100}%` 
                        : '0%'
                    }}
                  />
                </div>
              </div>
              
              {/* Arousal */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Arousal</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.player.arousal}/{gameState.player.arousalMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className={`h-full transition-all duration-300 ${
                      gameState.player.arousal > 0 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                        : 'bg-transparent border border-white/30'
                    }`}
                    style={{ 
                      width: gameState.player.arousal > 0 
                        ? `${(gameState.player.arousal / gameState.player.arousalMax) * 100}%` 
                        : '0%'
                    }}
                  />
                </div>
              </div>
              
              {/* AP Orbs */}
              <div className="mb-0">
                <div 
                  className="text-xs mb-1"
                  style={{ 
                    fontSize: scaled.fontSize(12),
                    marginBottom: scaled.margin(4)
                  }}
                >
                  AP Orbs
                </div>
                <div 
                  className="flex"
                  style={{ gap: scaled.margin(4) }}
                >
                  {Array.from({ length: gameState.player.apMax }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full border transition-all duration-200 ${
                        i < gameState.player.ap
                          ? 'bg-cyan-400 border-cyan-200 shadow-sm shadow-cyan-400/50'
                          : 'bg-gray-800 border-gray-600'
                      }`}
                      style={{
                        width: scaled.width(20),
                        height: scaled.height(20)
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* === SARAH'S STATUS - TOP RIGHT === */}
          <div 
            className="absolute z-10 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            style={{
              top: scaled.top(24),
              right: scaled.right(24),
              width: scaled.width(208),
              padding: scaled.padding(16)
            }}
          >
            <div className={`text-white ${scaled.textSize(14)}`}>
              {/* Composure */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Composure</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.sarah.composure}/{gameState.sarah.composureMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-300"
                    style={{ width: `${(gameState.sarah.composure / gameState.sarah.composureMax) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Inhibition */}
              <div 
                className="mb-3"
                style={{ marginBottom: scaled.margin(12) }}
              >
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Inhibition</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {gameState.sarah.inhibition}/{gameState.sarah.inhibitionMax}
                  </span>
                </div>
                <div 
                  className="w-full bg-gray-700/50 rounded-full overflow-hidden"
                  style={{ height: scaled.height(8) }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${(gameState.sarah.inhibition / gameState.sarah.inhibitionMax) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Clothing Status */}
              <div className="mb-0">
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Upper Clothing</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {Math.floor(gameState.sarah.clothing.upper)}%
                  </span>
                </div>
                <div 
                  className="flex justify-between mb-1"
                  style={{ marginBottom: scaled.margin(4) }}
                >
                  <span style={{ fontSize: scaled.fontSize(14) }}>Lower Clothing</span>
                  <span style={{ fontSize: scaled.fontSize(14) }}>
                    {Math.floor(gameState.sarah.clothing.lower)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* === ACTION LOG - BOTTOM LEFT === */}
          <div 
            className="absolute z-10 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
            style={{
              bottom: scaled.bottom(24),
              left: scaled.left(24),
              width: scaled.width(256)
            }}
          >
            <div 
              className="text-white font-medium mb-2"
              style={{ fontSize: scaled.fontSize(14) }}
            >
              Recent Actions
            </div>
            <div className={`text-white action-log ${scaled.textSize(12)} space-y-1 max-h-16 overflow-hidden`}>
              {gameState.actionLog.slice(0, 3).map((action, index) => (
                <div key={index} className="opacity-80">{action}</div>
              ))}
            </div>
          </div>

          {/* === TIMELINE - TOP CENTER === */}
          <div 
            className="absolute z-10"
            style={{ top: scaled.top(24) }}
          >
            <div className="flex space-x-4">
              {['Approach', 'Close Quarters', 'Embrace', 'Intimacy'].map((stage, index) => (
                <div
                  key={stage}
                  className={`px-3 py-1 rounded border ${
                    stage === gameState.escalationState
                      ? 'bg-cyan-400/20 border-cyan-400 text-cyan-300'
                      : 'bg-white/5 border-white/20 text-white/60'
                  }`}
                  style={{ fontSize: scaled.fontSize(14) }}
                >
                  {stage}
                </div>
              ))}
            </div>
          </div>

          {/* === GAME CONTROLS - BOTTOM RIGHT === */}
          <div 
            className="absolute z-10"
            style={{
              bottom: scaled.bottom(24),
              right: scaled.right(24)
            }}
          >
            <button
              onClick={handleEndTurn}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg mb-2"
              style={{ fontSize: scaled.fontSize(14) }}
            >
              End Turn
            </button>
            <div 
              className="text-white space-y-1"
              style={{ fontSize: scaled.fontSize(12) }}
            >
              <div>Draw: {gameState.drawPile.length}</div>
              <div>Discards: {gameState.discardPile.length}</div>
              <div>Turn: {gameState.turnNumber}</div>
            </div>
          </div>
        </>
      )}

      {/* === CARD HAND - BOTTOM CENTER === */}
      {userInteraction && !gameState.gameOver && (
        <div 
          className="absolute flex space-x-2 z-10"
          style={{
            bottom: scaled.bottom(80),
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          {gameState.hand.map((card, index) => (
            <div
              key={card.id}
              style={{
                transform: `translateY(${Math.abs(index - 2) * 2}px)`,
              }}
            >
              <Card
                card={card}
                onPlay={handlePlayCard}
                canPlay={checkCanPlayCard(card)}
              />
            </div>
          ))}
        </div>
      )}

      {/* === GAME OVER SCREEN === */}
      {userInteraction && gameState.gameOver && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div 
            className="bg-black/80 backdrop-blur-sm p-8 rounded-lg text-center"
            style={{ maxWidth: scaled.width(400) }}
          >
            <h2 
              className="font-bold mb-4"
              style={{ fontSize: scaled.fontSize(36) }}
            >
              {gameState.playerWon ? '🏆 Victory!' : '💀 Defeat'}
            </h2>
            <p 
              className="text-white mb-6"
              style={{ fontSize: scaled.fontSize(18) }}
            >
              {gameState.playerWon 
                ? 'Sarah has been overwhelmed. You win!' 
                : 'You have been overwhelmed. Try again.'
              }
            </p>
            <div className={`text-white/60 mb-6 ${scaled.textSize(12)}`}>
              Final Turn: {gameState.turnNumber} | Intensity: {gameState.intensity}
            </div>
            <button
              onClick={handleResetGame}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              style={{ fontSize: scaled.fontSize(14) }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;