import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
        color: 'red'
      },
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={50}
              defaultValue="Default Value"
          />
          <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={50}
              defaultValue="Default Value"
          />
          <TextField
              label="Dense"
              id="margin-dense"
              defaultValue="Default Value"
              className={classes.textField}
              helperText="Some important text"
              margin="dense"
          />
          <TextField
              label="Dense"
              id="margin-dense"
              defaultValue="Default Value"
              className={classes.textField}
              helperText="Some important text"
              margin="dense"
          />
        </div>
      </form>
      <TextField id="standard-basic" label="Expected" />
      <TextField id="standard-basic" label="Actual" multiline/>
      <Button variant={"contained"} color={"primary"}>
        Hello Button
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
