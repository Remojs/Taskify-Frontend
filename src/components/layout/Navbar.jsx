
import logo from '../../img/logo.png'
import gh from '../../img/githubBlanco.png'
import ld from '../../img/LinkedinBlanco.png'
import './layout.css'

const Navbar = () => {
return (
    <div>
        <nav className="navbar-body">
            <div className="navbar-logo">
                <img src={logo} alt="" className="navbar-logo-image" />
            </div>

            <div className="navbar-elements">
                <a href="/createTask" className='creatorLink'> Create a Task! </a>
            </div>

            <div className="navbar-social">
                <a href="https://github.com/Remojs" className="social-element"> <img src={gh} alt="" className="social-element-img" /> </a>
                <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="social-element"> <img src={ld} alt="" className="social-element-img" /> </a>
            </div>
        </nav>
    </div>
)}

export default Navbar