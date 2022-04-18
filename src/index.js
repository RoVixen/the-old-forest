import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

import "./css/global.css";

/*
const LandingPage = React.lazy(()=>import("./landing.js"));
const Web = React.lazy(()=>import("./web.js"));
const Hobbies = React.lazy(()=>import("./hobbies.js"));
*/
import LandingPage from "./landing";
import Web from "./web";
import Hobbies from "./hobbies";


const routes={
  "/":<LandingPage/>,
  "/web":<Web/>,
  "/hobbies":<Hobbies/>
}

function Routing({}){
  let routesCompArr=[]
  for(let route in routes){
    routesCompArr.push(<Route key={route} path={route} element={routes[route]} />);
  }

  return <Router>
    {
      //dont add header in paths in pathsWithNoHeaders
      //!(pathsWithNoHeaders.find((v)=>v==window.location.pathname))&&<Header/>
    }
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routesCompArr}
      </Routes>
    </Suspense>
  </Router>;
}

function MainWebsite({}){
  const [content,setContent]=useState(<Routing/>);

  useEffect(() =>{
    window.addEventListener("pathpushed",(event)=>{
      console.log(event.detail);
      setContent(routes[event.detail.href]);
    });
  },[]);

  return content;
}

ReactDOM.render(
  <MainWebsite/>,
  document.getElementById('root')
);
