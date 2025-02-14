import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const [icon, setIcon] = useLocalStorage("icon", "bx-moon");

	useEffect(() => {
		document.body.classList.toggle("dark-theme", theme === "dark");
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
		setIcon(prevIcon => (prevIcon === "bx-sun" ? "bx-moon" : "bx-sun"));
	}, [setTheme, setIcon]);

	return { theme, icon, toggleTheme };
};
