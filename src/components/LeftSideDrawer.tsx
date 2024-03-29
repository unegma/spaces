import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {Menu} from "@mui/icons-material";
import {MultiLevel} from "./SubMenus";

export default function LeftSideDrawer(
  {drawerOpen, toggleLeftSideDrawer, setShowImages, setShowInfoModal}:
    {drawerOpen: any, toggleLeftSideDrawer: any, setShowImages: any, setShowInfoModal: any}) {

  const SUBMENU_TITLE = 'The Space';
  const spacesList = {
    title: SUBMENU_TITLE,
    items: [
      {
        key: 'space',
        name: "Space One",
      },
    ]
  };

  const preToggleLeftSideDrawer = (event: any) => {
    // TODO would be better do to this based on parent element, but the js-ignore-close doesn't seem to be there
    if (event.target.innerHTML === SUBMENU_TITLE || event.target.classList.contains('js-ignore-close')) {
      event.preventDefault(); // todo might not be needed
    } else {
      toggleLeftSideDrawer(event);
    }
  }

  return (
    <Drawer
      open={drawerOpen}
      onClose={(event:any) => {preToggleLeftSideDrawer(event)}}
      // PaperProps={{
      //   sx: {
      //     backgroundColor: "black",
      //     color: "white",
      //   }
      // }}
    >
      <Box
        component="div"
        sx={{ width: 250 }}
        role="presentation"
        onClick={(event: any) => {preToggleLeftSideDrawer(event)}}
        onKeyDown={(event: any) => {preToggleLeftSideDrawer(event)}}
      >

        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'nav'} disablePadding>
              <div className={`hamburger-button`}>
                <Menu className="pointer" style={{ color: "black", margin: "4px -4px 0 14px" }}/>
              </div>
              <Typography className={`main-title main-title-navbar`} variant="h6" component="div" sx={{ flexGrow: 1 }}
                          onClick={(event:any) => {preToggleLeftSideDrawer(event)}}>
                {process.env.REACT_APP_NAV_TITLE}
              </Typography>
            </ListItem>
          </Link>
        </List>

        <Divider/>

        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'home'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>

        <Divider className='light-divider' />

        <MultiLevel className="js-ignore-close" item={spacesList} />

        <Divider className='light-divider' />

        <List>
          <ListItem key={'info'} disablePadding onClick={() => setShowInfoModal(true)}>
            <ListItemButton>
              <ListItemText primary={'Info'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'home'} disablePadding onClick={() => setShowImages(true)}>
            <ListItemButton>
              <ListItemText primary={'Photos'} />
            </ListItemButton>
          </ListItem>
        </List>

      </Box>
    </Drawer>
  )
}
