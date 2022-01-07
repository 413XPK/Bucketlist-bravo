import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  typography:{

  },
  top:{
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  search:{
    display: 'inline-flex',
    border: '1px solid lightgrey',
    borderRadius: '3px',
    padding: '0.5em 0.5em 0.5em'
  },
  searchIcon:{
    paddingRight: '0.5em'
  },
  Box: {
    display: 'flex',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '120px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));