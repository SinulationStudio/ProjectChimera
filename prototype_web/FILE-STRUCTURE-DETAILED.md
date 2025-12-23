Project Chimera - Complete File Structure Overview

This package contains the complete source code for Project Chimera tactical card game.

=== ROOT FILES ===

1. package.json (841 bytes)
   - Dependencies: React 18.3.1, Vite 6.0.1, TypeScript 5.6.2, Tailwind CSS 3.4.16
   - Scripts: dev, build, preview, test
   - Author: MiniMax Agent, License: MIT

2. index.html (544 bytes)
   - HTML5 entry point with React mounting
   - Responsive meta viewport settings
   - Title: "ProjectChimera - Tactical Card Game"

3. vite.config.ts (562 bytes)
   - Vite configuration for React + TypeScript
   - Custom path aliases (@/ for src/)
   - Build optimization with manual chunks

4. tsconfig.json (487 bytes)
   - TypeScript configuration for React project
   - Strict mode enabled, modern ES targets

5. tailwind.config.js (2,034 bytes)
   - Tailwind CSS configuration
   - Custom color palette and spacing
   - Responsive breakpoints

6. postcss.config.js (79 bytes)
   - PostCSS configuration for Tailwind
   - Autoprefixer plugin

7. .gitignore (982 bytes)
   - Standard Node.js/Vite ignores
   - Ignores node_modules, dist, .vite

=== SRC/ DIRECTORY ===

8. src/main.tsx (1,130 bytes)
   - React application entry point
   - Creates root and renders App component

9. src/index.css (2,633 bytes)
   - Global CSS with Tailwind imports
   - Custom animations and transitions
   - Game-specific styling

10. src/App.tsx (25,005 bytes) - MAIN COMPONENT
    - Complete game logic and UI layout
    - Video background handling
    - Responsive scaling system
    - Game state management
    - All 6 UI elements positioning

=== SRC/COMPONENTS/ ===

11. src/components/Card.tsx (9,582 bytes)
    - Interactive card component
    - Hover effects and validation
    - Card type and effect display

12. src/components/ErrorBoundary.tsx (4,975 bytes)
    - React error boundary for graceful error handling

=== SRC/DATA/ ===

13. src/data/startingDeck.ts (7,955 bytes)
    - Complete 20-card deck definition
    - 5 card classes: Verbal, Physical Upper, Physical Lower, Intimate, Defensive
    - Card effects and costs

=== SRC/TYPES/ ===

14. src/types/game.ts (3,886 bytes)
    - TypeScript interfaces for game data
    - Player state, card types, game state
    - Scaling and UI type definitions

=== SRC/UTILS/ ===

15. src/utils/gameLogic.ts (14,530 bytes)
    - Core game mechanics implementation
    - AI logic for Sarah opponent
    - Card effect processing
    - Win/lose conditions

=== PUBLIC/ DIRECTORY ===

16. public/videos/infinite_loop_perfect_v2.mp4 (1,632,364 bytes)
    - Background video (1.6MB)
    - Looping animated background
    - Fallback system if video fails

=== KEY FEATURES ===

Game Mechanics:
- 20-card tactical card game
- Resource management (AP, Tension, Arousal, Focus)
- 3-layer defense system (Focus → Inhibition → Composure)
- AI opponent "Sarah" with escalation states
- Turn-based gameplay with phase progression

Technical Features:
- Responsive design (mobile to 4K)
- TypeScript for type safety
- React 18 with hooks
- Vite for fast development
- Tailwind CSS for styling
- HTML5 video background
- Professional glassmorphism UI

UI Layout:
- Player Status Panel (top-left)
- Sarah's Status Panel (top-right)  
- Timeline Navigation (top-center)
- Action Cards (bottom-center)
- Action Log (bottom-left)
- Game Controls (bottom-right)

=== HOW TO RUN ===

1. Install Node.js 18+
2. Run: npm install
3. Run: npm run dev
4. Open: http://localhost:5173

=== BUILD FOR PRODUCTION ===

1. Run: npm run build
2. Files generated in dist/ folder
3. Deploy dist/ folder to web server

This complete package includes all source code, assets, and configuration files needed to run the Project Chimera tactical card game.