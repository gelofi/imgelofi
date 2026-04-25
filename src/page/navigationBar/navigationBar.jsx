import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../common/ThemeContext';
import './navigationBar.css'; // CSS file

// menu icon themes
const lightMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMCA3LjUgTCAwIDEyLjUgTCA1MCAxMi41IEwgNTAgNy41IFogTSAwIDIyLjUgTCAwIDI3LjUgTCA1MCAyNy41IEwgNTAgMjIuNSBaIE0gMCAzNy41IEwgMCA0Mi41IEwgNTAgNDIuNSBMIDUwIDM3LjUgWiIvPjwvc3ZnPg==";
const darkMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwLDAsMjU2LDI1NiIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCIgZmlsbC1ydWxlPSJub256ZXJvIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMTIsNS4xMikiPjxwYXRoIGQ9Ik0wLDcuNXY1aDUwdi01ek0wLDIyLjV2NWg1MHYtNXpNMCwzNy41djVoNTB2LTV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";

function navigationBar() {
  const { theme, toggleTheme } = useTheme(); // themecontext
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false); // for the menu hamburger

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function navigationButtons(){
    return(
      <>
        <li><button><a href="#projects">projects</a></button></li>
        <li><button><a href="#skills">skills</a></button></li>
        <li><button onClick={toggleTheme}>{theme === 'dark' ? "dark" : "light"}</button></li>
      </>
    )
  }

  return (
    <>
      <nav className='navigation-bar'>
        <div className='gelofi'>
          <h1>.gelofi</h1>
        </div>
        <ul className='navigation-buttons' ref={dropdownRef}>
          {!isMobile && ( // Desktop Mode
            navigationButtons()
          )}
          {isMobile && ( // Mobile Mode
            <>
              <img
              className="menu"
              id="hamburger"
              src={theme === 'light' ? lightMenu : darkMenu}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
            />
            </>
          )}
          {isMobile && isOpen && (
            <div className='mobile-menu'>
              {navigationButtons()}
            </div>
          )}
        </ul>
      </nav>
    </>
  )
}

export default navigationBar;
