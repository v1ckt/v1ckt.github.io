export default function ThemeSetter() {
  return (
    <script
      id='theme-setter'
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var storedTheme = localStorage.getItem("theme");
              var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              var theme = storedTheme || (prefersDark ? "dark" : "light");
              document.documentElement.setAttribute("data-theme", theme);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
