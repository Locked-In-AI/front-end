import { Stack, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { toTitleCase } from '../../utils/strOpr';

const fields = ['project_name', 'description', 'start_year', 'end_year', 'technologies_used'];

const Projects = ({ projects, setProjects }) => {
  const initialProject = fields.reduce((obj, field) => ({ ...obj, [field]: '' }), {});
  const [entries, setEntries] = useState(projects.length > 0 ? projects : [initialProject]);
  useEffect(() => {
    setProjects(entries);
  }, [entries, setProjects]);

  const handleChange = (entryIndex, field) => (event) => {
    setEntries(prevEntries => {
      const newEntries = [...prevEntries];
      newEntries[entryIndex][field] = event.target.value;

      return newEntries.map(entry => {
        return Object.entries(entry).reduce((acc, [key, value]) => {
          acc[key] = value;
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
        <>
          {entries.map((entry, entryIndex) => (
              <div key={entryIndex}>
                {fields.map((field) => (
                    <Stack key={field} spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                      <TextField label={toTitleCase(field)} value={entry[field]} onChange={handleChange(entryIndex, field)} fullWidth />
                    </Stack>
                ))}
                <Button onClick={handleRemoveEntry(entryIndex)}>Remove</Button>
              </div>
          ))}
          <Button onClick={handleAddEntry}>Add Project</Button>
        </>
  );
};

export default Projects;