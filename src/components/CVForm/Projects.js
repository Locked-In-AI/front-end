import { Stack, TextField, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { toCamelCase } from '../../util';

const fields = ['Project Name', 'Project Description', 'Start Year', 'End Year', 'Technologies Used'];

const Projects = ({ projects, setProjects }) => {
  const initialProject = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
  const [entries, setEntries] = useState(Array.isArray(projects) && projects.length > 0 ? projects : [initialProject]);

  useEffect(() => {
    setProjects(entries);
  }, [entries, setProjects]);

  const handleChange = (entryIndex, field) => (event) => {
    setEntries(prevEntries => {
      const newEntries = [...prevEntries];
      newEntries[entryIndex][field] = event.target.value;

      return newEntries.map(entry => {
        return Object.entries(entry).reduce((acc, [key, value]) => {
          acc[toCamelCase(key)] = value;
          return acc;
        }, {});
      });
    });
  };



  const handleAddEntry = () => {
    setEntries([...entries, initialProject]);
  };

  const handleRemoveEntry = (entryIndex) => () => {
    const newEntries = [...entries];
    newEntries.splice(entryIndex, 1);
    setEntries(newEntries);
  };

  return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" width="100%">
        <div>
          {entries.map((entry, entryIndex) => (
              <div key={entryIndex}>
                {fields.map((field) => (
                    <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <TextField label={field} value={entry[field]} onChange={handleChange(entryIndex, field)} />
                    </Stack>
                ))}
                <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
              </div>
          ))}
          <Button onClick={handleAddEntry}>Add Project</Button>
        </div>
      </Box>
  );
};

export default Projects;