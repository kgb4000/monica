import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: rgba(162, 155, 254, 0.45) none repeat scroll 0% 0%;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  ${'' /* position: sticky; */}
  top: 0;
  z-index: 10;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  max-width: 1200px;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
`
// export const NavLogo = styled.div`
//   color: #000;
//   font-size: 1.5rem;
//   font-weight: 900;
//   align-self: center;
//   font-weight: bold;
//   text-decoration: none;
//   cursor: pointer;
// `

export const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  align-self: center;
  font-weight: bold;
  cursor: pointer;
  font-style: inherit;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    transform: translate(-100%. 60%);
    font-size: 1.8rem;
    cursor: pointer;
    align-item: center;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  li {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
  color: #000;
`

export const NavLinks = styled(Link)`
  &:active {
    border-bottom: 3px solid #ff5200;
  }
`

export const NavLinksA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 83px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`

export const NavBtn = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.div`
  border-radius: 5px;
  border: 2px solid #a29bfe;
  background-color: #a29bfe;
  white-space: nowrap;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #a29bfe;
    border: none;
  }
`

export const BtnLinksA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    color: #000;
  }
`
