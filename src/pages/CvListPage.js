import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import CvCard from "../components/CvCard";
import { fetchCvs } from "../data";

const CVList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchCvs().then(setData);
    }, []);

    return (
        <Grid container spacing={2}>
            {data.map((cv, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CvCard cv={cv}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default CVList;