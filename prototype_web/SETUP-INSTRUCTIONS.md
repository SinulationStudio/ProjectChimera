# 🚀 Setup Instructions for ProjectChimera

## For AI/Chat Session Recreation

### Step 1: Upload All Files
1. Create a new folder in your workspace
2. Upload ALL files from this package
3. Maintain the exact folder structure shown in the file tree

### Step 2: Install Dependencies
```bash
# Using npm
npm install

# OR using pnpm (preferred)
pnpm install

# OR using yarn
yarn install
```

### Step 3: Start Development Server
```bash
# Using npm
npm run dev

# OR using pnpm
pnpm run dev

# OR using yarn
yarn dev
```

### Step 4: Access the Game
- Open the URL shown in terminal (typically `http://localhost:5173`)
- Click "Start Game" button
- Enjoy the responsive tactical card game!

## 🎯 Expected Result

You should see:
- ✅ **Animated background video** playing on loop
- ✅ **Clean UI panels** in top-left and top-right corners
- ✅ **Responsive scaling** - try resizing your browser window
- ✅ **Interactive cards** in hand at bottom
- ✅ **AP orbs** showing available action points
- ✅ **Progress bars** with color gradients
- ✅ **Action log** showing recent events

## 🔧 Troubleshooting

### If background video doesn't play:
- Ensure `public/videos/infinite_loop_perfect_v2.mp4` exists
- Check browser console for video loading errors
- Video requires user interaction (click "Start Game")

### If UI doesn't scale responsively:
- Open browser DevTools
- Resize window to different widths
- Check that scaling values update in console

### If TypeScript errors appear:
- Ensure all TypeScript files are properly named
- Check that import paths match file locations
- Verify all dependencies are installed

### If game doesn't start:
- Check browser console for errors
- Ensure all components are loaded
- Verify ErrorBoundary is working

## 📱 Testing Responsive Design

1. **Desktop (1920px)**: Should see base 1.0x scaling
2. **Tablet (768px)**: Should see ~0.8x scaling
3. **Mobile (375px)**: Should see 0.5x scaling with all elements functional

## 🚢 Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy dist/ folder to your hosting provider
```

## 📂 File Verification Checklist

Ensure these key files exist:
- ✅ `src/App.tsx` - Main game component
- ✅ `src/components/Card.tsx` - Card component
- ✅ `src/types/game.ts` - TypeScript types
- ✅ `src/data/startingDeck.ts` - Game cards
- ✅ `src/utils/gameLogic.ts` - Game mechanics
- ✅ `public/videos/infinite_loop_perfect_v2.mp4` - Background video
- ✅ `package.json` - Dependencies
- ✅ `vite.config.ts` - Build configuration

## 🎮 Game Features to Test

1. **Card Interactions**:
   - Hover over cards to see effects
   - Click playable cards (cyan glowing)
   - Observe AP cost deduction

2. **Resource Management**:
   - Watch tension/arousal bars fill
   - Monitor focus degradation
   - Track clothing percentages

3. **Sarah's AI**:
   - End turn and observe Sarah's attacks
   - Watch escalation state progression
   - See action log updates

4. **Win/Lose Conditions**:
   - Reduce Sarah to 0 composure → Victory
   - Reduce yourself to 0 composure → Defeat

## 🔍 Advanced Testing

### Performance Testing
- Monitor memory usage during extended play
- Check for memory leaks with repeated games
- Verify smooth animations and transitions

### Browser Compatibility
- Test in Chrome, Firefox, Safari, Edge
- Verify video playback works across browsers
- Check responsive scaling on all screen sizes

### Mobile Testing
- Test on actual mobile devices
- Verify touch interactions work
- Ensure UI remains usable at 0.5x scale

---

**Success Criteria**: You should be able to play a complete game from start to finish with all UI elements properly scaled and responsive.

**Next Steps**: Once confirmed working, you can deploy to any static hosting provider or run the production build locally.
