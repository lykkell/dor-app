import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

 
export default function AccessEdit() {
    const { t } = useTranslation();  
 const [form, setForm] = useState({
    access_group: "",
    access_level: "",
    user_name: "",
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
//    const myDate= Date();

  //  const editedUser = { ...form };

   const editedAccess = {
    user_status: form.user_status,
    // user_update: myDate,
    access_group: form.access_group,
    access_level: form.access_level,
    user_name: form.user_name,
    user_login: form.user_login,
    user_pass: form.user_pass,
   };
  //  console.log('editedUser:', params.id, editedUser );

   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/accessupdate/${params.id}`, {
     method: "POST",
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(editedAccess),
   })
   .catch(error => {
    window.alert(error);
    return;
  });
   
   console.log('posted',params.id,editedAccess );
   navigate(-1);
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
        <form onSubmit={onSubmit}>Access data:
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
        </form>
        <br 
       />
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="positionstart" className="form-check-label">Access group:
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionuser"
                    value="user"
                    checked={form.access_group === "user"}
                    onChange={(e) => updateForm({access_group: e.target.value })}
                />
                <label htmlFor="positionuser" className="form-check-label">user</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionadmin"
                    value="admin"
                    checked={form.access_group === "admin"}
                    onChange={(e) => updateForm({access_group: e.target.value })}
                />
                <label htmlFor="positioadmin" className="form-check-label">admin</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positiondevelopment"
                    value="development"
                    checked={form.access_group === "development"}
                    onChange={(e) => updateForm({access_group: e.target.value })}
                />
                <label htmlFor="positiondevelopment" className="form-check-label">development</label>
            </div>
            </label>
        </div>
        </form>
       <br 
       />
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="positionstart" className="form-check-label">Access level:
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionstart"
                    value="start"
                    checked={form.access_level === "start"}
                    onChange={(e) => updateForm({access_level: e.target.value })}
                />
                <label htmlFor="positionstart" className="form-check-label">start</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionstandart"
                    value="standart"
                    checked={form.access_level === "standart"}
                    onChange={(e) => updateForm({access_level: e.target.value })}
                />
                <label htmlFor="positionstandart" className="form-check-label">standart</label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="positionOptions"
                    id="positionadvanced"
                    value="advanced"
                    checked={form.access_level === "advanced"}
                    onChange={(e) => updateForm({access_level: e.target.value })}
                />
                <label htmlFor="positionadvanced" className="form-check-label">advanced</label>
            </div>
            </label>
        </div>
        </form>
        <br 
       />
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <input
            type="submit"
            value="Update"
            className="btn btn-primary"
            />
        </div>
        <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
        </form>
   </div>
 );
}
