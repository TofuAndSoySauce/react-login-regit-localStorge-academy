import { useState } from "react";

function FindID(){
  let[findName,setFindName]=useState("");
  let[findUserId,setFindUserId]=useState("");
  return(
    <>
      <br/>
      <input type="text" placeholder="사용자의 이름" onInput={(e)=>{
        setFindName(e.target.value);
      }}/>
      <br /><br/>
      <button onClick={()=>{
       const getLocal= JSON.parse(localStorage.getItem("userdata"));
       getLocal.map((item,index)=>{
        if(item.name===findName){
          setFindUserId(item.id);
        }
       });
      }}>아이디 찾기</button>
        <br/><br/>
      <p>찾은 아이디: {findUserId} </p>
    </>
  )
}
export default FindID;