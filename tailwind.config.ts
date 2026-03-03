import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uremont: {
          blue: '#2563EB',
          dark: '#020617',
          accent: '#10B981',
        }
      }
    },
  },
  plugins: [],
} satisfies Config
