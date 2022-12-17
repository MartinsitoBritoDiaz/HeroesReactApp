import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../index.css';

export const NavBar = () => {
    const navigate = useNavigate();

    const onLogOut = () => {
        navigate('./login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar--background p-2 px-5">
            
            <Link 
                className="navbar-brand fw-bold"  
                to="/"
            >
                Heroes
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} 

                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''} `} 

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
                        className='nav-item nav-link btn btn-secondary text-white'
                        onClick={onLogOut}
                    >
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}