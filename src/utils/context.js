import { createContext } from "react";

export const Theme = localStorage['theme'] ? localStorage['theme'] : 'dark';

export const ThemeContext = createContext(Theme);