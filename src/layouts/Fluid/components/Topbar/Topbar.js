import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "components/Link";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from 'svg/logos/logo.svg'
import logo_negative from 'svg/logos/logo-negative.svg'


import { NavItem, ThemeModeToggler } from "./components";

const Topbar = ({ onSidebarOpen, pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    account: accountPages
  } = pages;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component={Link}
        to="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light"
              ? logo
              : logo_negative
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem
            title={"Landings"}
            id={"landing-pages"}
            items={landingPages}
          />
        </Box>
        <Box marginLeft={3}>
          <NavItem
            title={"Pages"}
            id={"secondary-pages"}
            items={secondaryPages}
          />
        </Box>
        <Box marginLeft={3}>
          <NavItem
            title={"Account"}
            id={"account-pages"}
            items={accountPages}
          />
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            to="/docs/introduction"
            color="text.primary"
          >
            Docs Page
          </Link>
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            target="blank"
            to="/about"
            size="large"
          >
            About Page
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
        <Box marginRight={2}>
          <ThemeModeToggler />
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2)
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object
};

export default Topbar;
