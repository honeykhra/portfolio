import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;
export const Div1 = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
export const Span = styled.span`
  font-size: 2rem;
  padding: 0rem 1rem;
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div4 = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;


// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 50px;
  object-fit: crop;
  z-index: 999;
`;
