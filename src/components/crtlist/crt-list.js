import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
 

const Certificate = (props) => (
  
 <tr>
    {/* <td>{props.certificate._id}</td> */}
    <td>{props.certificate.user_id}</td>
    <td>{props.certificate.user_name}</td>
    <td>{props.certificate.crt_status}</td>
    {/* <td>{props.certificate.crt_update}</td> */}
    {/* <td>{props.certificate.seminar_id}</td> */}
    <td>{props.certificate.seminar_name}</td>
    <td>{props.certificate.crt_startdate}</td>
    <td>{props.certificate.crt_enddate}</td>
    <td>{props.certificate.crt_period}</td>
    <td>{props.certificate.crt_points}</td>
    {/* <td>{props.certificate.platform_id}</td> */}
    <td>{props.certificate.platform_name}</td>
   <td>
     <Link className="btn btn-link" to={`/crtedit/${props.certificate._id}`}>_Edit</Link>
     <Link className="btn btn-link" to={`/crtuserlist/${props.certificate.user_id}`}>_User</Link>
     <button className="btn btn-link"
       onClick={() => {props.deleteCertificate(props.certificate._id);}}>Delete</button>
   </td>
 </tr>
);

export default function CertificateList() {
  const { t } = useTranslation();
  //This is state of list of certificate
  const [certificates, setCertificates] = useState([]);
   //This is state of certificate filter by user_id
   const [user, setUser] = useState("");
    //This is state of certificate filter by crt_status
    const [status, setStatus] = useState("active");
  //This is state of certificate filter by user query text/numbers
  const [query, setFilter] = useState("");
  
  // This method fetches the records from the database.
  useEffect(() => {
    async function getCertificates() {
      const response = await fetch(`http://localhost:5000/certificate/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const certificates = await response.json();
      setCertificates(certificates)
      

      console.log(certificates);
      console.log("user:",user,"query:",query, "status:",status,certificates);
      
      
      //This method will you filter records by user_id & by user query
      if (query === "" & user !== "") {
        const newCertificates = certificates
        .filter((crtlist) => crtlist.crt_status.toLowerCase() === (status.toLowerCase()))
        .filter((crtlist) => crtlist.seminar_name.toLowerCase().includes(query.toLowerCase()) || crtlist.user_name.toLowerCase().includes(query.toLowerCase()) || crtlist.crt_points.toLowerCase().includes(query.toLowerCase()) || crtlist.platform_name.toLowerCase().includes(query.toLowerCase()) ||crtlist.crt_status.toLowerCase().includes(query.toLowerCase()))
        .sort((a,b) => b.crt_points.toLowerCase()-a.crt_points.toLowerCase())
        .sort((a,b) => b.crt_status.toLowerCase()-a.crt_status.toLowerCase())
        .filter((crtlist) => crtlist.user_id.toLowerCase() === (user.toLowerCase()));
        setCertificates(newCertificates);
        // setUser(user);
        return;
      }
      else if (query !== "") {
        const newCertificates = certificates
        .sort((a,b) => b.crt_points.toLowerCase()-a.crt_points.toLowerCase())
        .sort((a,b) => b.crt_status.toLowerCase()-a.crt_status.toLowerCase())
        .filter((crtlist) => crtlist.seminar_name.toLowerCase().includes(query.toLowerCase()) || crtlist.user_name.toLowerCase().includes(query.toLowerCase()) || crtlist.crt_points.toLowerCase().includes(query.toLowerCase()) || crtlist.platform_name.toLowerCase().includes(query.toLowerCase()) ||crtlist.crt_status.toLowerCase().includes(query.toLowerCase()))
        setCertificates(newCertificates);
        return;
      }
      
      console.log("user:",user,"query:",query, certificates);
  }
    getCertificates();
  
    return;
  }, [certificates.length, query, user, status] );
  
  // This method will delete a record
    async function deleteCertificate(id) {
    await fetch(`http://localhost:5000/certificate/${id}`, {
      method: "DELETE"
    });
  
    const newCertificates = certificates.filter((el) => el._id !== id);
    setCertificates(newCertificates);
  }
  // This method will map out the records on the table
    function CertificateList() {
    return certificates.map((certificate) => {
   
    return (
      <Certificate certificate={certificate}  deleteCertificate={() => deleteCertificate(certificate._id)} key={certificate._id}/>
    );
  });
}
  
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <div className="d-flex row">
      <input type="text" id="user"
       value={user}
       placeholder="user_id filter: type value"
       onChange={e => setUser(e.target.value)}
      ></input>
      <h3>List of certificates</h3>
      </div>
      <input type="text" id="query"
       value={query}
       placeholder="user filter: type value"
       onChange={e => setFilter(e.target.value)}
      ></input>
      <button onClick={e => setFilter("")}>Clean filter</button>
      <button onClick={e => setStatus("active")}>Show active</button>
      <button onClick={e => setStatus("deleted")}>Show deleted</button>
      <table  style={{ marginTop: 20}}>
        <thead>
          <tr>
            {/* <th>{t('Certificate ID')}</th> */}
            <th>{t('User_id')}</th>
            <th>{t('User_name')}</th>
            <th>{t('CrtStatus')}</th>
            {/* <th>{t('Update')}</th> */}
            {/* <th>{t('Seminar_id')}</th> */}
            <th>{t('Seminar_name')}</th>
            <th>{t('StartDate')}</th>
            <th>{t('EndDate')}</th>
            <th>{t('Period')}</th>
            <th>{t('Points')}</th>
            {/* <th>{t('Platform_id')}</th> */}
            <th>{t('Platform_name')}</th>
          </tr>
        </thead>
        <tbody>{CertificateList()}</tbody>
      </table>
      <div className="navbar navbar-dark bg-light justify-content-between">
            <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
            {/* <Link to='/access' className="btn btn-primary">{t('Access')}</Link> */}
            <Link to='/crtcreate' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
        </div>
    </div>
  );
 }
