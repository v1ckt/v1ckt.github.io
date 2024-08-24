import { BiBorderAll } from "react-icons/bi";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "icon": "0px 8px 24px -4px rgba(0, 0, 0, 0.2), 0px 4px 8px -2px rgba(0, 0, 0, .1)",
        "window": "0 14px 16px rgba(0,0,0,0.1), 0 0 1px rgba(0, 0, 0, 0.1)"
      },
      dropShadow: {
        "window": ["0 14px 16px rgba(0,0,0,0.1)", "0 0 1px rgba(0, 0, 0, 0.1)"],
      },
      screens: {
        print: { raw: "print" }
      }
    },
    colors: {
      "main-bg": "var(--main-bg)",
      "accent" : "var(--accent)",
      "accent-muted": "var(--accent-muted)",
      "title": "var(--title)",
      "text": "var(--text)",
      "project-marker-text": "var(--project-marker-text)",
      "menu-marker-text": "var(--menu-marker-text)",
      "link-text": "var(--link-text)",
      "project-marker": "var(--project-marker)",
      "menu-marker": "var(--menu-marker)",
      "otw-bg": "var(--otw-bg)",
      "otw-text": "var(--otw-text)",
      "profile-pic-bg": "var(--profile-pic-bg)",
      "header-border-color": "var(--header-border-color)",
      "bg-switch-pill": "var(--bg-switch-pill)",
      "header-bg": "var(--header-bg)",
      "menu-bg": "var(--bg-menu)",
      "card-bg": "var(--card-bg)",
    },
    keyframes: {
      cursorPointer: {
        "0%, 100%": {
          width: "1.5rem",
          height: "1.5rem",
        },
        "50%": {
          width: ".5rem",
          height: ".5rem",
        },
      }
    },
    animation: {
      cursorPointer: 'cursorPointer 1s infinite',
    },
  },
  plugins: [],
};
export default config;
