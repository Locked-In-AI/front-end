import {Typography, Box} from '@mui/material';

const PersonalInfoPreview = ({personalInfo}) => {
    return (
        <>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                {personalInfo.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {personalInfo.address}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="body1" gutterBottom>
                    {personalInfo.email}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{mx: 1}}>
                    &bull;
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {personalInfo.phone}
                </Typography>
            </Box>
        </>
    );
};

export default PersonalInfoPreview;