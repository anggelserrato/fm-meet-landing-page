import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MeetLandingPage from './components/MeetLandingPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeetLandingPage />
  </StrictMode>
);
