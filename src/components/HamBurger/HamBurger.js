import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiHoneypot } from "react-icons/gi";
import { Logo } from "../../constants/constants";
import GiHamburgerMenu from "./BurgerIcon";
import {
  Container,
  Span,
  Div1,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
  Img,
} from "./HamBurgerStyles";

const Hamburger = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            height="2.5rem"
            width="2.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.471 10.533l1.771 1.688 5.598 5.141 2.4-2.291c.21-.297.194-.705-.046-.985L9.99 12.184l.01-.005-2.371-2.266c-.279-.314-.27-.78.021-1.079l6.39-6.076L11.146 0 2.475 8.238c-.664.633-.664 1.66 0 2.295h-.004zm19.056 2.937l-1.77-1.691-5.595-5.142-2.411 2.291c-.221.3-.207.705.045.985l2.205 1.891h-.006l2.369 2.265c.27.314.27.766-.029 1.064l-6.391 6.075L12.855 24l8.67-8.238c.664-.633.666-1.659 0-2.295l.002.003z"></path>
          </svg>
          <Span>HoneyKhra</Span>
        </a>
      </Link>
      <Div4>
        <GiHamburgerMenu />
      </Div4>
    </Div1>
    <Div3 >
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>

      <SocialIcons href="https://github.com/honeykhra">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/honey-khra/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/honeykhra/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Hamburger;
