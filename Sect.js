import React from "react";
import {BrowserRouter as Router,Switch ,Route,Redirect} from 'react-router-dom';
import {IoIosAdd} from "react-icons/io";
import Addsong from "./Addsong";



const Sect = (props) => {
    const addEvent=()=>{
        

    }
  

    return (
        <>
            <div className="container2">
                <h1 className="songs">Top 10 {props.type}</h1>
                {/* <Router><Switch>
                <Route path='/Addsong' component={Addsong}/>
                <Redirect to="/"/>
                </Switch>
                </Router> */}
                <button className="addsong" onClick={addEvent}> <IoIosAdd /> Add{props.add}</button>
                
            </div>
        </>
    );
};
export default Sect;