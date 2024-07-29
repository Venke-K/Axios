import Create from "../Components/Create"
import Dashboard from "../Components/Dashboard"
import View from "../Components/View"
import TopBar from "../Components/TopBar"
import { Navigate } from "react-router-dom"



const AppRouter = [
    // {
    // path:'/home',
    // element:<><TopBar/><Home/></>
    // },

    {
    path:'/dashboard',
    element:<><TopBar/><Dashboard/></>
    },

    { 
    path:'/create',
    element:<><TopBar/><Create/></>
    },

    {
    path:'/view/:id',
    element:<><TopBar/><View/></>
    },

    {
    path:'/*',
    element: <Navigate to ='/dashboard' />
    }
]

export default AppRouter