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

const calendly = 'https://calendly.com/mbweddings/30min'

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
                Services
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/blog" passHref>
                Blog
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/about" passHref>
                About
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/contact" passHref>
                Contact
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
