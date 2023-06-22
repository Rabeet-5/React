import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from '@mui/icons-material/Logout';
import About from "./About";
import Notification from "./Notification";
import Feedback from "./Feeds";
import LoginPage from "../../../components/Login";
import axios from "axios";




const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [list, setList] = React.useState([
    {
      name: 'Notification',
      route: 'notify',
      icon: <NotificationsNoneIcon />
    },
    {
      name: 'Feedback',
      route: 'feedback',
      icon: <FeedbackIcon />
    },
    {
      name: 'About',
      route: 'about',
      icon: <InfoIcon />
    },


  ])


  const [log, setLog] = React.useState([{

    name: 'Logout',
    route: 'logout',
    icon: <LogoutIcon />
  }])


  const navigate = useNavigate()
  const ChangeScreen = (route) => {
    navigate(route)
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {list.map((x, index) => (
          <ListItem key={index} disablePadding
            onClick={() => ChangeScreen(x.route)}
          >
            <ListItemButton >
              <ListItemIcon>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Toolbar />
      <Divider />
      <List>
        {log.map((x, index) => (
          <ListItem key={index} disablePadding
            onClick={() => ChangeScreen(x.route)}

          //Add logout function here 
          >
            <ListItemButton onClick={(event) => {
            }} >
              <ListItemIcon>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Routes>
          <Route path="/notify" element={<Notification />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>

      </Box>
    </Box>
  );
}


export default Dashboard;