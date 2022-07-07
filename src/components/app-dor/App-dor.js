import React from "react";

 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
// import Navbar from "../navbar";
// import RecordList from "../recordList";
// import Edit from "../edit";
// import Create from "../create";
//bpr-app
import '../app-dor/App-dor.css';
import Dashboard from '../dashboard/dashboard';
import Navbar from "../nav-bar";
import News from '../news';
import AdvMt from '../adver-mt'
import UserCard from '../user-card';
import UsersList from '../users-list';
import CrtList from '../crtlist';
import Certificate from '../certificate';
import AddCertificate from '../certificate/add-certificate';
import PlfList from '../platforms-list';
import Platform from '../platform';
import Course from '../course';
import CoursesList from '../courseslist';
import CrComList from '../crcomlist';
import CrCommission from '../crcommission';
 
const App = () => {
 return (
   <div>
      <Navbar />
      <Dashboard></Dashboard>
      <News />
      <AdvMt />
     <Routes>
       {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} /> */}
       <Route exact path="/" element={<Dashboard />} />
        <Route path="usercard" element={<UserCard />} />
        <Route path="userslist" element={<UsersList />} />
        <Route path="platform" element={<Platform />} />
        <Route path="plflist" element={<PlfList />} />
        <Route path="course" element={<Course />} />
        <Route path="courseslist" element={<CoursesList />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="certificate/add" element={<AddCertificate />} />
        <Route path="crtlist" element={<CrtList />} />
        <Route path="crcommission" element={<CrCommission />} />
        <Route path="crcomlist" element={<CrComList />} />
     </Routes>
   </div>
 );
};
 
export default App;