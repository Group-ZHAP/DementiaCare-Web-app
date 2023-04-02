import "./App.css";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import About from "./pages/About";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import ChangePassword from "./Auth/ChangePassword";
import Dementiatalk from "./pages/Dementiatalk";
import ProtectedRoute from "./Auth/Protected";
import Docter from "./components/Docter";
import  Quiz  from "./components/Quiz"
import Caregiver from "./Caregiver";
import ContactForm from "./pages/ContactUs";
import MainPage from "./components/MainPage/MainPage";
import Appointment from "./components/Appointment/Appointment";
import DoctorsZone from "./components/DoctorsZone/DoctorsZone";
import { Dashboard } from "@material-ui/icons";
import Settings from "./components/Settings/Settings";
import App1 from "./App1"


// import React,{useState,useEffect} from "react";
// import { Box, Button, CircularProgress, Grid, ThemeProvider} from "@material-ui/core";
// import theme from "./theme/theme";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import JobCart from "./components/Job/JobCart";
// import NewJobMod from "./components/Job/NewJobMod";
// import {firestore,app} from './firebase/config'
// import {Close as CloseIcon} from '@material-ui/icons'
// import ViewJobModal from "./components/Job/ViewJobModal";



function App() {


//   const [jobs, setJobs]= useState([]);
// const [loading,setLoading] = useState(true);
// const [customSearch,setCustomSearch] = useState(false);
// const [newJobModal,setNewJobModal] = useState(false);
// const [viewJob,setViewJob] = useState({});


// const fetchJobs = async() =>{
//   setCustomSearch(false);
//   setLoading(true);
//   const req = await firestore.collection('jobs').orderBy('postedOn','desc').get();
//  const tempJobs = req.docs.map((job) => ({...job.data(), id:job.id,postedOn:job.data().postedOn.toDate(),}));
//  setJobs(tempJobs);
//  setLoading(false);
// };
// const fetchJobsCustom = async jobSearch =>{
//   setLoading(true);
//   setCustomSearch(true);
//   const req = await firestore.collection('jobs').orderBy('postedOn','desc')
//   .where("location","==",jobSearch.location)
//   .where("type","==",jobSearch.type)
//   .get();
//  const tempJobs = req.docs.map((job) => ({...job.data(), id:job.id,postedOn:job.data().postedOn.toDate(),}));
//  setJobs(tempJobs);
//  setLoading(false);

// }

// const postJob = async jobDetails =>{
//   await firestore.collection('jobs').add({
//     ...jobDetails,
//     postedOn: app.firestore.FieldValue.serverTimestamp()
//   });
//   fetchJobs();
// }

// useEffect(()=>{
//   fetchJobs();
// },[]);



  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Dementiatalk" element={<ProtectedRoute />}>
          {" "}
          <Route exact path="/Dementiatalk" element={<Dementiatalk />} />
        </Route>

        <Route exact path="/Register" element={<Registration />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/recommended" element={<Docter />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route
          exact
          path="/ChangePassword"
          element={<ChangePassword />}
        ></Route>
          <Route
          exact
          path="/Caregiver"
          element={<Caregiver />}
        ></Route>
    

          <Route exact path="/main-page" element={<MainPage />} />
          <Route exact path="/Appointment" element={<Appointment />} />
          <Route exact path="/doctorsZone" element={<DoctorsZone />} />
          <Route exact path="/dashboard" element={<App1 />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/contactUs" element={<ContactForm/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
   
  </div>
  );
}

export default App;
