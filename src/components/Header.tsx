import React from "react"
import logo from "../img/logo.png";

interface HeaderProps{
    listHeader:string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className="text-center">
            <div className="h1 text-center color-acc-amber">{props.listHeader}</div>
            <div className="mb-5"><img src={logo} alt="Logo" /> </div>
        </div>    
           
        ); 
}

export default Header;