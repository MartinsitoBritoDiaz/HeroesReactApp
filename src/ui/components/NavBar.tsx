import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../index.css';

export const NavBar = () => {
    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('./login', {
            replace: true
        })
    }

    const logoUrl = '/assets/logo.png'

    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar--background p-3 px-5">
            
            <Link 
                className="navbar-brand fw-bold animate__animated animate__headShake"  
                to="/"
            >
                <img src={logoUrl} alt='logo' className='logo'/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link rounded ${ isActive ? 'active link__hover' : ''} `} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link rounded ${ isActive ? 'active link__hover' : ''} `} 

                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link rounded ${ isActive ? 'active link__hover' : ''} `} 

                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-secondary'>
                        Martinsito
                    </span>

                    <button 
                        className='nav-item nav-link btn btn-background  text-white'
                        onClick={onLogOut}
                    >
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}