import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import CvCard from "../components/CvCard";
import { fetchCvs as cvs } from "../data";


const CVList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        cvs().then(fetchedData => {
            if (fetchedData) {
                setData(fetchedData);
            }
        });
    }, []);

    return (<Grid container spacing={2}>
        {data.map((cv, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <CvCard cv={cv}/>
            </Grid>
        ))}
    </Grid>
    );
};

export default CVList;