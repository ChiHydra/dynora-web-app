import './styles.css';

console.log('👋 This message is being logged by "renderer/index.js", included via webpack');

// DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const messageEl = document.getElementById('message');

  btn.addEventListener('click', () => {
    messageEl.textContent = 'Button clicked! 🎉';
    
    // Example: Send message to main process via preload
    if (window.electronAPI) {
      window.electronAPI.sendMessage('toMain', 'Hello from renderer!');
    }
  });
});