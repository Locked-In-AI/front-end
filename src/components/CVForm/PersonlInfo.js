import { Stack, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { toTitleCase } from '../../utils/strOpr';

const fields = ['name', 'email', 'phone', 'address', 'linkedin', 'github', 'personal_website', 'objective'];

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
    const initialValues = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
    const [values, setValues] = useState({ ...initialValues, ...personalInfo });

    const handleChange = (field) => (event) => {
        setValues(prevValues => {
            const newValues = { ...prevValues };
            newValues[field] = event.target.value;

            return Object.entries(newValues).reduce((acc, [key, value]) => {
                acc[key] = value;
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
                    <TextField label={toTitleCase(field)} value={values[field]} onChange={handleChange(field)} fullWidth />
                </Stack>
            ))}
        </>
    );
};

export default PersonalInfo;