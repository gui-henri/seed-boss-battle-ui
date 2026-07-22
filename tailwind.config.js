/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seed: {
          green: "#00E676",
          dark: "#0F172A",
          card: "#1E293B",
          accent: "#7C3AED",
          boss: "#EF4444"
        }
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #7C3AED, 0 0 20px #7C3AED' },
          'to': { boxShadow: '0 0 20px #00E676, 0 0 35px #00E676' }
        }
      }
    },
  },
  plugins: [],
}
