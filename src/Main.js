import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { logoutUser } from "./store";


function Main(props){
  let dispatch=useDispatch();
  let navi=useNavigate();
  return(
    <>
     <h1>Main login page</h1>
     {
        props.show?
        <>
          <div style={
              {boxSizing:'border-box',
              backgroundColor:'yellow',
              width:'300px',
              margin:'0 auto'}}>{props.showName} 님 환영합니다</div>
              {/* <button onClick={(e)=>{
                e.preventDefault();
                dispatch(logoutUser(props.showName));

                //작동 안됨. 
                navi('/');
              }}>로그아웃</button> */}
        </>
          : null
      }
 
    </>
  )
}
export default Main;