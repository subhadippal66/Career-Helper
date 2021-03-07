import { Button, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

function BranchPage() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      display: "flex",
      margin: "auto",
      maxWidth: 300,
      minWidth: 200,
      marginTop: 20,
      marginBottom: 50,
      marginLeft: 20,
      marginRight: 20,
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 150,
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const classes = useStyles();
  const [order, setOrder] = React.useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const [carrer, setcarrer] = React.useState("");

  const carrerChange = (event) => {
    setcarrer(event.target.value);
  };

  return (
    <div className=" bg-gray-800 pt-20 flex flex-col items-center h-screen justify-start">
      <div className=" bg-yellow-100 pb-6 rounded-xl">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            onChange={handleChange}
          >
            <MenuItem value={1}>Computer Science</MenuItem>
            <MenuItem value={2}>Civil </MenuItem>
            <MenuItem value={3}>Electrical</MenuItem>
            <MenuItem value={4}>Electronics</MenuItem>
            <MenuItem value={5}>Mechanical </MenuItem>
            <MenuItem value={6}>Metallurgy</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Expertise</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={carrer}
            onChange={carrerChange}
          >
            <MenuItem value={1}>Coding</MenuItem>
            <MenuItem value={2}>Core </MenuItem>
            <MenuItem value={3}>Analytics</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
          Continue
        </Button>
      </div>
    </div>
  );
}

export default BranchPage;
