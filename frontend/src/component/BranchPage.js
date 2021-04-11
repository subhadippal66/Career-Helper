import {
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Footer from "./Footer";
import lottie from "lottie-web";
import animation1 from "../media/animation1.json";

function BranchPage() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation1,
    });
  }, []);

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
  const [order, setOrder] = React.useState(""); //branch
  console.log(order);

  const handleChange = (event) => {
    setOrder(event.target.value);
    localStorage.setItem("branch", event.target.value);
  };

  const [carrer, setcarrer] = React.useState(""); //coding, analytics or core

  const carrerChange = (event) => {
    setcarrer(event.target.value);
    localStorage.setItem("interested_field", event.target.value);
  };
  //console.log(carrer);

  return (
    <div className=" pt-16 flex flex-col items-center h-screen justify-start">
      <div className="p-1 text-2xl tracking-widest font-thin ring-yellow-500 my-1">
        One Last Step
      </div>
      <div className="font-mono text-xl ">Choose Your Preference</div>
      <div ref={container} className=" h-48"></div>

      <div className=" bg-yellow-50 pb-6 ring-4 rounded-xl">
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Expertise
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={carrer}
            onChange={carrerChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem disabled value="">
              <div className=" text-black ">
                {localStorage.getItem("interested_field") || "none"}
              </div>
            </MenuItem>
            <MenuItem value="Coding">Coding</MenuItem>
            <MenuItem value="Core">Core </MenuItem>
            <MenuItem value="Analytics">Analytics</MenuItem>
          </Select>
          <FormHelperText>You can change this later</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Branch
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={order}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem disabled value="">
              <div className=" text-black ">
                {localStorage.getItem("branch") || "none"}
              </div>
            </MenuItem>
            <MenuItem value="Computer">Computer Science</MenuItem>
            <MenuItem value="Civil">Civil </MenuItem>
            <MenuItem value="Electrical">Electrical</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Mechanical">Mechanical </MenuItem>
            <MenuItem value="Metallurgy">Metallurgy</MenuItem>
          </Select>
          <FormHelperText>You can change this later</FormHelperText>
        </FormControl>
        <Link
          to={
            localStorage.getItem("interested_field") &&
            localStorage.getItem("branch")
              ? "/"
              : "/branch"
          }
        >
          {localStorage.getItem("interested_field") &&
          localStorage.getItem("branch") ? (
            <div className=" tracking-widest text-center mx-6 font-semibold text-black bg-yellow-400 hover:bg-yellow-600 duration-300 py-2 px-6 rounded-md cursor-pointer">
              Continue <NavigateNextIcon />
            </div>
          ) : (
            <div className="text-center text-red-800">Fill the Input first</div>
          )}
        </Link>
      </div>
      <div className="font-mono my-8">*You can also change this later</div>
      <Footer />
    </div>
  );
}

export default BranchPage;
