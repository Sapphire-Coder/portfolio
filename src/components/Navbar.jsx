import { HashLink } from 'react-router-hash-link'

const Navbar = props => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg fixed-top navbar-custom'>
            <HashLink to = '#top' className='navbar-brand' smooth>JM</HashLink>
            <div className = 'nav-item navbar-nav'>
                <HashLink to = '#projects' className = 'nav-link' smooth>Projects</HashLink>
            </div>
            <div className = 'nav-item navbar-nav'>
                <HashLink to = '#contact' className = 'nav-link' smooth>Contact</HashLink>
            </div>
        </nav>
    )
}

export default Navbar