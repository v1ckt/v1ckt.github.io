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
        "icon": "0px 8px 24px -4px rgba(0, 0, 0, 0.25)"
      },
      dropShadow: {
        "icon": "0px 8px 16px rgba(0, 0, 0, 0.15)",
      },
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
    }
  },
  plugins: [],
};
export default config;
