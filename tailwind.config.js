/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4F46E5", // Rich indigo
                    light: "#6366F1",
                    dark: "#4338CA",
                },
                secondary: {
                    DEFAULT: "#10B981", // Emerald green
                    light: "#34D399",
                    dark: "#059669",
                },
                accent: {
                    DEFAULT: "#F59E0B", // Amber
                    light: "#FBBF24",
                    dark: "#D97706",
                },
                background: {
                    DEFAULT: "#F8FAFC", // Light slate
                    dark: "#1E293B",
                },
                text: {
                    DEFAULT: "#1E293B", // Slate 800
                    light: "#64748B", // Slate 500
                    dark: "#0F172A", // Slate 900
                },
                card: {
                    DEFAULT: "#FFFFFF", // White
                    dark: "#1E293B", // Slate 800
                },
                soft_cream: "#FFF7ED", // Warm cream
                modern_background: "#F8FAFC", // Light slate
                modern_surface: "#FFFFFF", // White
                modern_text: "#1E293B", // Slate 800
                modern_primary: "#4F46E5", // Indigo 600
                modern_secondary: "#10B981", // Emerald 500
                modern_accent: "#F59E0B", // Amber 500
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
};
