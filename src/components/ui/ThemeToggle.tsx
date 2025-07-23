import  { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [isRotated, setIsRotated] = useState(false);

    const handleToggle = () => {
        toggleTheme();
        setIsRotated(!isRotated); // Toggle rotation state
    };

    return (
        <Button onClick={handleToggle} variant="ghost" size="icon">
            {theme === "dark" ? (
                <Sun className={`w-5 h-5 transition-transform duration-500 `} />
            ) : (
                <Moon className={`w-5 h-5 transition-transform duration-500`} />
            )}
        </Button>
    );
}

export default ThemeToggle;
