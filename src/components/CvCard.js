import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CvCard = ({cv}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {cv.created_at}
        </Typography>
        <Typography variant="h5" component="div">
          {cv.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          CV Description
        </Typography>
        <Typography variant="body2">
          {cv.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View CV</Button>
      </CardActions>
    </Card>
  );
}

export default CvCard;