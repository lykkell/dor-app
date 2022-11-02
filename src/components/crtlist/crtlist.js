import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
 

const Certificate = (props) => (
  
 <tr>
    <td>{props.certificate._id}</td>
    <td>{props.certificate.crt_status}</td>
    <td>{props.certificate.crt_update}</td>
    <td>{props.certificate.user_id}</td>
    <td>{props.certificate.user_name}</td>
    <td>{props.certificate.platform_id}</td>
    <td>{props.certificate.platform_name}</td>
    <td>{props.certificate.seminar_id}</td>
    <td>{props.certificate.seminar_name}</td>
    
   <td>
     <Link className="btn btn-link" to={`/crtedit/${props.certificate._id}`}>Edit</Link>
     <button className="btn btn-link"
       onClick={() => {props.deleteCertificate(props.certificate._id);}}>Delete</button>
   </td>
 </tr>
);


export default function CertificateList() {
  const { t } = useTranslation();
  const [certificates, setCertificates] = useState([]);
  
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
      setCertificates(certificates);
    }
  
    getCertificates();
  
    return;
  }, [certificates.length] );
  
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
      <h3>List of certificates</h3>
      <table  style={{ marginTop: 20}}>
        <thead>
          <tr>
            <th>{t('Certificate ID')}</th>
            <th>{t('CrtStatus')}</th>
            <th>{t('Update')}</th>
            <th>{t('User_id')}</th>
            <th>{t('User_name')}</th>
            <th>{t('Platform_id')}</th>
            <th>{t('Platform_name')}</th>
            <th>{t('Seminar_id')}</th>
            <th>{t('Seminar_name')}</th>
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
