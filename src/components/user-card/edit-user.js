import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

 
export default function Edit() {
    const { t } = useTranslation();  
 const [form, setForm] = useState({
    user_status: "",
    user_update: "",
    access_group: "",
    access_level: "",
    user_name: "",
    user_firstname: "",
    user_secondname: "",
    user_surname: "",
    user_specialty: "",
    user_login: "",
    user_pass: "",
    records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate(-1);
       return;
     }
     setForm(record);
   }
   fetchData();
   return;
 },
  [params.id, navigate]);
 
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const myDate= Date();

  //  const editedUser = { ...form };

   const editedUser = {
    user_status: form.user_status,
    user_update: myDate,
    access_group: form.access_group,
    access_level: form.access_level,
    user_name: form.user_name,
    user_firstname: form.user_firstname,
    user_secondname: form.user_secondname,
    user_surname: form.user_surname,
    user_specialty: form.user_specialty,
    user_login: form.user_login,
    user_pass: form.user_pass,
   };
  //  console.log('editedUser:', params.id, editedUser );

   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(editedUser),
   })
   .catch(error => {
    window.alert(error);
    return;
  });
   
   console.log('posted',params.id,editedUser );
   navigate(-1);
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="user_status">user_status: </label>
         <input
           type="text"
           className="form-control"
           id="user_status"
           value={form.user_status}
           onChange={(e) => updateForm({ user_status: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_update">user_update: </label>
         <input
           type="text"
           className="form-control"
           id="user_update"
           value={form.user_update}
           onChange={(e) => updateForm({ user_update: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="access_group">access_group: </label>
         <input
           type="text"
           className="form-control"
           id="access_group"
           value={form.access_group}
           onChange={(e) => updateForm({ access_group: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="access_level">access_level: </label>
         <input
           type="text"
           className="form-control"
           id="access_level"
           value={form.access_level}
           onChange={(e) => updateForm({ access_level: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_name">user_name: </label>
         <input
           type="text"
           className="form-control"
           id="user_name"
           value={form.user_name}
           onChange={(e) => updateForm({ user_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_firstname">user_firstname: </label>
         <input
           type="text"
           className="form-control"
           id="user_firstname"
           value={form.user_firstname}
           onChange={(e) => updateForm({ user_firstname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_secondname">user_secondname: </label>
         <input
           type="text"
           className="form-control"
           id="user_secondname"
           value={form.user_secondname}
           onChange={(e) => updateForm({ user_secondname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_surname">user_surname: </label>
         <input
           type="text"
           className="form-control"
           id="user_surname"
           value={form.user_surname}
           onChange={(e) => updateForm({ user_surname: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_specialty">user_specialty: </label>
         <input
           type="text"
           className="form-control"
           id="user_specialty"
           value={form.user_specialty}
           onChange={(e) => updateForm({ user_specialty: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_login">user_login: </label>
         <input
           type="text"
           className="form-control"
           id="user_login"
           value={form.user_login}
           onChange={(e) => updateForm({ user_login: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_pass">user_pass: </label>
         <input
           type="text"
           className="form-control"
           id="user_pass"
           value={form.user_pass}
           onChange={(e) => updateForm({ user_pass: e.target.value })}
         />
       </div>
       {/* <div className="form-group"> */}
         {/* <div className="form-check form-check-inline">
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
         </div> */}
         {/* <div className="form-check form-check-inline">
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
         </div> */}
         {/* <div className="form-check form-check-inline">
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
        </div> */}
       {/* </div> */}
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
         <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
       </div>
     </form>
   </div>
 );
}
