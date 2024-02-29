import Link from 'next/link';
import Button from "@mui/material/Button";
import "./NavigationBar.scss";

import { useState, useEffect } from 'react';

export default function NavigationBar() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        window.scrollY > 40 ? setScrolling(true) : setScrolling(false);
    }

    useEffect(() => {
        if (window.scrollY > 40) {
            setScrolling(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <header className={`header ${scrolling ? "header__scroll" : ""}`}>
            <Link href="#" scroll={false}>
                <img className="logo" src='/branding/logo/ousia_logo_short.png' alt='ousia logo'/>
            </Link>
            <nav className="navbar">
                <Link href="#roadmap" className="navbar__item heading-nav" scroll={false}>
                    Roadmap
                </Link>
                <Link href="#subscribe" className="navbar__item heading-nav" scroll={false}>
                    Subscribe
                </Link>
            </nav>
            <Button className="header__launch-app contact-button-primary" variant='contained' href='/swap'>Launch App</Button>
        </header>
    );
  }