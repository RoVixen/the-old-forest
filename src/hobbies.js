import { MainBodyWrapper } from "./common/main_body";
import { pushSearch } from "./common/include.js";

import "./css/web.css";
import "./css/hobbies.css";

import {DnDContent} from "./hobbies/dnd.js";
import { useState, useEffect } from "react";

export default function Hobbies({}){

    const [content,setContent] = useState(<h1>a</h1>);

    const MarbleMenuClickHandler = (entry)=>{
        //window.location.search=new URLSearchParams("entry="+entry);
        setContent({
            dnd:DnDContent,
            at:<>{DnDContent}{DnDContent}{DnDContent}</>
        }[entry]);
        pushSearch({entry});
    };

    useEffect(()=>{
        MarbleMenuClickHandler("dnd");
    },[]);

    return <MainBodyWrapper 
        left_section={<>
            <ul className="marble_menu">
                <li onClick={(e)=>{MarbleMenuClickHandler("dnd")}}>D&D</li>
                <li onClick={(e)=>{MarbleMenuClickHandler("at")}}>Another Thing</li>
            </ul>
        </>}
    >
        {content}
    </MainBodyWrapper>;
}