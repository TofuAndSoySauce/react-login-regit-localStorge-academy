import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNum, setUser } from "./store";

function Join (props){
  let [num,setNum]=useState(0);
  // useEffect(()=>{
  //   navi('/');
   
  // },[num])
  let navi=useNavigate();
  let dispatch=useDispatch();

  let user=useSelector((state)=>{return state.user});
  let [idData,setIdData]=useState("");
  let [nameData,setNameData]=useState("");
  let [pwdData,setPwdData]=useState("");

  return(
    <>
    <br />
    <input placeholder="id" type="text" onChange={(event)=>{
      setIdData(event.target.value);
    }} />
    <br />
    <br />
    <input placeholder="name" type="text" onChange={(event)=>{
      setNameData(event.target.value);
    }} />
    <br />
    <br />
    <input placeholder="pwd" type="password" onChange={(event)=>{
      setPwdData(event.target.value);
    }} />
    <br />
    <br />
    <button onClick={()=>{
     
      setNum(num+1);
      dispatch(setUser({num:num,id:idData,name:nameData,pwd:pwdData}));

      
      
    }}>회원가입</button>

    </>
  )
}
export default Join;