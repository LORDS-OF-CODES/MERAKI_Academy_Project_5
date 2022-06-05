import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loggedin,logout } from "../../redux/reducers/auth";
const Navbar = ()=>{
  const navigate=useNavigate()
const dispatch = useDispatch()
const {token,isLoggedIn,isAdmin}=useSelector((state)=>{
    return{
      token : state.auth.token,
      isLoggedIn : state.auth.isLoggedIn,
      isAdmin : state.auth.isAdmin
    }
  })
return(
    <div className="navbar">
        <nav>
            <img src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/95093528_925008204596091_3051705487943794688_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHauKD1lKQ1B_JKeY4f5g_SZiv_hMWAs6ZmK_-ExYCzpv595L_1JAZxtur3jyOmd6CLiQtzOo2DKzu355CRzvfx&_nc_ohc=AUoj-2sVlp4AX8EsSxu&_nc_ht=scontent-frt3-1.xx&oh=00_AT8EmOIbtDsEYK9l55H0K7Z_XTssHwMKZ3OWcS71J7kbvA&oe=62C3D0FA" width={"80px"}/>
           
            <Link to={"/menu"}>القائمة</Link>
            {!isLoggedIn?<><Link to={"/regeister"}>تسجيل مستخدم جديد</Link>
            <Link to={"/login"}>تسجيل الدخول</Link></>:""}
            {isAdmin?<><Link to={"/adminpanel"}>لوحة الادارة</Link></>:""}
            {isLoggedIn?<><Link to={"/"} onClick={()=>{
              dispatch(logout()
              )
              
            }} >تسجيل الخروج</Link></>:""}
            
            <Link to={"/aboutus"}>من نحن</Link>
        </nav>
    </div>
)

}


export default Navbar