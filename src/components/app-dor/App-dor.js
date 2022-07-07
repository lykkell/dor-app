import React from "react";

 

 
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
import AdvMt from '../adver-mt';

 
const App = () => {
 return (
   <div>
      <Navbar />
      <Dashboard></Dashboard>
      <News />
      <AdvMt />
   </div>
 );
};
 
export default App;