// svg icons can be foud at https://techicons.dev

import HTML from './html.svg';
import css from './CSS.svg';
import javascript from './JavaScript.svg';
import typescript from './TypeScript.svg';
import react from './React.svg';
import sass from './SASS.svg';
import tailwindcss from './TailwindCSS.svg';

const stack = [css, javascript, typescript, react, sass, tailwindcss];
const namedStack = [
    { name: 'CSS', data: css, color: '#128bb9' },
    { name: 'HTML', data: HTML, color: '#EE681F' },
    { name: 'JavaScript', data: javascript, color: '#efda4c' },
    { name: 'TypeScript', data: typescript, color: '#1976D2' },
    { name: 'React', data: react, color: "#0DB6DB" },
    { name: 'SASS', data: sass, color: '#F06292' },
    { name: 'Tailwind CSS', data: tailwindcss, color: '#00ACC1'},
]

export default stack;
export { namedStack };