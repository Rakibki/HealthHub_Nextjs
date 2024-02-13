"use client";
import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../assets/images/logo.png";
import { Button, Grid, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Navber = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navItems = (
    <Grid color={"#1f2428"} sx={{ marginX: "auto" }}>
      <Stack direction="row">
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography fontWeight={600} textAlign="center">
            Home
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography fontWeight={600} textAlign="center">
            About
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography fontWeight={600} textAlign="center">
            Sevices
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography fontWeight={600} textAlign="center">
            Blog
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography fontWeight={600} textAlign="center">
            Contact
          </Typography>
        </MenuItem>
      </Stack>
    </Grid>
  );

  return (
    <div data-aos="fade-down">
      {/* <Head /> */}
      <Grid marginX={"auto"} maxWidth={"1300px"}>
        <AppBar
          sx={{
            backgroundColor: "#eef5ff",
            position: "fixed",
            zIndex: "54545",
            paddingY: "10px",
            maxWidth: "1300px",
          }}
          position="static"
        >
          <Container>
            <Toolbar disableGutters>
              <Grid sx={{ width: "150px" }}>
                <Image height={50} width={140} src={logo} alt="logo" />
              </Grid>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                ></Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {navItems}
              </Box>

              <MenuItem>{/* <Nonification /> */}</MenuItem>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button>Hello world</Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                ></Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Navber;
