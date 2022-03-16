import {
    Chrome,
    Nav,
    NavItem,
    NavItemIcon,
    NavItemText,
  } from "@zendeskgarden/react-chrome";
  import { ReactComponent as HomeIcon } from "@zendeskgarden/svg-icons/src/26/home-fill.svg";
  import { ReactComponent as ProductIcon } from "@zendeskgarden/svg-icons/src/26/relationshape-connect.svg";
  import { ReactComponent as SettingsIcon } from "@zendeskgarden/svg-icons/src/26/settings-fill.svg";
  
  import { Body, Content, Main, Header } from "@zendeskgarden/react-chrome";
  import React from "react";
  import theme from "@/App/theme";
  import { useLocation, useNavigate } from "react-router-dom";
  import * as PageData from "../PageData";
  
  export default ({ children }: { children: React.ReactNode }) => {
    const [active, setActive] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    return (
      <Chrome isFluid>
        <Nav
          isExpanded={active}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <NavItem hasLogo>
            <NavItemIcon>
              <ProductIcon style={{ color: theme.palette.green[400] }} />
            </NavItemIcon>
            <NavItemText>Zendesk Garden</NavItemText>
          </NavItem>
          <NavItem
            isCurrent={location.pathname === "/"}
            onClick={() => {
              navigate("/");
            }}
          >
            <NavItemIcon>
              <HomeIcon />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
          </NavItem>
  
          <NavItem
            isCurrent={location.pathname === "/settings"}
            title="Zendesk"
            onClick={() => {
              navigate("/settings");
            }}
          >
            <NavItemIcon>
              <SettingsIcon />
            </NavItemIcon>
            <NavItemText>Settings</NavItemText>
          </NavItem>
        </Nav>
        <Body>
          <Header><PageData.Title /></Header>
          <Content>
            <Main>{children}</Main>
          </Content>
        </Body>
      </Chrome>
    );
  };
  
  