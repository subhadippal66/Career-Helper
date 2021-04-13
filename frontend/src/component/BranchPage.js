import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import lottie from "lottie-web";
import animation1 from "../media/animation1.json";
import axios from "axios";
import Loading from "./utils/Loading";

function BranchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();

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
  const headers = {
    authtoken: localStorage.getItem("authToken"),
    email: localStorage.getItem("userEmail"),
  };
  const url = "https://target-backend-66.herokuapp.com/user";

  const [order, setOrder] = React.useState(""); //branch
  const [carrer, setcarrer] = React.useState(""); //coding, analytics or core
  const [loading, setloading] = React.useState(false);

  const [branch_databse, setbranch_database] = React.useState(null);
  const [experties_databse, setexperties_database] = React.useState(null);

  useEffect(() => {
    async function fetchData() {
      if (headers.authtoken) {
        const request = await axios.get(url, { headers: headers });
        console.log(request);
        if (request.data !== "") {
          localStorage.setItem("newUser", "no");
          setexperties_database(request.data.experties);
          setbranch_database(request.data.branch);
          setOrder(request.data.branch);
          localStorage.setItem("branch", request.data.branch);
          setcarrer(request.data.experties);
          localStorage.setItem("interested_field", request.data.experties);
        }
      }
      setloading(true);
    }
    fetchData();
  }, []);

  const classes = useStyles();

  const handleChange = (event) => {
    setOrder(event.target.value);
    localStorage.setItem("branch", event.target.value);
  };

  const carrerChange = (event) => {
    setcarrer(event.target.value);
    localStorage.setItem("interested_field", event.target.value);
  };
  //console.log(carrer);

  const handlepostreq = () => {
    if (localStorage.getItem("newUser") !== "no") {
      let bodyFormData = {
        email: localStorage.getItem("userEmail"),
        branch: localStorage.getItem("branch"),
        experties: localStorage.getItem("interested_field"),
      };

      axios
        .post(url, bodyFormData, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            authtoken: localStorage.getItem("authToken"),
          },
        })
        .then((res) => {
          //console.log(res);
        })
        .catch((e) => console.log(e));
    }
    if (localStorage.getItem("newUser") === "no") {
      let bodyFormData = {
        branch: localStorage.getItem("branch"),
        experties: localStorage.getItem("interested_field"),
      };
      axios
        .put(url, bodyFormData, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            authtoken: localStorage.getItem("authToken"),
            email: localStorage.getItem("userEmail"),
          },
        })
        .then((res) => {
          //console.log(res);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <div className=" pt-16 flex flex-col items-center h-screen justify-start">
        <div className="p-1 text-2xl tracking-widest font-thin ring-yellow-500 my-1">
          One Last Step
        </div>
        <div className="font-mono text-xl ">Choose Your Preference</div>
        <div ref={container} className=" h-48"></div>
        {loading ? (
          <div className=" bg-yellow-50 pb-6 ring-4 rounded-xl">
            <FormControl className={classes.formControl}>
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Expertise
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={carrer}
                onChange={carrerChange}
                displayEmpty={true}
                renderValue={() =>
                  localStorage.getItem("interested_field") || "select"
                }
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
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Branch
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={order}
                onChange={handleChange}
                displayEmpty={true}
                renderValue={() => localStorage.getItem("branch") || "select"}
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
                <div
                  onClick={handlepostreq}
                  className=" tracking-widest text-center mx-6 font-semibold text-black bg-yellow-400 hover:bg-yellow-600 duration-300 py-2 px-6 rounded-md cursor-pointer"
                >
                  Continue <NavigateNextIcon />
                </div>
              ) : (
                <div className="text-center text-red-800">
                  Fill the Input first
                </div>
              )}
            </Link>
          </div>
        ) : (
          <Loading />
          // <div className=" fixed p-10 mt-72 z-50 shadow-lg bg-purple-200 rounded-2xl flex flex-col space-y-2 justify-start items-center">
          //   <CircularProgress color="secondary" />
          //   <div className="font-extrabold text-2xl">loading</div>
          //   <div className="text-sm text-center p-4">
          //     Data is loading from our database, please wait ......
          //   </div>
          // </div>
        )}

        <div className="font-mono my-8">*You can also change this later</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default BranchPage;
