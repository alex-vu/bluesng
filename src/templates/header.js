import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../images/blue-sng-logo.jpg"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  display: flex;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 840px) {
    padding: 0 25px;
  }
`

const Brand = styled(AniLink)`
  display: inline-block;
  //   height: 30px;
  padding: 25px 27px 18px;
  margin-right: 20px;
  -webkit-transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);

  img {
    max-width: 175px;
    max-height: 30px;
    object-fit: cover;
  }

  @media (max-width: 840px) {
    padding-left: 0;
  }
`

const Navbar = styled.ul`
  display: flex;
  align-items: center;

  li {
    color: white;
    margin-right: 25px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: inherit;
    -webkit-transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      opacity: 0.6;
    }
  }
`

const navbarHide = css`
  @media (max-width: 1230px) {
    display: none;
  }
`

const right = css`
  margin-left: auto;
`
const ButtonLink = styled.a`
  font-weight: bold;
  background-color: #fff;
  padding: 6px 15px 6px 15px;
  box-shadow: rgba(0, 0, 0, 0.28) 1px 1px 4px;
  border-radius: 2px;
  -webkit-transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(transparent),
    to(rgba(0, 0, 0, 0.35))
  );
  background: -webkit-linear-gradient(
    bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.35) 100%);
  z-index: -2;
  -webkit-transition: height 0.36s cubic-bezier(0.215, 0.61, 0.355, 1),
    background 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: height 0.36s cubic-bezier(0.215, 0.61, 0.355, 1),
    background 0.36s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const dark = css`
  a {
    color: #000;
  }
`

export default () => (
  <Header>
    <Brand paintDrip to="/">
      <img src={Logo} alt="" />
    </Brand>
    <Navbar css={navbarHide}>
      <li>
        <a href="#">Top</a>
      </li>
      <li>
        <a href="#">Highlights</a>
      </li>
      <li>
        <a href="#">What's New</a>
      </li>
      <li>
        <a href="#">Artworks</a>
      </li>
      <li>
        <a href="#">App</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Artist</a>
      </li>
      <li>
        <a href="#">Nearby</a>
      </li>
      <li>
        <span>|</span>
      </li>
      <li>
        <a href="#">Tea House</a>
      </li>
    </Navbar>
    <Navbar css={right}>
      <li>
        <a href="#">Visit Us</a>
      </li>
      <li css={dark}>
        <ButtonLink href="#">Tickets</ButtonLink>
      </li>
      <li>
        <a href="#">Language</a>
      </li>
    </Navbar>
    <Shadow />
  </Header>
)
