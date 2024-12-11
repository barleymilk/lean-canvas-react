import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppTailwindCss from './AppTailwindCss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTailwindCss />
  </StrictMode>,
);
