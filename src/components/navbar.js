import { React, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Logo from './logo'
import { NavLink } from 'react-router-dom';
import { device } from '../device';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import theme from '../theme';

const Wrapper = styled.div`
    position: sticky;
    top: 0rem;
    margin: 0rem;
    padding: 1rem 0rem;
    z-index: 99;
    
    &.scrolled{
        transition: all 0.5s ease;
        background-color: ${theme.colors.blue};
    }

    a {
        color: black;
        text-decoration: none;
        margin: auto 0.5rem;

        @media only screen and (max-width: 1023px){
            margin: auto 0rem;
        }
    }

    @media only screen and (max-width: 1023px){
        padding: 1rem 0.5rem;
    }
`;

const MobileMenu = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 4rem 1rem 1rem 1rem;
    padding: 1rem 0rem;

    border-radius: 15px;
        font-family: Prata;
        font-size: 18px;
        line-height: 41px;
        text-align: center;
        background-color: ${theme.colors.white};
        opacity: 0.9;

    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: column;
    }
`;

const MobileNav = styled.div`
display: none;
padding: 0.25rem;
@media only screen and (max-width: 1023px){
    display: flex;
    flex-direction: row;
}
`;

const DesktopNav = styled.div`
    display: flex;

    @media only screen and (max-width: 1023px){
        display: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: khula;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin: 0rem auto 0rem auto;
`;

const MenuIcon = styled.div`

margin-left: auto;
margin-right:0.5rem;
display: flex;
color: ${props => props.color};

.menu {
    font-size: 30px;
}
`;

const Link = styled.div`
    padding: 0.25rem 1.25rem;
    margin: 0rem;
    border: 3px solid transparent;

    &.active {
        padding-bottom: 0rem;
        border: 3px solid ${theme.colors.menuItemSecondary};
        background-color: ${theme.colors.menuItemPrimary};
        border-radius: 30rem;
        // transition: all 0.2s ease;

        @media only screen and (max-width: 1023px){
            padding: 0.5rem 0rem 0.5rem 0rem;
            // transition: none;
            background-color: transparent;
            border: none;
            color: ${theme.colors.menuItemPrimaryMobile};
            width: 70vw;
        }

        @media only screen and (max-width: 560px){
            padding: 0.5rem 0rem 0.5rem 0rem;
        }
        @media only screen and (max-width: 420px){
            padding: 0.5rem 0rem 0.5rem 0rem;
        }
    }

    &:hover{
        // transition: all 0.2s ease;
        padding-bottom: 0rem;
        border: 3px solid ${theme.colors.menuItemSecondary};
        background-color: ${theme.colors.menuItemPrimary};
        border-radius: 30rem;

        @media only screen and (max-width: 1023px){
            padding-bottom: none;
            border-bottom: 0px solid ${theme.colors.menuItemSecondary};
            // transition: none;
        }
    }

    @media only screen and (max-width: 1259px){
        padding: 0.25rem 1rem;
    }

    @media only screen and (max-width: 1023px){
        padding-bottom: none;
        border-bottom: 0px solid ${theme.colors.menuItemSecondary};
        // transition: none;
        padding: 0rem;
    }

    @media only screen and (max-width: 425px){
        padding: 0.5rem 0rem 0.5rem 0rem;
    }
`;

const MenuItems = [
    {
        title: "Home",
        url: "/",
        exact: true,
    },
    {
        title: "News",
        url: "/news",
    },
    {
        title: "Arts & Entertainment",
        url: "/a&e",
    },
    {
        title: "Sports",
        url: "/sports",
    },
    {
        title: "Spectrum",
        url: "/spectrum",
    },
    {
        title: "Credits",
        url: "/credits",
    },
]


const Navbar = ({ lightLogo, currentSection, setSection }) => {
    const [show, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > 1023) {
            setToggle(true);
        }
    });

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <Wrapper className={(scrollY > 10) ? "scrolled" : "normal"}>
            <DesktopNav>
                <Logo lightLogo={lightLogo} />
                {MenuItems.map((item) => {
                    return (
                        <>
                            <NavLink to={item.url} exact={item.exact}>
                                <Link className={currentSection === item.title ? "active" : ""} onClick={() => setSection(item.title)}>
                                    {item.title}
                                </Link>
                            </NavLink>
                        </>
                    )
                })}
            </DesktopNav>
            <MobileNav>
                <Logo lightLogo={lightLogo} />
                <MenuIcon color={currentSection === "Home"? 'white':'black'}>
                    <IconContext.Provider value={{ className: 'menu' }}>
                        {show ?
                            <MdClose onClick={() => setToggle(!show)} /> : <GiHamburgerMenu onClick={() => setToggle(!show)} />}
                    </IconContext.Provider>
                </MenuIcon>
            </MobileNav>
            <MobileMenu>
                {MenuItems.map((item) => {
                    return (
                        <>
                            {(show) ?
                                <NavLink to={item.url} exact={item.exact}>
                                    <Link className={currentSection === item.title ? "active" : ""} onClick={() => { setToggle(!show); setSection(item.title) }}>
                                        {item.title}
                                    </Link>
                                </NavLink> : null}
                        </>
                    )
                })}
            </MobileMenu>
        </Wrapper>
    );
};

export default Navbar;