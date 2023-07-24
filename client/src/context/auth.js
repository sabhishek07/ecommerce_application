import {useState,useEffect,useContext,creatContext} from 'react';

const AuthContext=creatContext();



const AuthProvider=({childen})=>{
    const[auth,setauth]=useState({
        user:null,
        token:""
    })
    return(
        <AuthContext.Provider>
            {children}
         </AuthContext.Provider>
    )

}
//custom hook

const useAuth=()=>useContext(AuthContext)

export{useAuth,AuthProvider}