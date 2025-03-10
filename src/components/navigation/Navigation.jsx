import './Navigation.css'
import logoMedium from '/src/assets/logo-medium.png'
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <img className="nav-logo" src={logoMedium} alt="Logo"></img>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                 to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                 to="/posts">
                            Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"}
                                 to="/new">
                            Nieuwe post maken
                        </NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation