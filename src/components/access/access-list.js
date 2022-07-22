import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
 
const Access = (props) => (
 <tr>
    <td>{props.access._id}</td>
    <td>{props.access.updated}</td>
    <td>{props.access.user_id}</td>
    <td>{props.access.group}</td>
    <td>{props.access.level}</td>
    <td>{props.access.login}</td>
    <td>{props.access.pass}</td>
   <td>
     <Link className="btn btn-link" to={`/access/${props.access._id}`}>Edit</Link>
     <button className="btn btn-link"
       onClick={() => {props.deleteAccess(props.access._id);}}>Delete</button>
   </td>
 </tr>
);

export default function AccessList() {
    const { t } = useTranslation();
    const [accesses, setAccesses] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getAccesses() {
        const response = await fetch(`http://localhost:5000/access/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const accesses = await response.json();
        setAccesses(accesses);
      }
    
      getAccesses();
    
      return;
    }, [accesses.length]);
    
    // This method will delete a record
    async function deleteAccess(id) {
      await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
      });
    
      const newAccesses = accesses.filter((el) => el._id !== id);
      setAccesses(newAccesses);
    }

    // This method will map out the records on the table
 function AccessList() {
    return accesses.map((access) => {
      return (
        <Access access={access} deleteAccess={() => deleteAccess(access._id)} key={access._id}/>
      );
    });
  }
  
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>List of accesses</h3>
      <table  style={{ marginTop: 20}}>
        <thead>
          <tr>
            <th>{t('Access ID')}</th>
            <th>{t('Updated')}</th>
            <th>{t('User ID')}</th>
            <th>{t('Group')}</th>
            <th>{t('Level')}</th>
            <th>{t('Login')}</th>
            <th>{t('Password')}</th>
          </tr>
        </thead>
        <tbody>{AccessList()}</tbody>
      </table>
      <div className="navbar navbar-dark bg-light justify-content-between">
            <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
            {/* <Link to='/usercreate' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link> */}
        </div>
    </div>
  );
 }