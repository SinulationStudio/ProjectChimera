/**
 * ProjectChimera Application Entry Point
 * 
 * React application initialization with error boundary protection.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'

// Initialize the React application
const rootElement = document.getElementById('root');

// Enhanced error logging
const logInitialization = () => {
  console.log('🎮 ProjectChimera Starting...');
  console.log('📱 Screen:', window.screen.width + 'x' + window.screen.height);
  console.log('🖥️ Viewport:', window.innerWidth + 'x' + window.innerHeight);
  console.log('🌐 User Agent:', navigator.userAgent);
  console.log('✅ React Version:', React.version);
  console.log('🎯 Ready to play!');
};

// Initialize app when DOM is ready
if (rootElement) {
  logInitialization();
  
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error('❌ Root element not found! ProjectChimera cannot start.');
}