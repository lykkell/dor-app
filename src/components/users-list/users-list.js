import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
 

const User = (props) => (
  
 <tr>
    {/* <td>{props.record._id}</td> */}
    <td>{props.record.user_status}</td>
    {/* <td>{props.record.user_update}</td> */}
    <td>{props.record.access_group}</td>
    <td>{props.record.access_level}</td>
    <td>{props.record.user_login}</td>
    {/* <td>{props.record.user_pass}</td> */}
    <td>{props.record.user_name}</td>
    {/* <td>{props.record.user_firstname}</td>
    <td>{props.record.user_secondname}</td>
    <td>{props.record.user_surname}</td> */}
    <td>{props.record.user_specialty}</td>
    
   <td>
     <Link className="btn btn-link" to={`/useredit/${props.record._id}`}>Edit</Link>
     <Link className="btn btn-link" to={`/accessedit/${props.record._id}`}>Access</Link>
     <button className="btn btn-link"
       onClick={() => {props.deleteRecord(props.record._id);}}>Delete</button>
   </td>
 </tr>
);


export default function RecordList() {
    const { t } = useTranslation();
    // const [massege, setMassege] = useState();
    const [query, setFilter] = useState("");
    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:5000/record/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        setRecords(records);

        //This method will you filter records includes text/nubers of query
        if (query !== "") {
          const newRecords = records.filter((el) => el.user_name.toLowerCase().includes(query.toLowerCase()) || el.user_status.toLowerCase().includes(query.toLowerCase()) || el.user_login.toLowerCase().includes(query.toLowerCase()) || el.user_specialty.toLowerCase().includes(query.toLowerCase()));
          
          setRecords(newRecords);
          setFilter(query);
          //  console.log(massege);
          // //This messaage of filter if the records is not finded
          // if (query === true) { 
          //   setMassege(`Records is not finded`);
          //   console.log(massege);
          //   }
          //   setMassege("");
          return;
          
      }
    }
      getRecords();
    
    }, [records.length,query] );
    
    // This method will delete a record
    async function deleteRecord(id) {
      await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
      });
    
      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    }

    // This method will map out the records on the table
 function UsersList() {
    return records.map((record) => {
     
      return (
        <User record={record}  deleteRecord={() => deleteRecord(record._id)} key={record._id}/>
      );
    });
  }
  
  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>List of users</h3>
      <div className="d-flex flex-row">
      <input type="text" id="query"
       value={query}
       placeholder="filter: type value"
       onChange={e => setFilter(e.target.value)}
      ></input>
      </div>
      {/* <div>{massege}</div> */}
      <button onClick={e => setFilter("")}>Clean</button>
      <table  style={{ marginTop: 20}}>
        <thead>
          <tr>
            {/* <th>{t('User ID')}</th> */}
            <th>{t('Status')}</th>
            {/* <th>{t('Date active')}</th> */}
            <th>{t('Group')}</th>
            <th>{t('Level')}</th>
            <th>{t('Login')}</th>
            {/* <th>{t('Password')}</th> */}
            <th>{t('UserName')}</th>
            {/* <th>{t('FirstName')}</th>
            <th>{t('SecondName')}</th>
            <th>{t('SurName')}</th> */}
            <th>{t('UserSpecialty')}</th>
          </tr>
        </thead>
        <tbody>{UsersList()}</tbody>
      </table>
      <div className="navbar navbar-dark bg-light justify-content-between">
            <Link to='/' className="btn btn-primary">{t('Dashboard')}</Link>
            {/* <Link to='/access' className="btn btn-primary">{t('Access')}</Link> */}
            <Link to='/usercreate' type='button' className="btn btn-success btn-lg">{t('Add new')}</Link>
        </div>
    </div>
  );
 }