# 🚀 Deployment Instructions for ProjectChimera

## Quick Deploy Steps

### 1. Build the Project
```bash
npm run build
# or
pnpm run build
# or
yarn build
```

This creates a `dist/` folder with all the optimized files.

### 2. Deploy to Your Hosting Provider

#### Option A: Static Hosting Services
**Netlify:**
1. Drag and drop the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect your GitHub repo and deploy automatically

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod` in the project directory
3. Follow the prompts

**GitHub Pages:**
1. Upload `dist/` contents to a `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Select source as the `gh-pages` branch

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select dist/ as your public directory
firebase deploy
```

#### Option B: Traditional Web Hosting
1. Upload all files from the `dist/` folder to your web server's public directory
2. Ensure your server serves the `index.html` file for all routes (SPA behavior)
3. Verify the video file loads: `https://yoursite.com/videos/infinite_loop_perfect_v2.mp4`

### 3. Verify Deployment

Check these elements work on your live site:
- ✅ **Video Background**: Background video plays in loop
- ✅ **Responsive Scaling**: UI scales when you resize browser window
- ✅ **Game Interaction**: Click "Start Game" and cards are playable
- ✅ **Mobile Support**: Test on phone/tablet - all elements should scale properly

## 🔧 Advanced Configuration

### Custom Domain Setup
1. Purchase domain from registrar
2. Point domain to your hosting provider
3. Configure DNS A/CNAME records
4. Some providers (Netlify, Vercel) offer custom domain setup in dashboard

### Environment Variables (Optional)
Create `.env` file for production settings:
```bash
VITE_APP_VERSION=1.0.0
VITE_BUILD_TIME=2025-11-06
```

### Performance Optimization
The project is already optimized with:
- **Vite bundling** - Automatic code splitting
- **Video compression** - Efficient mp4 format
- **CSS purging** - Unused styles removed
- **Tree shaking** - Dead code elimination

### CDN Setup (Optional)
For better video loading speeds:
1. Upload `/videos/infinite_loop_perfect_v2.mp4` to a CDN
2. Update the video source in `App.tsx`:
```typescript
<source src="https://your-cdn.com/videos/infinite_loop_perfect_v2.mp4" type="video/mp4" />
```

## 🐛 Troubleshooting

### Video Doesn't Play
- Check file path: `/videos/infinite_loop_perfect_v2.mp4`
- Verify video file exists in deployed site
- Check browser console for 404 errors
- Ensure video codec compatibility (MP4 H.264)

### UI Doesn't Scale Responsively
- Test by resizing browser window
- Check that JavaScript is enabled
- Verify no CSS overrides are blocking responsive design
- Clear browser cache and hard refresh (Ctrl+F5)

### Game Mechanics Not Working
- Check browser console for JavaScript errors
- Verify all TypeScript files compiled correctly
- Ensure no missing dependencies in production build

### Mobile Performance Issues
- Video autoplay may be restricted on mobile
- Consider video compression for faster loading
- Test on actual devices, not just browser dev tools

## 📊 Analytics & Monitoring

### Add Google Analytics (Optional)
Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Monitoring
The project includes an ErrorBoundary component that catches and displays errors gracefully.

## 🔄 Updates & Maintenance

### Updating the Game
1. Make changes to source files
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy new `dist/` folder

### Video Replacement
To use a different background video:
1. Replace `/public/videos/infinite_loop_perfect_v2.mp4`
2. Ensure new video is in MP4 format
3. Recommended: H.264 codec, 1920x1080 resolution, <10MB file size
4. Update video source in `App.tsx` if file name changes

## ✅ Deployment Checklist

Before going live, verify:
- [ ] All files build successfully (`npm run build`)
- [ ] Video background loads and plays
- [ ] Game starts with "Start Game" button
- [ ] Cards are playable (clickable with cyan glow)
- [ ] End Turn button triggers Sarah's response
- [ ] Responsive scaling works on mobile/tablet
- [ ] Game over screen appears when someone wins/loses
- [ ] No console errors in browser
- [ ] HTTPS enabled (recommended for video autoplay)

---

**Deploy completed successfully!** 🎉

Your responsive ProjectChimera game is now live and ready to be played on any device from mobile phones to 4K desktop monitors.
