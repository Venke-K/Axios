import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate, useParams} from 'react-router-dom';



function View() {

    let[name,setName] = useState("")
    let[username,setUsername] = useState("")
    let[email,setEmail] = useState("")
    let[street,setStreet] = useState()
    let[suite,setSuite] = useState("")
    let[city,setCity] = useState("")
    let[zipcode,setZipcode] = useState("")
    let[website,setWebsite] = useState("")
    let[companyname,setCompanyname] = useState("")
    let[phrase,setPhrase] = useState("")
    let[bs,setBs] = useState("")
    let[lat,setLat] = useState("")
    let[lang,setLang] = useState("")

  
    let {id} = useParams() 
    let navigate = useNavigate()

    let getData = async (id)=>{
     try {
        let response = await AxiosService.get(`${ApiRoutes.PERSONAL_INFO.path}/${id}`)
        if(response.status===200)
        {
            setName(response.data.name)
            setUsername(response.data.username)
            setEmail(response.data.email)
            setStreet(response.data.address.street)
            setSuite(response.data.address.suite)
            setCity(response.data.address.city)
            setZipcode(response.data.address.zipcode)
            setWebsite(response.data.website)
            setCompanyname(response.data.companydetails.companyname)
            setPhrase(response.data.companydetails.phrase)
            setBs(response.data.companydetails.bs)
            setLat(response.data.geo.lat)
            setLang(response.data.geo.lang)
            

        }
     } catch (error) {
        toast.error(error.response.message || "Internal server Error ") 
     }
    }

    useEffect(()=>{
  
        getData(id)

    },[])



 
////  Using Fecth ///

    // fetch("https://669e9d609a1bda36800723d8.mockapi.io/personalinfo",{
    //     method:"POST",
    //     headers: {
    //         "Content-Type":"application/json"
    //     },
    //     body : JSON.stringify({name, username, email,Phone,website,
    //         address:{
    //             street,
    //             city,
    //             suite,
    //             zipcode,
    //         },
            
    //         companydetails:{
    //             companyname,
    //             phrase,
    //             bs
    //         }
    //        }) 
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(error=>console.error(error))


    //Using Axios ///

    let handlesubmit = async () =>{

    try {
    let response = await AxiosService.put (`${ApiRoutes.PERSONAL_INFO.path}/${id}`,{
        
        name, username, email,website,
        address:{
                        street,
                        city,
                        suite,
                        zipcode
                    },
                    companydetails:{
                                    companyname,
                                    phrase,
                                    bs,
                                },
                                
                                geo:{
                                    lat,
                                    lang
                                },
                            })
                                if(response.status===200)
                                {
                                   toast.success("Data Modified Successfully!!")
                                   navigate('/dashboard')
                                }
} catch (error) {
    toast.error(error.response.message || "Internal server Error ")
}

}

  return < div className='container'>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" value= {name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value= {username} onChange={(e)=>setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value= {email}  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Street" value= {street} onChange={(e)=>setStreet(e.target.value)} /> <br/>
        <Form.Control type="text" placeholder="Suite" value= {suite}  onChange={(e)=>setSuite(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="City" value= {city}  onChange={(e)=>setCity(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="ZipCode" value= {zipcode}  onChange={(e)=>setZipcode(e.target.value)}/> 
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" placeholder=".Org" value= {website} onChange={(e)=>setWebsite(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>Company details</Form.Label>
        <Form.Control type="text" placeholder="Name of the company" value= {companyname}  onChange={(e)=>setCompanyname(e.target.value)}/><br/>
        <Form.Control type="text" placeholder="CatchPhrase " value= {phrase} onChange={(e)=>setPhrase(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="Bs" value= {bs} onChange={(e)=>setBs(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Geography</Form.Label>
        <Form.Control type="text" placeholder="Latitude "  value={lat} onChange={(e)=>setLat(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="Longitude" value={lang} onChange={(e)=>setLang(e.target.value)}/>
      </Form.Group>
      

      <Button variant="primary" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
  </div>
}

export default View

