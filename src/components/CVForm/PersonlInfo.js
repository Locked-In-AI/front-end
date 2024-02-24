import {Stack, TextField} from '@mui/material';
import {useState} from 'react';

const fields = ['Name', 'Email', 'Phone', 'Address', 'LinkedIn', 'GitHub', 'Personal Website', 'Objective'];

const PersonalInfo = () => {
    const [values, setValues] = useState(Array(fields.length).fill(''));

    const handleChange = (index) => (event) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };

    return (
        <>
            {fields.map((field, index) => (
                <Stack key={field} spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField label={field} value={values[index]} onChange={handleChange(index)}
                               multiline={field === 'Objective'}/>
                </Stack>
            ))}
        </>
    );
};

export default PersonalInfo;