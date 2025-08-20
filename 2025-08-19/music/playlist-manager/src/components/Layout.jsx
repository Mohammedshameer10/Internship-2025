import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const drawerWidth = 200;

export default function Layout({ children }) {
  return (
   
    <Box
      sx={{
        display: "flex",
        bgcolor: "#19191a",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "rgb(37 37 38)",
            color: "white"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ minWidth: 35 }}>           
              <HomeIcon
              sx={{color:"#ff4d4d"}}
              />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "white" }} />
          </ListItem>

          <ListItem button component={Link} to="/favourite">
            <ListItemIcon sx={{ minWidth: 35 }}>              
                 <FavoriteIcon
                sx={{
                  color: "#ff4d4d",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Favourite" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ minWidth: 35 }}>           
              <LibraryMusicIcon
              sx={{color:"#ff4d4d"}}
              />
            </ListItemIcon>
            <ListItemText primary="Library" sx={{ color: "white" }} />
          </ListItem>
          

        </List>
      </Drawer>

    
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          p: 3,
          bgcolor: "#19191a",
          minHeight: "100vh",
          color: "white"
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "rgb(37 37 38)"
          }}
        >
          <Toolbar>
            <Typography variant="h6">Music</Typography>
          </Toolbar>
        </AppBar>

        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
