import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './header.css';
import i18next from 'i18next';
import { Trans } from 'react-i18next';
import { MyContext } from '../context/LngContext';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
    const [nextLang, setnextLang] = useState({
        languageName: 'English',
        imgFlag: '/assets//home/american-flag.webp',
    });
    const [currentLang, setCurrentLand] = useState('');
    const { setcurrentLng } = useContext(MyContext);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
            setScrolled(isScrolled);
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setCurrentLand(localStorage.getItem('lng') || 'ar');
    }, [nextLang]);

    const handleNavbarToggle = () => {
        setNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleLangToggle = () => {
        if (currentLang === 'en') {
            localStorage.setItem('lng', 'ar');
            setcurrentLng('ar');
            i18next.changeLanguage('ar');
            setnextLang({
                languageName: 'English',
                imgFlag: '/assets//home/american-flag.webp',
            });
        } else {
            localStorage.setItem('lng', 'en');
            setcurrentLng('en');
            i18next.changeLanguage('en');
            setnextLang({
                languageName: 'Arabic',
                imgFlag: '/assets/home/arabic-flag.webp',
            });
        }
    };
    const humburgerBtn = useRef<HTMLButtonElement>(null);
    const fireEvent = () => {
        if (window.innerWidth < 992) {
            if (humburgerBtn.current) {
                // Programmatically trigger a click event
                humburgerBtn.current.click();
            }
        }
    };

    return (
        <>
            <nav
                className={`navbar px-4  navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''} ${
                    isNavbarCollapsed ? 'm-0' : ''
                }`}
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-start" to="/">
                        <img src="/assets/logonavbar.svg" alt="" />
                    </NavLink>
                    <button
                        ref={humburgerBtn}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleNavbarToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
                        <div className="navbar-nav  justify-content-between align-items-center ">
                            <NavLink
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    fireEvent();
                                }}
                                className={`nav-link mx-3 ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                <Trans i18nKey="Home"></Trans>
                            </NavLink>

                            <NavLink
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    fireEvent();
                                }}
                                className={`nav-link mx-3 ${location.pathname === '/about' ? 'active' : ''}`}
                                to="/about"
                            >
                                <Trans i18nKey="About us"></Trans>
                            </NavLink>
                            <li className="nav-item dropdown m-0 p-0">
                                <a className={`nav-link `} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Trans i18nKey="Services"></Trans>
                                </a>
                                <ul className="dropdown-menu bg-primary text-light">
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item  ${
                                                location.pathname.startsWith('/services/web-design') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/web-design"
                                        >
                                            <Trans i18nKey="Web design"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item ${
                                                location.pathname.startsWith('/services/mobile-app') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/mobile-app"
                                        >
                                            <Trans i18nKey="Mobile App"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item ${
                                                location.pathname.startsWith('/services/online-store-design') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/online-store-design"
                                        >
                                            <Trans i18nKey="Online store design"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item  ${
                                                location.pathname.startsWith('/services/seo') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/seo"
                                        >
                                            <Trans i18nKey="SEO"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item ${
                                                location.pathname.startsWith('/services/web-hosting') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/web-hosting"
                                        >
                                            <Trans i18nKey="Web Hosting"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li className="m-0 p-0">
                                        <NavLink
                                            className={`dropdown-item  ${
                                                location.pathname.startsWith('/services/wordpress') ? 'active' : ''
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0 });
                                                fireEvent();
                                            }}
                                            to="/services/wordpress"
                                        >
                                            <Trans i18nKey="WordPress"></Trans>{' '}
                                        </NavLink>
                                    </li>
                                    <hr />
                                    {/* Add other dropdown items here */}
                                </ul>
                            </li>
                            <NavLink
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    fireEvent();
                                }}
                                className={`nav-link mx-3 ${location.pathname === '/portfolio' ? 'active' : ''}`}
                                to="/portfolio"
                            >
                                <Trans i18nKey="Portfolio"></Trans>
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    fireEvent();
                                }}
                                className={`nav-link mx-3 ${location.pathname === '/contact-us' ? 'active' : ''}`}
                                to="/contact-us"
                            >
                                <Trans i18nKey="Contact us"></Trans>
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    window.scrollTo({ top: 0 });
                                    fireEvent();
                                }}
                                className={`nav-link mx-3 ${location.pathname === '/blogs' ? 'active' : ''}`}
                                to="/blogs"
                            >
                                <Trans i18nKey="Blogs"></Trans>
                            </NavLink>
                        </div>
                        <button onClick={handleLangToggle} className="btn-lang p-3">
                            <img className="px-2 language-flag" src={nextLang.imgFlag} alt="" />
                            {nextLang.languageName}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
