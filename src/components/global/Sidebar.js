import {useState} from "react";
import {Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import * as Icons from '@mui/icons-material';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
    {title: "My CV's", to: "/", icon: <Icons.Dashboard/>},
    {title: "Build CV", to: "/build", icon: <Icons.Home/>},
     {title: "Job Application Tracker", to: "/job-application", icon: <Icons.Work/>},
    {title: "Profile", to: "/profile", icon: <Icons.Person/>},
    {title: "Sign Out", to: "/signout", icon: <Icons.Logout/>},
];

const SidebarComponent = ({window}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {menuItems.map(({title, to, icon}) => (
                    <ListItem button component={Link} to={to} key={title}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={title}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{keepMounted: true}}
                    sx={{display: {xs: 'block', sm: 'none'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}}}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{display: {xs: 'none', sm: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}}}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default SidebarComponent;