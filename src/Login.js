import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "./store";


function Login (props){
 //로그인시 
  
 let [loginId,setLoginId]=useState("");
 let [loginPwd,setLoginPwd]=useState("");

  let navi=useNavigate();

  return(
    <>
      <label>아이디 <input type="text" onChange={(e)=>{
        setLoginId(e.target.value);
      }}/> </label>
      <br/>
      <label>비밀번호 <input type="password" onChange={(e)=>{
        setLoginPwd(e.target.value);
      }}/> </label>
      <br/>
      <button onClick={(e)=>{
        e.preventDefault();
        
        let uData = JSON.parse( localStorage.getItem("userdata") );
      
        uData.map((value,index)=>{
        if(value.id===loginId && value.pwd===loginPwd){
          //메인화면에 이름출력시 필요. 로그인이 성공하면 true.
            props.setShow(true);
            props.setShowName(uData[index].name);
        }
        });
        navi('/');
        
      }}>로그인</button>
      
  
    </> 
  )
}

export default Login;