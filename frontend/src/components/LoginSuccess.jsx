import React, { useEffect } from 'react'

const LoginSucess = ()=>{
    useEffect(()=>{
        setTimeout(() => {
            window.close();
        }, 1500);
    },[]);

    return (
    <dev>
        <h4 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Login Sucessfull..!</h4>
    </dev>)
}
export default LoginSucess;