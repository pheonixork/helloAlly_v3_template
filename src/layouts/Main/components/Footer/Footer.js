import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "components/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import logo from "svg/logos/logo.svg";
import logo_negative from "svg/logos/logo-negative.svg"

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display={"flex"}
            component={Link}
            to="/"
            title="Ally Digital Solutions"
            width={80}
          >
            <Box
              component={"img"}
              src={mode === "light" ? logo : logo_negative}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                to="/"
                color="text.primary"
                variant={"subtitle2"}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                to="/about"
                color="text.primary"
                variant={"subtitle2"}
              >
                About Page
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/about"
                size="small"
              >
                About Page
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          &copy; Ally Digital Solutions. {new Date().getFullYear()}, All rights
          reserved
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="text.secondary"
          component={"p"}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
