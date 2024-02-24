import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="sticky" style={{top: 0}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CV Builder
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;