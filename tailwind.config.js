/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Outfit"', 'system-ui', 'sans-serif'],
        brand: ['"Outfit"', '"Plus Jakarta Sans"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cyber: {
          bg: '#08080a',
          surface: '#111116',
          card: '#16161d',
          border: '#262633',
          borderHover: '#3f3f56',
          cyan: '#00f0ff',
          neon: '#0df2c9',
          purple: '#a855f7',
          amber: '#fbbf24',
          rose: '#f43f5e',
          text: '#ededf2',
          muted: '#8e8ea0'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'marquee': 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
