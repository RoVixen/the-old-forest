import React from 'react'

import "../css/main_body.css";
import { pushLocation, pushSearch } from './include';

export function MainBodyWrapper({left_section=null,children}){

    const leftSection = (side="left")=>{
        const lswrapper=(content)=>{

            const classToUse=(side=="left"?
                "col-4 d-none d-sm-block":
                "col-12 d-block d-sm-none"
            );

            return <div className={classToUse}>
                <div className="row" style={{height: "100%"}}>
                    <div className="col-lg-12 offset-lg-0 left_section">
                        {content}
                    </div>
                </div>
            </div>;
        }

        if(left_section?.constructor?.name=="Array" || React.isValidElement(left_section)){
            return lswrapper(left_section);
        }
        return null;
    }

    return <div className="spacing_wrapper">
        <div className="main_wrapper">
            <header className="header_wrapper">
                <h1 className="text-center" >The Old Forest&nbsp;</h1>
                <h5 className="text-center" >The Fellowship of the Ring</h5>
            </header>
            <div className="container-fluid">
                <div className="row">
                    {leftSection("left")}
                    <div className="col">
                        <div className="row">
                            <div className="col-12" style={{background: "rgba(0,0,0,0.45)"}}>
                                <LandingNavBar/>
                            </div>
                            <div className="col-12 old-f-content">
                                {children}
                            </div>
                        </div>
                    </div>
                    {leftSection("bottom")}
                </div>
            </div>
        </div>
    </div>
}

export function LandingNavBar({}){
    return <nav className="navbar navbar-dark navbar-expand">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <NavBarOption href="/">Landing</NavBarOption>
                    <NavBarOption href="/web">Web</NavBarOption>
                    <NavBarOption href="/hobbies">Hobbies</NavBarOption>
                </ul>
            </div>
        </div>
    </nav>;
}

function NavBarOption({href,children}){

    return <li className="nav-item">
        <a 
            className={"nav-link"+((href==window.location.pathname)?" active":"")}
            onClick={(e)=>{
                pushLocation(href);
                window.dispatchEvent(new CustomEvent("pathpushed",{
                    detail: {
                        href:href
                    }
                }))
            }}
        >
            {children}
        </a>
    </li>;
}