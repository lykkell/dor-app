import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CreateCertificate() {
  const myDate = Date("<YYYY-mm-dd>");
  const { t } = useTranslation();  
  const [form, setForm] = useState({
    status: "",
    date: myDate,
    user_id: "usertestid",
    user_name: "username",
    platform_id: "platformid test",
    platform_name: "platformname test",
    seminar_id: "platformid test",
    seminar_name: "platformname test",
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
        status: "",
        user_id: "",
        user_name: "",
        platform_id: "",
        platform_name: "",
        seminar_id: "",
        seminar_name: "",
    });
    navigate(-1);
}
  
  // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Certificate</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="certificate_status">certificate_status</label>
         <input
           type="text"
           className="form-control"
           id="certificate_status"
           value={form.certificate_status}
           onChange={(e) => updateForm({ certificate_status: e.target.value })}
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
