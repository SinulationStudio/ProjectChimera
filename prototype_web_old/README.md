# ProjectChimera - Complete Tactical Card Game

A fully responsive tactical card game with animated backgrounds and adaptive UI scaling.

## 🚀 Quick Start (For AI/Chat Session)

1. **Upload all files to new workspace**
2. **Follow the setup instructions in `SETUP-INSTRUCTIONS.md`**
3. **Run: `npm run dev` or `pnpm run dev`**
4. **Deploy using the same deployment process**

## 🎮 What You Get

- ✅ **Responsive UI** - Automatically scales from mobile to 4K displays
- ✅ **Animated Background** - Looping video background with user interaction handling
- ✅ **Complete Card System** - 20 cards with 5 different card types
- ✅ **Tactical Gameplay** - 3-layer defense system (Focus → Inhibition → Composure)
- ✅ **AI Opponent** - Sarah with adaptive escalation system
- ✅ **Clean Architecture** - Modular React components and utilities

## 🎯 Core Features

### Responsive Design System
- **Base Design**: Optimized for 1920x1080 (desktop)
- **Scaling**: 0.5x (mobile) to 1.5x (4K) automatically
- **Smart Clamping**: Prevents UI from becoming unusable on any device

### Game Mechanics
- **Player Stats**: Composure, Inhibition, Tension, Arousal, Focus, AP, Clothing
- **Sarah's Stats**: Composure, Inhibition, Clothing (with exposure system)
- **Card Classes**: Verbal, Physical Upper, Physical Lower, Intimate, Defensive
- **Escalation States**: Approach → Close Quarters → Embrace → Intimacy

### Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React hooks
- **Video**: HTML5 video with auto-play handling

## 📁 Project Structure

```
src/
├── components/
│   ├── Card.tsx              # Game card component with hover effects
│   └── ErrorBoundary.tsx     # React error handling
├── data/
│   └── startingDeck.ts       # 20-card starting deck
├── types/
│   └── game.ts              # All TypeScript interfaces
├── utils/
│   └── gameLogic.ts         # Core game mechanics
├── App.tsx                  # Main game component
├── main.tsx                 # React entry point
└── index.css                # Global styles

public/
├── videos/
│   └── infinite_loop_perfect_v2.mp4  # Main background video
└── images/
    └── (background images)

Configuration files: package.json, vite.config.ts, tailwind.config.js, etc.
```

## 🎲 How to Play

1. **Start Game**: Click the initial "Start Game" button
2. **Play Cards**: Click cards in your hand to play them (requires AP)
3. **Resource Management**: Manage Tension, Arousal, and Focus
4. **End Turn**: Click "End Turn" to let Sarah attack
5. **Win Condition**: Reduce Sarah's Composure to 0
6. **Lose Condition**: Your Composure reaches 0

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Behavior

- **Mobile (360px)**: UI scales to 0.5x, all elements remain functional
- **Tablet (768px)**: UI scales to 0.8x, optimal touch targets
- **Desktop (1920px)**: UI at 1.0x (base design)
- **4K (3840px)**: UI scales to 1.5x, larger text and spacing

## 🎨 Visual Design

- **Clean Stats Boxes**: Semi-transparent with blur effects
- **Progress Bars**: Color-coded gradients for different stats
- **Card Hover Effects**: Cards lift and highlight on hover
- **AP Orbs**: Visual representation of available action points
- **Action Log**: Recent game events display
- **Timeline**: Shows current escalation state

## 🏗️ Architecture Highlights

### Responsive Scaling System
```typescript
const scaled = {
  top: (base: number) => `${base * screenSize.scale}px`,
  left: (base: number) => `${base * screenSize.scale}px`,
  width: (base: number) => `${base * screenSize.scale}px`,
  fontSize: (base: number) => `clamp(${base * 0.7}px, ${base * screenSize.scale}px, ${base * 1.2}px)`
};
```

### Game State Management
- **TypeScript Interfaces**: Full type safety for all game data
- **Immutable Updates**: All state changes create new state objects
- **Real-time Updates**: Instant UI feedback for all actions

## 🚢 Deployment

This project deploys perfectly using the standard React/Vite deployment process. The video background is automatically handled with proper fallbacks.

---

**Created by MiniMax Agent** | **Version 1.0** | **November 2025**
