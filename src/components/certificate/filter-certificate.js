import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

 
export default function FilterCertificate() {
    const { t } = useTranslation();  
    const [form, setForm] = useState({
      user_name: "",
    });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
  async function getCertificates() {
    const response = await fetch(`http://localhost:5000/certificate/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const certificates = await response.json();
    setForm(certificates);
  }

  getCertificates();

  return;
}, [certificates.length] );
  
 
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
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
         <label htmlFor="user_name">user_name</label>
         <input
           type="text"
           className="form-control"
           id="user_name"
           value={form.user_name}
           onChange={(e) => updateForm({ user_name: e.target.value })}
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Filter Recors"
           className="btn btn-primary"
         />
         <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
       </div>
     </form>
   </div>
 );
}
