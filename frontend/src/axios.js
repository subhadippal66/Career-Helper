import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.headers.get["Accept"] = "application.json";
