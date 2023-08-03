import React from "react"
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { Menu as MuiMenu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import { APP_URLS } from "routes";
import { Typography } from "components";
import { useStore } from "store";
import { getW45ImageUrl } from "api";
import { HoverMenu } from "./components/HoverMenu/HoverMenu";
import {
  LogoImg,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Nav,
  AppHeader,
  StyledAvatar,
  ListItem,
} from "./styled";

import logo from "../../../assets/img/logo.svg";


const settings = ["Profile", "Account", "Dashboard", "Logout"];


export type HeaderMode = "normal" | "transparent"

interface Props {
  mode?: HeaderMode;
}

export const Header: React.FC<Props> = observer(({ mode }) => {
  const { accountStore } = useStore();
  const { username, avatar } = accountStore.account.data;
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isModeTransparent = mode === "transparent";
  const avatarPath = avatar ? getW45ImageUrl(avatar) : "";
  return (
    <AppHeader
      position="relative"
      className={[
        isModeTransparent ? "transparent" : "",
      ].join(" ")}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton aria-label="Go to home page" size="medium">
            <LogoImg src={logo} alt="logo" />
          </IconButton>
          <Nav>
            <ul>
              <li>
                <Link to={APP_URLS.browse.path}>
                  <Typography element="span" type="heading_6">Home</Typography>
                </Link>
              </li>
              <li>
                <Link to={APP_URLS.movies.path}>
                  <Typography element="span" type="heading_6">Movies</Typography>
                </Link>
              </li>
              <li>
                <Link to={APP_URLS.tvShows.path}>
                  <Typography element="span" type="heading_6">Shows</Typography>
                </Link>
              </li>
              <li>
                <HoverMenu
                  title="Favorite"
                  items={
                    <Stack direction="column" component="ul">
                      <ListItem>
                        <Link to={APP_URLS.favorite.movies.path} key="Movies">
                          <Typography element="span" type="heading_6">Movies</Typography>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to={APP_URLS.favorite.tv.path} key="TV">
                          <Typography element="span" type="heading_6">TV</Typography>
                        </Link>
                      </ListItem>
                    </Stack>
                  }
                />
              </li>
              <li>
                <Link to="/">
                  <Typography element="span" type="heading_6">People</Typography>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Typography element="span" type="heading_6">Geners</Typography>
                </Link>
              </li>
            </ul>
          </Nav>
          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <StyledAvatar alt={username} src={avatarPath}>
                  <PersonIcon fontSize="medium" />
                </StyledAvatar>
              </IconButton>
            </Tooltip>
            <MuiMenu
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
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography element="span" type="body_1" textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </MuiMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppHeader>
  )
});
