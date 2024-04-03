import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { BiCabinet } from "react-icons/bi";
import { LiaUsersCogSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/">
          <IoHomeOutline /> <span>Home</span>
        </StyledNavLink>

        <StyledNavLink to="/bookings">
          <IoCalendarOutline />
          <span>Bookings</span>
        </StyledNavLink>

        <StyledNavLink to="/cabins">
          <BiCabinet />
          <span>Cabins</span>
        </StyledNavLink>

        <StyledNavLink to="/users">
          <LiaUsersCogSolid />
          <span>Users</span>
        </StyledNavLink>

        <StyledNavLink to="/settings">
          <IoSettingsOutline />
          <span>settings</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
};

export default MainNav;

// Ndesimoniche@1998

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3bXN6eHdtZG93ZnZvc2lqYW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5ODYzOTAsImV4cCI6MjAyNzU2MjM5MH0.fQf5dNILDpoJmBBAKT2or-HNJkx8xD4__X4L8HqESuo
