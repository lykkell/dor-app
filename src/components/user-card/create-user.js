import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateUser() {
  const myDate = Date("<YYYY-mm-dd>");
  const { t } = useTranslation();  
  const [form, setForm] = useState({
    user_status: "",
    user_update: myDate,
    access: {
      group: "",
      level: "",
      },
    user_name: "",
    user_firstname: "",
    user_secondname: "",
    user_surname: "",
    user_specialty: "",
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
  
    await fetch("http://localhost:5000/record/add", {
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
      user_status: "",
      // user_update: myDate,
      access: {
        group: "user",
        level: "userstart",
        },
      user_name: "",
      user_firstname: "",
      user_secondname: "",
      user_surname: "",
      user_specialty: "",
      user_login: "",
      user_pass: "",
    });
    navigate(-1);
}
  
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New User</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="user_status">User_status</label>
         <input
           type="text"
           className="form-control"
           id="user_status"
           value={form.user_status}
           onChange={(e) => updateForm({ user_status: e.target.value })}
         />
       </div>
       {/* <div className="form-group">
         <label htmlFor="user_update">Last active date</label>
         <input
           type="text"
           className="form-control"
           id="user_update"
           value={form.user_update}
           onChange={(e) => updateForm({ user_update: e.target.value })}
         />
       </div> */}
       {/* <div className="form-group">
         <label htmlFor="user_level">User access level</label>
         <input
           type="text"
           className="form-control"
           id="user_level"
           value={form.user_level}
           onChange={(e) => updateForm({ user_level: e.target.value })}
         />
       </div> */}
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
       {/* <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div> */}
       <div className="form-group">
         <input
           type="submit"
           value="Create new user"
           className="btn btn-primary"
         />
          <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
       </div>
     </form>
   </div>
 );
}