import { Stack, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { toCamelCase } from '../../util';

const fields = ['Name', 'Email', 'Phone', 'Address', 'LinkedIn', 'GitHub', 'Personal Website', 'Objective'];

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
    const initialValues = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
    const [values, setValues] = useState({ ...initialValues, ...personalInfo });

    const handleChange = (field) => (event) => {
        setValues(prevValues => {
            const newValues = { ...prevValues };
            newValues[field] = event.target.value;

            return Object.entries(newValues).reduce((acc, [key, value]) => {
                acc[toCamelCase(key)] = value;
                return acc;
            }, {});
        });
    };

    useEffect(() => {
        setPersonalInfo(values);
    }, [values, setPersonalInfo]);

    return (
        <>
            {fields.map((field) => (
                <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField label={field} value={values[field]} onChange={handleChange(field)} multiline={field === 'Objective'} />
                </Stack>
            ))}
        </>
    );
};

export default PersonalInfo;