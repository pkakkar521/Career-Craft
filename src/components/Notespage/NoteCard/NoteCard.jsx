import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/config";

const NoteCard = ({  toggleChat, isChatOpen }) => {
    const [message,setmessage]=useState([]);
    
    const navigate =useNavigate();
    const [error,seterror] = useState(false);
    useEffect(()=>{
        const auth= localStorage.getItem('user');
       if(auth){
        navigate('/');
       }
    })
    const collect =async()=>{
		if(!message ){
            seterror(true);
            return false;
        }
		console.warn(message);
    const result = await fetch (BASE_URL+'per/pec',{
      method:'post',
      body:JSON.stringify({message}),
      headers:{
      'Content-Type':'application/json'
      },
    });
      const resul = await result.json()
      console.warn(resul);
      
        localStorage.setItem("user",JSON.stringify(resul));
   navigate('/');
  
    window.location.reload(false);
  
    
    }
  return (
    <div className={`chat-dashboard ${isChatOpen ? 'open' : 'closed'}`}>
      <div className="chat-header">
        <span className="username">Hello</span>
        
      </div>
      <div className="chat-body">
        {/* Chat messages */}
      </div>
      <div className="chat-input">
        
        <input type="text" placeholder="Type your message"  required="required" value={message} onChange={(e)=>setmessage(e.target.value)}/><br></br>
				{error && !message && <span className="invalid">Enter Your message</span>}
        <button type="submit" id="csubmit" onClick={collect}>Submit</button>
      </div>
    </div>
  );
};

export default NoteCard;