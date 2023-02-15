import React from 'react';
import GoogleButton from "react-google-button";

const Login = () => {

    const redirectToGoogleAuth = async () => {
        let timer = null;
        const googleLoginURL = "http://localhost:8090/auth/google"
        //open in popup window
       /*  const newWindow = window.open(googleLoginURL, "_blank", "width= 500, height=600"); */
        //open in new tab
        const newTab = window.open(googleLoginURL, '_blank');
        newTab.focus(); 
        if(newTab){
            timer = setInterval(()=>{
                if(newTab.closed){
                    console.log("authenticated");
                    if(timer)
                    clearInterval(timer);
                }
            },500);
        }
    }

    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GoogleButton onClick={redirectToGoogleAuth} />
        </div>
    )
}

export default Login;

