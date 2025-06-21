// svg icons can be foud at https://techicons.dev

import HTML from './html.svg';
import css from './CSS.svg';
import javascript from './JavaScript.svg';
import typescript from './TypeScript.svg';
import react from './React.svg';
import sass from './SASS.svg';
import tailwindcss from './TailwindCSS.svg';
import next from './Next.svg';

const stack = [css, javascript, typescript, react, sass, tailwindcss];
const namedStack = [
    { name: 'CSS', data: css, color: '#128bb9' },
    { name: 'Next Js', data: next, color: '#1c1c1c' },
    { name: 'React', data: react, color: "#0DB6DB" },
    { name: 'TypeScript', data: typescript, color: '#1976D2' },
    { name: 'JavaScript', data: javascript, color: '#efda4c' },
    { name: 'HTML', data: HTML, color: '#EE681F' },
    { name: 'Tailwind CSS', data: tailwindcss, color: '#00ACC1'},
    { name: 'SASS', data: sass, color: '#F06292' },
]

export default stack;
export { namedStack };