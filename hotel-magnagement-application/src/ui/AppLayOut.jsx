import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayOut = styled.div`
  display: grid;

  grid-template-columns: 2.5 1fr;
`;

const MainNav = styled.main`
  background-color: pink;
`;

const AppLayOut = () => {
  return (
    <StyledAppLayOut>
      <Header />
      <Sidebar />

      <MainNav>
        <Outlet />
      </MainNav>
    </StyledAppLayOut>
  );
};

export default AppLayOut;
