// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import App from '../app-dor';

import UserCard from '../user-card/user-card';
import CreateUser from '../user-card/create-user';
import Edit from '../user-card/edit-user';
import UsersList from '../users-list';
import Access from '../access/access-list';
import AccessEdit from '../access/access-edit';
import CrtList from '../crtlist';
import Certificate from '../certificate';
import CreateCertificate from '../certificate/create-certificate';
import PlfList from '../platforms-list';
import Platform from '../platform';
import Course from '../course';
import CoursesList from '../courseslist';
import CrComList from '../crcomlist';
import CrCommission from '../crcommission';


const Rots = () => {
    return (
      <div>
        <Routes>
          {/* <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} /> */}
          <Route exact path="/" element={<App />} />
           <Route path="usercard" element={<UserCard />} />
           <Route path="usercreate" element={<CreateUser />} />
           <Route path="useredit/:id" element={<Edit />} />
           <Route path="userslist" element={<UsersList />} />
           <Route path="access" element={<Access />} />
           <Route path="accessedit/:id" element={<AccessEdit />} />
           <Route path="platform" element={<Platform />} />
           <Route path="plflist" element={<PlfList />} />
           <Route path="course" element={<Course />} />
           <Route path="courseslist" element={<CoursesList />} />
           <Route path="certificate" element={<Certificate />} />
           <Route path="crtcreate" element={<CreateCertificate />} />
           <Route path="crtlist" element={<CrtList />} />
           <Route path="crcommission" element={<CrCommission />} />
           <Route path="crcomlist" element={<CrComList />} />
        </Routes>
      </div>
    );
   };
    
   export default Rots;