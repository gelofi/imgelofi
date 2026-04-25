import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// the styling
import './index.css'

// page parts
import Navigation from './page/navigationBar/navigationBar.jsx'
import Home from './page/home/home.jsx';
import Projects from './page/projects/projects.jsx';

// theme setup
import { ThemeProvider } from './common/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Navigation />
      <Home/>
      <Projects/>
    </ThemeProvider>
  </StrictMode>,
);