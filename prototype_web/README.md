# Project Chimera - Tactical Card Game

A responsive React-based tactical card game with animated backgrounds and professional UI design.

## File Structure

```
project-chimera-game/
├── public/
│   └── videos/
│       └── infinite_loop_perfect_v2.mp4    # Background video (1.6MB)
├── src/
│   ├── components/
│   │   ├── Card.tsx                         # Interactive card component
│   │   └── ErrorBoundary.tsx                # React error boundary
│   ├── data/
│   │   └── startingDeck.ts                  # 20-card deck definition
│   ├── types/
│   │   └── game.ts                          # TypeScript interfaces
│   ├── utils/
│   │   └── gameLogic.ts                     # Core game mechanics
│   ├── App.tsx                              # Main game component
│   ├── main.tsx                             # React entry point
│   └── index.css                            # Global styles
├── .gitignore                               # Git ignore rules
├── index.html                               # HTML entry point
├── package.json                             # Dependencies and scripts
├── postcss.config.js                        # PostCSS configuration
├── tailwind.config.js                       # Tailwind CSS configuration
├── tsconfig.json                            # TypeScript configuration
└── vite.config.ts                           # Vite build configuration
```

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs on http://localhost:5173

### Build for Production
```bash
npm run build
npm run preview
```

## Technologies Used

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite 6.0.1** - Build tool and dev server
- **Tailwind CSS 3.4.16** - Styling framework
- **PostCSS** - CSS processing
- **HTML5 Video** - Animated background

## Game Features

- **20-Card Tactical Deck** with 5 card classes
- **Responsive Design** - Mobile to 4K support
- **Sarah AI Opponent** with intelligent behavior
- **Resource Management** - AP, Tension, Arousal, Focus
- **3-Layer Defense** - Focus → Inhibition → Composure
- **Escalation System** - Approach → Close Quarters → Embrace → Intimacy
- **Animated Background** with fallback system

## Card Classes

1. **Verbal** - Conversation-based actions
2. **Physical Upper** - Breast/upper body actions  
3. **Physical Lower** - Leg/lower body actions
4. **Intimate** - Sexual/close actions
5. **Defensive** - Building defenses and focus

## Responsive Scaling

The game automatically adapts to screen size:
- **Mobile (375px)**: 0.75x scale
- **Tablet (768px)**: 0.8x scale  
- **Desktop (1920px)**: 1.0x scale
- **4K (3840px)**: 1.5x scale

## Notes

- The background video may not autoplay in some browsers due to policies
- Fallback gradient background is provided if video fails to load
- Game uses professional glassmorphism UI design
- All assets and code are included in this package

## License

MIT License - Free to use and modify