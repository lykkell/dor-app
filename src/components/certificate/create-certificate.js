import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateCertificate() {
  // const myDate = Date("<YYYY-mm-dd>");
  const myDate = Date();
  const { t } = useTranslation();  
  const [form, setForm] = useState({
    user_id: "",
    user_name: "username",
    seminar_id: "seminar_id",
    seminar_name: "seminar_name",
    crt_status: "active",
    crt_update: myDate,
    crt_startdate: "",
    crt_enddate: "",
    crt_period: "",
    crt_points:"",
    platform_id: "platform_id",
    platform_name: "platform_name",
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
  
    // When a post request is sent to the create url, we'll add a new certificate to the database.
    const newCertificate = { ...form };
  
    await fetch("http://localhost:5000/certificate/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCertificate),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({  
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
       
    });
    navigate(-1);
}
  
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Certificate</h3>
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
         <label htmlFor="seminar_name">seminar_name</label>
         <input
           type="text"
           className="form-control"
           id="seminar_name"
           value={form.seminar_name}
           onChange={(e) => updateForm({ seminar_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="crt_status">crt_status</label>
         <input
           type="text"
           className="form-control"
           id="crt_status"
           value={form.crt_status}
           onChange={(e) => updateForm({ crt_status: e.target.value })}
         />
       </div>
       {/* <div className="form-group">
          <label htmlFor="crt_update">Update</label>
          <input
            type="text"
            className="form-control"
            id="crt_update"
            value={form.crt_update}
            onChange={(e) => updateForm({ crt_update: e.target.value })}
            />
        </div> */}
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
         <label htmlFor="platform_id">platform_id</label>
         <input
           type="text"
           className="form-control"
           id="platform_id"
           value={form.platform_id}
           onChange={(e) => updateForm({ platform_id: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="platform_name">platform_name</label>
         <input
           type="text"
           className="form-control"
           id="platform_name"
           value={form.platform_name}
           onChange={(e) => updateForm({ platform_name: e.target.value })}
         />
       </div>
      
      
       <div className="form-group">
         <input
           type="submit"
           value="Create new certificate"
           className="btn btn-primary"
         />
          <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
       </div>
     </form>
   </div>
 );
}
