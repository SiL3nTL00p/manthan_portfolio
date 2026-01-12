/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "var(--highlight)" },
        },
        flash: {
          "0%": { backgroundColor: "hsl(var(--card))" },
          "50%": { backgroundColor: "var(--highlight)" },
          "100%": { backgroundColor: "hsl(var(--card))" },
        },
      },
      animation: {
        highlight: "highlight 0.6s ease forwards",
        flash: "flash 0.6s ease forwards",
      },
      fontFamily: {
        sfmono: ["SF Mono", "Space Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", 'monospace'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        sfpro: ['"SF Pro Display"', '"SF Pro Text"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        spacegrotesk: ['"Space Grotesk"', 'Inter', 'system-ui', 'Arial', 'sans-serif'],
      },

    }
  }, // Added missing closing brace and comma
  plugins: [
    // Add plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
  // Optional: Configure dark mode
  darkMode: 'class', // or 'media' or false
}