import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService';

function Dashboard() {
   
    let [data,setData]= useState([])

    let navigate = useNavigate()

    let getData = async ()=>{
        try {
            let response =await AxiosService.get(ApiRoutes.PERSONAL_INFO.path)
            if(response.status === 200)
            {
               setData(response.data)
            }
        } catch (error) {
            toast(error.response.messase || "Internal server error")
        }
    }

    useEffect(()=>{
        getData()
    },[])


    let handledelete = async (id)=>{
        try {
            let response = await AxiosService.delete(`${ApiRoutes.PERSONAL_INFO.path}/${id}`)
            if(response.status===200)
            {
                toast.success("Data Deleted Successfully")
                getData()
            }
        } catch (error) {
           toast(error.response.message || "inernal servr error") 
        }
    }


  return <div className='container'>
     <Table striped bordered hover className='custom-table' >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Emailaddress</th>
          <th>Website</th>
          <th>Address</th>
          <th>Companydetails</th>
          <th>Geo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       
       {
        data.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td>{e.email}</td>  
            <td>{e.website}</td>
       
          
            <td>{e.address.street}<br/>
                {e.address.suite}<br/>
                {e.address.city}<br/>
                {e.address.zipcode}
            </td>

            <td>{e.companydetails.companyname}<br/>
                {e.companydetails.phrase}<br/>
                {e.companydetails.bs}
            </td> 

            <td>
                {e.geo.lat}<br/>
                {e.geo.lang}
                </td>      
      
      <td> 
        <EditIcon onClick= {()=>navigate(`/view/${e.id}`)}/>
        <DeleteForeverIcon onClick = {()=>handledelete(e.id)} />
      </td>
        

          </tr>
        })
    }
      </tbody>
    </Table>
  </div>
}

export default Dashboard
