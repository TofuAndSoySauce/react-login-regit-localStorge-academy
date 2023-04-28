import {configureStore} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

let user =createSlice({
  name:'user',
  initialState:[
    {idNum : 0, id : 'initId', name : 'initName', pwd : 'initPwd', isEmpty : true, valid : false }
  ],
  reducers : {
    //state 기존값 data 들어간 값
    getNum: (state,data)=>{
      let idx=0;
      idx=state.findIndex((item)=>{
        return item.idNum===data.payload
      });
      state[idx].idNum++;
    },

    setUser:(state,data)=>{
      let parseUserdata=JSON.parse(localStorage.getItem("userdata"));
      if(parseUserdata===null){
        parseUserdata=[];
        parseUserdata.push({
          idNum : data.payload.num, 
          id : data.payload.id, 
          name : data.payload.name, 
          pwd : data.payload.pwd,
          isEmpty : false, 
          valid : false
        })
      }else{

      //입력한 id와 state값을 비교=> 안됨.
      // let i;
      // for(i=0;i<parseUserdata.length;i++){
      //     if(parseUserdata[i].id !== data.payload.id){
            parseUserdata.push({
              idNum : data.payload.num, 
              id : data.payload.id, 
              name : data.payload.name, 
              pwd : data.payload.pwd,
              isEmpty : false, 
              valid : false
            });
          }
      //   }
      // }
      localStorage.setItem("userdata",JSON.stringify(parseUserdata));
    },

      getName:(state,data)=>{return state.name},

      logoutUser:(state,data)=>{
        let getuserdata = JSON.parse( localStorage.getItem("userdata") );

        getuserdata.map((value,index,array)=>{
          if(value.name === data.payload){
            let sliced=getuserdata.slice(index, 1);
            console.log(sliced);
            localStorage.setItem("userdata",JSON.stringify(sliced));
          }
        });
        
      }

  }
})
export let{setUser,getUser,getNum,getName, logoutUser}=user.actions;

export default configureStore({
  reducer:{
    user : user.reducer,
  }
});


