import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate} from 'react-router-dom';
import {formatDate} from '../../../utils/dateFormatter';
import {Box} from "@mui/material";


const CvCard = ({cv}) => {
    const navigate = useNavigate();

    const handleViewCV = () => {
        navigate('/build', {state: cv});
    };
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {formatDate(cv.created_at)}
                </Typography>
                <Typography variant="h5" component="div">
                    {cv.title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    CV Description
                </Typography>
                <Typography variant="body2">
                    {cv.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center">
                    <IconButton onClick={() => {
                        console.log("TODO: Implement view only functionality")
                    }}>
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton onClick={handleViewCV}>
                        <EditIcon/>
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}

export default CvCard;