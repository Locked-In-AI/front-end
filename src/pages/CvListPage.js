import React, {useEffect, useState} from 'react';
import {Card, CardHeader, Skeleton, Grid} from '@mui/material';
import { fetchCvs } from "../data";
import CvCard from "../components/CvCard";

const CVList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    setIsLoading(true);
    fetchCvs()
        .then(data => {
            setData(data || []);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Failed to fetch CVs:', error);
            setData([]);
            setIsLoading(false);
        });
}, []);

    if (isLoading) {
        return (
            <Grid container spacing={2}>
                {Array.from(new Array(3)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, m: 2 }}>
                            <CardHeader
                                avatar={
                                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                }
                                action={null}
                                title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                                subheader={<Skeleton animation="wave" height={10} width="40%" />}
                            />
                            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }

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