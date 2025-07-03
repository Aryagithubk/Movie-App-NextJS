module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Example primary color
        secondary: '#64748b', // Example secondary color
        muted: '#f3f4f6', // Example muted color
        'muted-foreground': '#6b7280', // Example muted foreground color
        background: '#ffffff', // Example background color
        card: '#f9fafb', // Example card color
        'card-foreground': '#111827', // Example card foreground color
      },
      spacing: {
        '18': '4.5rem', // Example custom spacing
      },
    },
  },
  plugins: [],
};