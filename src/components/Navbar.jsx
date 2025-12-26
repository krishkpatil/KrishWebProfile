import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/">
                    <FaCode className="mx-4 w-10 text-4xl" alt="logo" />
                </a>
            </div>
            <div className="m-4 flex items-center justify-center gap-4 text-2xl">
                <a href="https://linkedin.com/in/krish-patil" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/krishkpatil" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
