import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Terminal color palette
        'terminal-green': '#36A689',
        'terminal-accent': '#3FC89C',
        'terminal-online': '#4AF626',
        'terminal-dark': '#050905',
        'terminal-darker': '#1a4029',
        'terminal-danger': '#DF2E30',
        'terminal-warning': '#B98C13',
        'terminal-inactive': '#050905',
        'terminal-inactive-alt': '#0F1410',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"Share Tech Mono"', 'monospace'],
        'tech': ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(54, 166, 137, 0.3)",
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(54, 166, 137, 0.8)",
          },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.97" },
        },
        "text-flicker": {
          "0%, 100%": { opacity: "1" },
          "41.99%": { opacity: "1" },
          "42%": { opacity: "0" },
          "43%": { opacity: "0" },
          "43.01%": { opacity: "1" },
          "47.99%": { opacity: "1" },
          "48%": { opacity: "0" },
          "48.01%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-strong": {
          "0%, 100%": { 
            boxShadow: "0 0 15px rgba(54, 166, 137, 0.4), 0 0 30px rgba(54, 166, 137, 0.2)",
          },
          "50%": { 
            boxShadow: "0 0 25px rgba(54, 166, 137, 0.8), 0 0 50px rgba(54, 166, 137, 0.4)",
          },
        },
        "pulse-ring": {
          "0%": { 
            transform: "scale(0.8)",
            opacity: "1",
          },
          "50%, 100%": { 
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
        "data-stream": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "glitch-strong": {
          "0%": { 
            transform: "translate(0)",
            textShadow: "0 0 0 rgba(54, 166, 137, 0)",
          },
          "20%": { 
            transform: "translate(-3px, 3px)",
            textShadow: "3px 0 0 rgba(223, 46, 48, 0.5)",
          },
          "40%": { 
            transform: "translate(-3px, -3px)",
            textShadow: "-3px 0 0 rgba(54, 166, 137, 0.5)",
          },
          "60%": { 
            transform: "translate(3px, 3px)",
            textShadow: "0 3px 0 rgba(185, 140, 19, 0.5)",
          },
          "80%": { 
            transform: "translate(3px, -3px)",
            textShadow: "0 -3px 0 rgba(54, 166, 137, 0.5)",
          },
          "100%": { 
            transform: "translate(0)",
            textShadow: "0 0 0 rgba(54, 166, 137, 0)",
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "rotate-glow": {
          "0%": { 
            filter: "hue-rotate(0deg)",
            boxShadow: "0 0 20px rgba(54, 166, 137, 0.5)",
          },
          "50%": { 
            filter: "hue-rotate(90deg)",
            boxShadow: "0 0 40px rgba(63, 200, 156, 0.8)",
          },
          "100%": { 
            filter: "hue-rotate(0deg)",
            boxShadow: "0 0 20px rgba(54, 166, 137, 0.5)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blink": "blink 1s step-end infinite",
        "glitch": "glitch 0.3s infinite",
        "scanline": "scanline 8s linear infinite",
        "glow-pulse": "glow-pulse 2s infinite",
        "flicker": "flicker 0.15s infinite",
        "text-flicker": "text-flicker 3s infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "glow-strong": "glow-strong 2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "data-stream": "data-stream 3s linear infinite",
        "glitch-strong": "glitch-strong 0.5s infinite",
        "shimmer": "shimmer 2s linear infinite",
        "rotate-glow": "rotate-glow 3s ease-in-out infinite",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(54, 166, 137, 0.3)',
        'glow-lg': '0 0 40px rgba(54, 166, 137, 0.5)',
        'glow-sm': '0 0 10px rgba(54, 166, 137, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

