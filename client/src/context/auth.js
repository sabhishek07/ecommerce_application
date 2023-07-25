import {useState,useEffect,useContext,creatContext} from 'react';

const AuthContext=creatContext();



const AuthProvider=({childen})=>{
    const[auth,setAuth]=useState({
        user:null,
        token:""
    })
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {/* {children} */}
         </AuthContext.Provider>
    )

}
//custom hook

const useAuth=()=>useContext(AuthContext)

export{useAuth,AuthProvider}