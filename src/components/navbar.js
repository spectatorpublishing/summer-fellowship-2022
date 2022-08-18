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
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
    position: sticky;
    top: 0rem;
    margin: 0rem 0rem 0rem 0rem;

    .react-icons{
        margin: 2rem 0rem -2rem 0rem;

        @media only screen and (max-width: 1023px){
            display: none;
        }
    }

    .menu {
        display: none;

        @media only screen and (max-width: 1023px){
            display: block;
            margin: auto 2rem auto 25rem;
            font-size: 30px;
        }

        @media only screen and (max-width: 690px){
            margin: auto 2rem auto 20rem;
        }

        @media only screen and (max-width: 609px){
            margin: auto 2rem auto 15rem;
        }

        @media only screen and (max-width: 609px){
            margin: auto 2rem auto 15rem;
        }

        @media only screen and (max-width: 500px){
            margin: auto 2rem auto 10rem;
        }

        @media only screen and (max-width: 425px){
            margin: auto 2rem auto 7rem;
        }

        @media only screen and (max-width: 375px){
            margin: auto 2rem auto 4rem;
        }

        @media only screen and (max-width: 320px){
            margin: auto 2rem auto 1rem;
        }
        
    }

    a{
        color: black;
        text-decoration: none;
        margin: 1rem 0.5rem;

        &.active {
            padding-bottom: 0rem;
            border: 3px solid ${theme.colors.menuItemSecondary};
            border-radius: 30rem;
            background-color: ${theme.colors.menuItemPrimary};
            transition: all 0.2s ease;
    
            @media only screen and (max-width: 1023px){
                padding: 0.5rem 0rem 0.5rem 0rem;
                transition: none;
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

        @media only screen and (max-width: 1023px){
            margin: 0rem 0rem;
        }
    }

    @media only screen and (max-width: 1023px){
        padding-bottom: 1rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: khula;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin: 0rem auto 0rem auto;

    @media only screen and (max-width: 1023px){
        flex-direction: column;
    }

    @media only screen and (max-width: 1023px){
        border-bottom: 0px solid #000000;
        font-family: Prata;
        font-size: 18px;
        line-height: 41px;
        text-align: center;
        margin: 0rem auto 0rem auto;
    }
`;

const MobileNav = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 3.5rem 1rem 1rem 1rem;

    border-radius: 15px;
        font-family: Prata;
        font-size: 18px;
        line-height: 41px;
        text-align: center;
        // margin: 0rem auto 0rem auto;
        background-color: ${theme.colors.white};
        opacity: 0.9;

    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: column;
    }
`;

const DesktopNav = styled.div`
    display: flex;

    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const Link = styled.div`
    padding: 0.25rem 1.25rem;
    margin: 0rem auto 0rem auto;

    &:hover{
        border: 3px solid ${theme.colors.menuItemSecondary};
        border-radius: 30rem;
        transition: all 0.2s ease;

        @media only screen and (max-width: 1023px){
            padding-bottom: none;
            border-bottom: 0px solid ${theme.colors.menuItemSecondary};
            transition: none;
        }
    }

    @media only screen and (max-width: 1259px){
        padding: 0.25rem 1rem;
    }

    @media only screen and (max-width: 1023px){
        padding-bottom: none;
        border-bottom: 0px solid ${theme.colors.menuItemSecondary};
        transition: none;
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


const Navbar = ({ lightLogo, setSection }) => {
    const [show, setToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > 1023) {
            setToggle(true);
        }
    });

    return (
        <Wrapper>
            <Nav>
                <Row>
                    <Logo lightLogo={lightLogo} />
                    <IconContext.Provider value={{ className: 'menu' }}>
                        {show ?
                            <MdClose onClick={() => setToggle(!show)} /> : <GiHamburgerMenu onClick={() => setToggle(!show)} />}
                    </IconContext.Provider>
                </Row>
                <DesktopNav>
                    {MenuItems.map((item) => {
                        return (
                            <>
                                <NavLink to={item.url} exact={item.exact} value={{ activeClassName: 'active' }}>
                                    <Link activeClassName="active" onClick={() => setSection(item.title)}>
                                        {item.title}
                                    </Link>
                                </NavLink>
                            </>
                        )
                    })}
                </DesktopNav>
                <MobileNav>
                    {MenuItems.map((item) => {
                        return (
                            <>
                                {(show) ?
                                    <NavLink to={item.url} exact={item.exact} value={{ activeClassName: 'active' }}>
                                        <Link activeClassName="active" onClick={() => { setToggle(!show); setSection(item.title) }}>
                                            {item.title}
                                        </Link>
                                    </NavLink> : null}
                            </>
                        )
                    })}
                </MobileNav>
            </Nav>
        </Wrapper>
    );
};

export default Navbar;