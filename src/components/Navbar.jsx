import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
const[openMenu, setOpenMenu] = useState(false);
const Nav = styled.nav`

.Navbar-list{
    display: flex;
    gap: 4.8rem;
    li{

        list-style:none;
        .navbar-link{
            &:link,
            &:visited {
              display: inline-block;
              text-decoration: none;
              font-size: 1.8rem;
              text-transform: uppercase;
              color: ${({theme})=> theme.colors.white};
              transition: color 0.3s linear;
            }
            text-decoration: none;
            &:hover,
            &:active{
                color: #47a079;
            }
        }
    }

}
.mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      
      .Navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }
            &:hover,
            &:active {
              color: #fff;
            }
          }
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: #fff;
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .active .Navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
`;
return (<Nav>
    <div className={openMenu ? "menuIcon active" : "menuIcon"}>

        <ul className='Navbar-list'>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/">Home</NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/Events">Events</NavLink>
                
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/about">About</NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/register">Register</NavLink>
        </li>
        <li>
                <NavLink className="navbar-link" onClick={() => setOpenMenu(false)} to="/user">Login</NavLink>
        </li>
        </ul>
        <div className='mobile-navbar-btn'>
            <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
                name="close-outline"
                className="close-outline mobile-nav-icon"
                onClick={() => setOpenMenu(false)}
            />
        </div>
    </div>
  </Nav>
);

};

export default Navbar;