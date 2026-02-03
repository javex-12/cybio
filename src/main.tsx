import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'

// Register PWA service worker
registerSW({ immediate: true })

// Error boundary catch-all
window.onerror = (msg, _url, _lineNo, _columnNo, _error) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; color: red; font-family: sans-serif;">
        <h1 style="font-size: 20px;">Runtime Error Detected:</h1>
        <pre style="background: #fee; padding: 10px; border: 1px solid red; white-space: pre-wrap;">${msg}</pre>
        <p>Check the browser console (F12) for more details.</p>
      </div>
    `;
  }
  return false;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)