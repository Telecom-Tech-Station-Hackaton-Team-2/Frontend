import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faUser, faSignOutAlt, faSignInAlt, faHome, faList } from '@fortawesome/free-solid-svg-icons';

const loggedIn = true;

const NavBar = () => {
  if (loggedIn) {
    return (
        <>
            <div className="d-flex justify-content-between bd-highlight navbar-dark bg-dark pb-2 pt-2 ps-2">
                <div className="d-flex justify-content-start">
                    <div className="p-2 bd-highlight">
                        <Link exact="true" className="navbar-brand me-0 me-sm-1" to="/">Onboarding</Link>
                    </div>
                    <div className="p-2 bd-highlight">
                    </div>
                </div>
                <div className="d-flex justify-content-end group-buttons">
                    <div className="p-2 bd-highlight buttons">
                        <div className="btn-group">
                          <img src="https://ui-avatars.com/api/?name=John+Doe&rounded=true&size=38" />
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary rounded-circle border-0 ms-1 me-1 rounded-button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <Link className="dropdown-item" exact="true" to="/" >
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2"/>
                                        Salir
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} else {
    return (
        <>
            <div className="d-flex justify-content-between bd-highlight navbar-dark bg-dark pb-2 pt-2 ps-2">
                <div className="d-flex justify-content-start">
                    <div className="p-2 bd-highlight">
                        <Link exact="true" className="navbar-brand" to="/">Onboarding</Link>
                    </div>
                </div>
                <div className="d-flex justify-content-end group-buttons">
                    <div className="p-2 bd-highlight buttons">
                        <div className="btn-group">
                            <button className="btn btn-primary rounded-circle border-0 ms-1 me-1 rounded-button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" exact="true" to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="me-2"/>
                                        Ingresar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}

export default NavBar;
