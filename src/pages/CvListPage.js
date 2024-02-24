import React from 'react';
import { Grid } from '@mui/material';
import CvCard from "../components/CvCard";
import { dummyCVs} from "../data";

const CVList = () => {
    const cvs = dummyCVs;
    return (
        <Grid container spacing={2}>
            {cvs.map((cv, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CvCard cv={cv} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CVList;