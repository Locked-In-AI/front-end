import {Box, Button, CircularProgress, Stack, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import {toCamelCase} from '../../utils/strOpr';
import IconButton from '@mui/material/IconButton';
import {FaceRetouchingNaturalRounded} from "@mui/icons-material";

const fields = ['Company Name', 'Job Title', 'Start Year', 'End Year', 'Description'];

const Experience = ({experience, setExperience}) => {
    const initialExperience = fields.reduce((obj, field) => ({...obj, [field]: ''}), {});
    const [entries, setEntries] = useState(Array.isArray(experience) && experience.length > 0 ? experience : [initialExperience]);
    const [loading, setLoading] = useState(false);
    const handleChange = (entryIndex, field) => (event) => {
        const newEntries = [...entries];
        newEntries[entryIndex][field] = event.target.value;


        setEntries(newEntries.map(entry => {
            return Object.entries(entry).reduce((acc, [key, value]) => {
                acc[toCamelCase(key)] = value;
                return acc;
            }, {});
        }));
    };

    const handleAddEntry = () => {
        setEntries([...entries, initialExperience]);
    };

    const handleRemoveEntry = (entryIndex) => () => {
        const newEntries = [...entries];
        newEntries.splice(entryIndex, 1);
        setEntries(newEntries);
    };

    const callApi = (description) => {
        setLoading(true);
        fetch('https://backend-url.com/end-point', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
            }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        setExperience(entries);
    }, [entries, setExperience]);

    return (
        <>
            {entries.map((entry, entryIndex) => (
                <div key={entryIndex}>
                    {fields.map((field) => (
                        <Stack key={field} spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <Box position="relative" width="100%">
                                <TextField
                                    label={field}
                                    value={entry[field]}
                                    onChange={handleChange(entryIndex, field)}
                                    fullWidth
                                    multiline={field === 'Description'}
                                    rows={field === 'Description' ? 4 : 1}
                                />
                                {field === 'Description' && (
                                    <IconButton about="Optimize"
                                        onClick={() => callApi(entry[field])}
                                        sx={{position: 'absolute', bottom: 0, right: 0}}
                                        disabled={loading}
                                    >
                                        {loading ? <CircularProgress size={24} /> : <FaceRetouchingNaturalRounded/>}
                                    </IconButton>
                                )}
                            </Box>
                        </Stack>
                    ))}
                    <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
                </div>
            ))}
            <Button onClick={handleAddEntry}>Add Entry</Button>
        </>
    );
};

export default Experience;