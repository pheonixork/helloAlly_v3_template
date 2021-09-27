import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "components/Link";

import NavItem from "./components/NavItem";

const SidebarNav = ({ pages, onClose }) => {
  const {
    landings: landingPages,
    secondary: secondaryPages,
    account: accountPages
  } = pages;

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          <NavItem title={"Landings"} items={landingPages} />
        </Box>
        <Divider sx={{ marginBottom: 2 }} />
        <Box>
          <NavItem title={"Pages"} items={secondaryPages} />
        </Box>
        <Divider sx={{ marginBottom: 2 }} />
        <Box>
          <NavItem title={"Account"} items={accountPages} />
        </Box>
        <Divider sx={{ marginBottom: 2 }} />
        <Box marginTop={1}>
          <Button variant="outlined" fullWidth component={Link} to="/about">
            About Page
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to="/"
          >
            Home Page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default SidebarNav;
