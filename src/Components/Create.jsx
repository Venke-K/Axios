import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';


function Create() {

    let[name,setName] = useState("")
    let[username,setUsername] = useState("")
    let[email,setEmail] = useState("")
    let[street,setStreet] = useState("")
    let[city,setCity] = useState("")
    let[suite,setSuite] = useState("")
    let[zipcode,setZipcode] = useState("")
    let[website,setWebsite] = useState("")
    let[companyname,setCompanyname] = useState("")
    let[phrase,setPhrase] = useState("")
    let[bs,setBs] = useState("")
    let[lat,setLat] = useState("")
    let[lang,setLang] = useState("")

    let navigate = useNavigate()


let handlesubmit = async () =>{
 
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

try {
    let response = await AxiosService.post (ApiRoutes.PERSONAL_INFO.path,{name, username, email,website,
        address:{
                        street,
                        city,
                        suite,
                        zipcode,
                    },
                    companydetails:{
                                    companyname,
                                    phrase,
                                    bs,
                                },

                                geo:{
                                    lat,
                                    lang
                                }
                            })
                                if(response.status===201)
                                {
                                   toast.success("Data sent to Dashboard Successfully")
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
        <Form.Control type="email" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Street" onChange={(e)=>setStreet(e.target.value)} /> <br/>
        <Form.Control type="text" placeholder="Suite"  onChange={(e)=>setSuite(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="City"  onChange={(e)=>setCity(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="ZipCode"  onChange={(e)=>setZipcode(e.target.value)}/> 
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" placeholder=".Org" onChange={(e)=>setWebsite(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>Company details</Form.Label>
        <Form.Control type="text" placeholder="Name of the company"  onChange={(e)=>setCompanyname(e.target.value)}/><br/>
        <Form.Control type="text" placeholder="CatchPhrase " onChange={(e)=>setPhrase(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="Bs" onChange={(e)=>setBs(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Geography</Form.Label>
        <Form.Control type="text" placeholder="Latitude " onChange={(e)=>setLat(e.target.value)}/> <br/>
        <Form.Control type="text" placeholder="Longitude" onChange={(e)=>setLang(e.target.value)}/>
      </Form.Group>
      

      <Button variant="primary" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
  </div>
}

export default Create
