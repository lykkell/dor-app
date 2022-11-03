import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

 
export default function EditCertificate() {
    const { t } = useTranslation();  
    const [form, setForm] = useState({
      user_id: "",
      user_name: "",
      seminar_id: "",
      seminar_name: "",
      crt_status: "",
      crt_update: "",
      crt_startdate: "",
      crt_enddate: "",
      crt_period: "",
      crt_points:"",
      platform_id: "",
      platform_name: "",
      records: [],
    });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/certificate/${params.id.toString()}`);
 
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
  //  const myDate = Date();
   const myDate = Date("<YYYY-mm-dd>");
  //  const editedUser = { ...form };
   const editedCertificate = {
    _id: form._id,
    user_id: form.user_id,
    user_name: form.user_name,
    seminar_id: form.seminar_id,
    seminar_name: form.seminar_name,
    crt_status: form.crt_status,
    crt_update: myDate,
    crt_startdate: form.crt_startdate,
    crt_enddate: form.crt_enddate,
    crt_period: form.crt_period,
    crt_points: form.crt_points,
    platform_id: form.platform_id,
    platform_name: form.platform_name,
   };
  //  console.log('editedCertificate:', params.id, editedCertificate );

   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/crtupdate/${params.id}`, {
     method: "POST",
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(editedCertificate),
   })
   .catch(error => {
    window.alert(error);
    return;
  });
   
   console.log('posted',params.id,editedCertificate);
   navigate(-1);
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Certificate</h3>
     <form onSubmit={onSubmit}>
     <div className="form-group">
         <label htmlFor="user_id">user_id</label>
         <input
           type="text"
           className="form-control"
           id="user_id"
           value={form.user_id}
           onChange={(e) => updateForm({ user_id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_name">user_name</label>
         <input
           type="text"
           className="form-control"
           id="user_name"
           value={form.user_name}
           onChange={(e) => updateForm({ user_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="seminar_id">seminar_id</label>
         <input
           type="text"
           className="form-control"
           id="seminar_id"
           value={form.seminar_id}
           onChange={(e) => updateForm({ seminar_id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="seminar_id">seminar_name</label>
         <input
           type="text"
           className="form-control"
           id="seminar_name"
           value={form.seminar_name}
           onChange={(e) => updateForm({ seminar_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_status">crt_status</label>
         <input
           type="text"
           className="form-control"
           id="crt_status"
           value={form.crt_status}
           onChange={(e) => updateForm({ crt_status: e.target.value })}
         />
       </div>
     <div className="form-group">
          <label htmlFor="myDate">CrtID</label>
          <input
            type="text"
            className="form-control"
            id="_id"
            value={form._id}
            onChange={(e) => updateForm({ _id: e.target.value })}
            />
        </div>
     
        <div className="form-group">
          <label htmlFor="crt_update">Update</label>
          <input
            type="text"
            className="form-control"
            id="crt_update"
            value={form.crt_update}
            onChange={(e) => updateForm({ crt_update: e.target.value })}
            />
        </div>
        <div className="form-group">
         <label htmlFor="seminar_name">crt_startdate</label>
         <input
           type="text"
           className="form-control"
           id="crt_startdate"
           value={form.crt_startdate}
           onChange={(e) => updateForm({ crt_startdate: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="seminar_name">crt_enddate</label>
         <input
           type="text"
           className="form-control"
           id="crt_enddate"
           value={form.crt_enddate}
           onChange={(e) => updateForm({ crt_enddate: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="seminar_name">crt_period</label>
         <input
           type="text"
           className="form-control"
           id="crt_period"
           value={form.crt_period}
           onChange={(e) => updateForm({ crt_period: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="seminar_name">crt_points</label>
         <input
           type="text"
           className="form-control"
           id="crt_points"
           value={form.crt_points}
           onChange={(e) => updateForm({ crt_points: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_status">platform_id</label>
         <input
           type="text"
           className="form-control"
           id="platform_id"
           value={form.platform_id}
           onChange={(e) => updateForm({ platform_id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user_status">platform_name</label>
         <input
           type="text"
           className="form-control"
           id="platform_name"
           value={form.platform_name}
           onChange={(e) => updateForm({ platform_name: e.target.value })}
         />
       </div>
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
