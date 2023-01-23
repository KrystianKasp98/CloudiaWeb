import { useContext } from 'react';
import { AppContext } from '../../App/context/AppContext';

interface ThemeSwitchProps {
  refreshApp: () => void;
}

function ThemeSwitch({refreshApp}: ThemeSwitchProps) {
  const context = useContext(AppContext);

  const switchTheme = () => {
    if (context?.toggleDarkMode) {
      context.toggleDarkMode();
      refreshApp();
    }
  }

  return (
    <div>
      <button onClick={switchTheme}>switch mode</button>
    </div>
  );
}

export default ThemeSwitch;