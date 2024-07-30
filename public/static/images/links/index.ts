import github from "./github.png";
import linkedin from "./linkedin.png";
import email from "./email.png";
import globe from "./globe.png";
import resume from "./resume.png"

const links = [github, linkedin, email, resume, globe];

const namedLinks = [
    { name: '/v1ckt', data: github, color: '#000', href: 'v1ckt.github.io' },
    { name: '/in/txvkt', data: linkedin, color: '#0A66C2', href: 'linkedin.com/in/txvkt' },
    { name: 'txvicktor@gmail.com', data: email, color: '#4FAAFF', href: 'txvicktor@gmail.com' },
    { name: 'Resume', data: resume, color: '#D99C00', href: '#' },
    { name: 'English (US)', data: globe, color: '#4FAAFF', href: '#' }
]

export default links;
export { namedLinks }