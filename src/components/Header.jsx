import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('#navbarSupportedContent');

        if (navbarToggler && navbarCollapse) {
            const handleToggle = () => {
                navbarCollapse.classList.toggle('show');
            };
            
            navbarToggler.addEventListener('click', handleToggle);

            return () => {
                navbarToggler.removeEventListener('click', handleToggle);
            };
        }
    }, []);

    return (
        <div>
            <header className="position-absolute">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Product
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Promo
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
