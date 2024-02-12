import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navBar">
    <div className='logo-container'>
      <Link to={"/"}><img src='https://kalvium.community/images/sidebar-2d-logo.svg' alt='logo' /></Link>
    </div>
     <div className='btn-container'>
     <h3>
      <Link to={"/contact"} style={{textDecoration: 'none', color: 'white'}}>Contact</Link>
      </h3>
      <h3><Link to={"/register"} style={{textDecoration: 'none', color: 'white'}}>Registration</Link></h3>
     </div>
    </div>
  )
}

export default Navbar