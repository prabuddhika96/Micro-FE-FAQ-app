import React from 'react';
import MyProfileComponent from './UserProfile';
import logo from "../Assets/Images/logo_main.png";
import {  useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="bg-sky-200 sticky top-0 mx-auto !z-40 flex w-full items-center justify-between border-b border-gray-500 p-3 ">
            <img src = {logo} alt="logo" className="w-10 h-10 mr-2 cursor-pointer" onClick={()=>{
                navigate('/');
            }}/>
            <h1 className="text-5xl text-cyan-800  font-bold font-mono">QuePax</h1>
            <MyProfileComponent/>
            
        </header>
        
    );
}

export default Header;
