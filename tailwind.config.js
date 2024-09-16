/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "rgba(var(--body)",
        text: "rgba(var(--text)",
        accentPrimary: "rgba(var(--accent-primary)",
        accentSecondary: "rgba(var(--accent-secondary)"
      },
    },
  },
  plugins: [],
};

