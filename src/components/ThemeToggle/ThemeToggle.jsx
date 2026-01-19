import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        >
            <div className="theme-toggle-track">
                <Sun className="theme-icon sun-icon" size={14} />
                <Moon className="theme-icon moon-icon" size={14} />
                <div className={`theme-toggle-thumb ${theme}`} />
            </div>
        </button>
    );
};

export default ThemeToggle;
