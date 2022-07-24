import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateAcccess() {
  const { t } = useTranslation();  
  const [form, setForm] = useState({
        updated: "",
        user_ID: "",
        group: "",
        level: "",
        user_login: "",
        user_pass: "",
    });
const navigate = useNavigate();

// These methods will update the state properties.
function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
 
   // This function will handle the submission.
 async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newUser = { ...form };
  
    await fetch("http://localhost:5000/access/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({  
        updated: "",
        user_ID: "",
        group: "",
        level: "",
        user_login: "",
        user_pass: "",
    });
    navigate(-1);
}
  
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create Access for user</h3>
     <form onSubmit={onSubmit}>
       
       {/* <div className="form-group">
         <label htmlFor="user_ID">User ID</label>
         <input
           type="text"
           className="form-control"
           id="user_ID"
           value={form.user_ID}
           onChange={(e) => updateForm({ user_ID: e.target.value })}
         />
       </div> */}
       <div className="form-group">
        <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionDev"
             value="Dev"
             checked={form.group === "Dev"}
             onChange={(e) => updateForm({ group: e.target.value })}
           />
           <label htmlFor="positionDev" className="form-check-label">Development</label>
         </div>
       </div>
       
       <div className="form-group">  
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionAdmin"
             value="Admin"
             checked={form.group === "Admin"}
             onChange={(e) => updateForm({ group: e.target.value })}
           />
           <label htmlFor="positionAdmin" className="form-check-label">Admin</label>
         </div>
        </div>
        <div className="form-group"> 
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionUser"
             value="User"
             checked={form.group === "User"}
             onChange={(e) => updateForm({ group: e.target.value })}
           />
           <label htmlFor="positionUser" className="form-check-label">User</label>
         </div>
        </div>
        <div className="form-group">
            <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="positionOptions"
                id="positionDev"
                value="UserStart"
                checked={form.level === "UserStart"}
                onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionDev" className="form-check-label">UserStart</label>
            </div>
        </div>
       <div className="form-group">
         <label htmlFor="user_update">Last active date</label>
         <input
           type="text"
           className="form-control"
           id="user_update"
           value={form.user_update}
           onChange={(e) => updateForm({ user_update: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_level">User access level</label>
         <input
           type="text"
           className="form-control"
           id="user_level"
           value={form.user_level}
           onChange={(e) => updateForm({ user_level: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_name">User name</label>
         <input
           type="text"
           className="form-control"
           id="user_name"
           value={form.user_name}
           onChange={(e) => updateForm({ user_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_firstname">User firstname</label>
         <input
           type="text"
           className="form-control"
           id="user_firstname"
           value={form.user_firstname}
           onChange={(e) => updateForm({ user_firstname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_second">User secondname</label>
         <input
           type="text"
           className="form-control"
           id="user_secondname"
           value={form.user_secondname}
           onChange={(e) => updateForm({ user_secondname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_surname">User surname</label>
         <input
           type="text"
           className="form-control"
           id="user_surname"
           value={form.user_surname}
           onChange={(e) => updateForm({ user_surname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_specialty">User specialty</label>
         <input
           type="text"
           className="form-control"
           id="user_specialty"
           value={form.user_specialty}
           onChange={(e) => updateForm({ user_specialty: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_login">Login</label>
         <input
           type="text"
           className="form-control"
           id="user_login"
           value={form.user_login}
           onChange={(e) => updateForm({ user_login: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_pass">User pass</label>
         <input
           type="text"
           className="form-control"
           id="user_pass"
           value={form.user_pass}
           onChange={(e) => updateForm({ user_pass: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Access"
           className="btn btn-primary"
         />
          <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
       </div>
     </form>
   </div>
 );
}