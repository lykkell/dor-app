import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateUser() {
    const [form, setForm] = useState({
      user_id: "",
      user_status: '',
    //   user_update: '',
    //   user_level: "",
    //   user_name: "",
    //   user_firstname: "",
    //   user_secondname: "",
    //   user_surname: "",
    //   user_specialty: "",
    //   user_login: "",
    //   user_pass: "",
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
    user_id: "",  
    user_status: '',
    // user_update: '',
    // user_level: "",
    // user_name: "",
    // user_firstname: "",
    // user_secondname: "",
    // user_surname: "",
    // user_specialty: "",
    // user_login: "",
    // user_pass: ""
    });
    navigate("/");
}
  
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New User</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="user_id">UserID</label>
         <input
           type="text"
           className="form-control"
           id="user_id"
           value={form.user_id}
           onChange={(e) => updateForm({ user_id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_status">user_status</label>
         <input
           type="text"
           className="form-control"
           id="user_status"
           value={form.user_status}
           onChange={(e) => updateForm({ user_status: e.target.value })}
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
       </div>
     </form>
   </div>
 );
}