import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineInstagram, AiOutlineFacebook, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { useState, useEffect } from "react"

const Heading = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    color: grey;
    position: fixed;
    z-index: 9999;
    width: 100vw;
    transition: background-color 0.5s ease;
`

const Logo = styled.h2`
    font-weight: 400;
    cursor: pointer;

    a {
        color: inherit;
        text-decoration: none;
    }
`

const Red = styled.span`
    color: darkorange;
    opacity: 0.7;
`

const Navbar = styled.nav``

const NavList = styled.ul`
    height: ${props => props.phone && "80vh"};
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: ${ props => props.phone && "center"};
    flex-direction: ${ props => props.phone ? "column" : "row"};
    gap: 15px;
    text-transform: uppercase;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    a {
        color: inherit;
    }
`

const NavLink = styled.p`
    position: relative;

    a {
        text-decoration: none;
        position: relative;
        color: inherit;
    }


    &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
        width: 100%;
        transform: scaleX(0);
        background-color: darkorange;
        transition: transform 0.3s ease;
    }

    &:hover {
        a {
            color: darkorange;
        }

        &::before {
            transform: scaleX(1);
        }
    }
`

const Icon = styled.a`
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 30px;
    color: inherit;
    opacity: 0.8;

    &:hover {
        color: darkorange;
    }
`

const NavItem = styled.li``

const MenuButton = styled.button`
    border: 2px solid rgb(200, 110, 0);
    border-right: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 10px 5px;
    font-size: 30px;
    top: 30px;
    left: 0;
    background-color: darkorange;
    transform: translateX(-100%);
    color: white;
    cursor: pointer;
`

const Header = ({ showMenu, setShowMenu }) => {
    const [scrolled, setScrolled] = useState(false)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled( window.scrollY > 50 )
        }

        const handleResize = () => {
            setInnerWidth( window.innerWidth )
        }

        window.addEventListener( 'scroll', handleScroll )
        window.addEventListener( 'resize', handleResize )

        return () => {
            window.removeEventListener( 'scroll', handleScroll )
            window.removeEventListener( 'resize', handleResize )
        }
    }, [scrollY])

  return (
    <>   
        {
            innerWidth > 720 ?
            <Heading className={`${scrolled && 'scrolled'}`}>
                <Logo><Link to="/">Robert Orji<Red>.</Red></Link></Logo>
                <Navbar onClick={() => setShowMenu(false)}>
                    <NavList>
                        <NavItem><NavLink><Link to="/">Home</Link></NavLink></NavItem>
                        <NavItem><NavLink><a href="#works">Works</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="#about">About</a></NavLink></NavItem>
                        <NavItem>
                            <Links>
                                <Icon target="_blank" href="http://www.instagram.com"><AiOutlineInstagram /></Icon>
                                <Icon target="_blank" href="http://www.facebook.com"><AiOutlineFacebook /></Icon>
                                <Icon target="_blank" href="http://www.twitter.com"><FiTwitter /></Icon>
                            </Links>
                        </NavItem>
                    </NavList>
                </Navbar>
            </Heading>: 
            <div className={`phoneheading ${showMenu && "moveright"}`}>
                <Logo><Link to="/">Robert Orji<Red>.</Red></Link></Logo>
                {
                    showMenu ?
                    <MenuButton onClick={() => { setShowMenu(false) }}><AiFillCaretRight /></MenuButton> : 
                    <MenuButton onClick={() => { setShowMenu(true); console.log(showMenu) }}><AiFillCaretLeft /></MenuButton>
                }
                <Navbar onClick={() => setShowMenu(false)}>
                    <NavList phone={true}>
                        <NavItem><NavLink><Link to="/">Home</Link></NavLink></NavItem>
                        <NavItem><NavLink><a href="#works">Works</a></NavLink></NavItem>
                        <NavItem><NavLink><a href="#about">About</a></NavLink></NavItem>
                    </NavList>
                </Navbar>
                    <Links>
                        <Link noBefore={true}><Icon><AiOutlineInstagram /></Icon></Link>
                        <Link noBefore={true}><Icon><AiOutlineFacebook /></Icon></Link>
                        <Link noBefore={true}><Icon><FiTwitter /></Icon></Link>
                    </Links>
            </div>
        }
    </>
  )
}

export default Header
