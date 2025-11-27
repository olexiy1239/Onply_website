import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D0B16",
        card: "rgba(255,255,255,0.06)",
        textPrimary: "#F5F5F7",
        textSecondary: "#C9C9D1"
      },
      boxShadow: {
        neon: "0 0 24px rgba(255,92,168,0.35)"
      },
      borderRadius: { xl2: "1rem", xl3: "1.25rem" },
      backgroundImage: {
        shoom: "radial-gradient( at 20% 80%, #FF3FA0 0%, rgba(255,63,160,0) 45% ), radial-gradient( at 85% 15%, #7C54FF 0%, rgba(124,84,255,0) 55% ), #0D0B16",
        primaryGrad: "linear-gradient(90deg, #FF5CA8 0%, #A066FF 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
