import css from './CSS.png';
import html from './HTML.png';
import javascript from './JavaScript.png';
import typescript from './TypeScript.png';
import react from './React.png';
import sass from './SASS.png';
import tailwindcss from './TailwindCSS.png';

const stack = [css, html, javascript, typescript, react, sass, tailwindcss];
const namedStack = [
    { name: 'CSS', data: css, color: '#0571BD' },
    { name: 'HTML', data: html, color: '#EE681F' },
    { name: 'JavaScript', data: javascript, color: '#F7DF1E' },
    { name: 'TypeScript', data: typescript, color: '#1976D2' },
    { name: 'React', data: react, color: "#0DB6DB" },
    { name: 'SASS', data: sass, color: '#F06292' },
    { name: 'TailwindCSS', data: tailwindcss, color: '#00ACC1' }
]

export default stack;
export { namedStack };