import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container maxWidth="sm" component="footer" sx={{ marginTop: 'auto', padding: 2, backgroundColor: '#f8f8f8', position: 'sticky', bottom: 0 }}>
            <Typography variant="body2" color="text.secondary" align="center">
                © {new Date().getFullYear()} CV Builder. All rights reserved.
            </Typography>
        </Container>
    );
};

export default Footer;