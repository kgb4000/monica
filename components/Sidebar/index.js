import React from 'react'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarLinkA,
  SidebarBtnWrap,
  SidebarBtnLink,
  SidebarBtnLinkA,
} from './SidebarElements'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Sibebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink href="/wedding-services" passHref>
                <SidebarLinkA>Services</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/blog" passHref>
                <SidebarLinkA>Blog</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/about" passHref>
                <SidebarLinkA>About</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/contact" passHref>
                <SidebarLinkA>Contact</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarBtnLink>
              <SidebarBtnLinkA href={calendly} passHref>
                Book A Call
              </SidebarBtnLinkA>
            </SidebarBtnLink>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sibebar
