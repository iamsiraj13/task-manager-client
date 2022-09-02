

class sessionHelper{


    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
       return localStorage.getItem("token")
    }
    setUserDetails(UserDetails){
        localStorage.setItem("userDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("userDetails"))
    }

}

export const {setToken,getToken,setUserDetails,getUserDetails} = new sessionHelper();