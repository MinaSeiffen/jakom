import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        sans: ["var(--font-opensans)"],
        poppins: ["var(--font-poppins)"],
        nunito: ["var(--font-nunito)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(125.46deg, #D91C5C -34.78%, #2B388F 106.88%)',
        'custom-gradient-1': 'linear-gradient(45deg, #D91C5C -34.78%, #2B388F 106.88%)',
        'custom-gradient-2': 'linear-gradient(125.46deg, #D91C5C -34.78%, #2B388F 106.88%)',
        'custom-gradient-3': 'linear-gradient(291.29deg, #2B388F -6.17%, #D91C5C 94.88%)',
        'custom-gradient-4': 'linear-gradient(280.13deg, #2B388F -3.31%, #D91C5C 105.23%)',
        'radial-gradient': 'radial-gradient(100% 256% at 0% 100%, #ECF2FF 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'custom-shadow-1': '1px 15px 23px 0px #E5E5E540',
        'custom-shadow-2': '3px 10px 10px 0px #CACACA40',
        'custom-shadow-3': '3px 7px 7px 0px rgba(202, 202, 202, 0.25)',
        'custom-shadow-4': '-4px 8px 8px 0px rgba(154, 154, 154, 0.25)',
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config