import styled from "styled-components";
import { ReactComponent as HomeIcon } from "@zendeskgarden/svg-icons/src/26/home-fill.svg";
import { Anchor as ZAnchor } from "@zendeskgarden/react-buttons";
import { ReactComponent as SettingsIcon } from "@zendeskgarden/svg-icons/src/26/settings-fill.svg";
import { useLocation, useNavigate } from "react-router-dom";
import * as PageData from "../PageData";
import { Body, Content, Main, Header } from "@zendeskgarden/react-chrome";

const Anchor = styled(ZAnchor)``;
const BottomDrawer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.theme.palette[props.theme.colors.chromeHue]["600"]};
  border-top: 1px solid
    ${(props) => props.theme.palette[props.theme.colors.chromeHue]["400"]};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${Anchor} {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    padding: 0.5rem 1rem;
    &.active {
      color: ${(props) => props.theme.palette.white};
      background-color: ${(props) =>
        props.theme.palette[props.theme.colors.chromeHue]["600"]};
    }
  }
`;

export default ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Body style={{marginBottom:"55px"}}>
        <Header>
          <PageData.Title />
        </Header>

        <Content>
          <Main>{children}</Main>
        </Content>
      </Body>
      <BottomDrawer>
        <Anchor
          onClick={() => navigate("/")}
          className={location.pathname === "/" ? "active" : ""}
        >
          <HomeIcon />
        </Anchor>
        <Anchor
          onClick={() => navigate("/settings")}
          className={location.pathname === "/settings" ? "active" : ""}
        >
          <SettingsIcon />
        </Anchor>
      </BottomDrawer>
    </>
  );
};
