import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  chip: { margin: '5px 5px 5px 0' },

  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },

  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  container: {
    padding: '25px',
    height: '85vh',
    overflowY: 'auto',   // <-- makes the left panel scroll
  },

  formControl: {
    margin: '10px',
    minWidth: 120,
    marginBottom: '30px',
  },

  list: {
    height: '75vh',
    overflow: 'auto',
  },
}));
