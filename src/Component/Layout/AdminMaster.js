
import Adminheader from "./Adminheader"
import Adminfooter from "./Adminfooter"
import { Outlet,Navigate } from "react-router-dom"
import { toast } from "react-toastify";
export default function AdminMaster(){
const email=sessionStorage.getItem("email")
if(!email){
  toast.error("Please login")
  return <Navigate to={"/login"}/>
 }
 return(
       <>
        <Adminheader/>
        <Outlet/>
        <Adminfooter/>
        </>
    )
}