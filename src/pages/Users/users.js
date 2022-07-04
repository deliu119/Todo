import React, { useEffect } from "react";
import {useDispatch} from 'react-redux'
import UserData from "../../components/UserData/userData";
import { loadAllUsers } from "./actions";

export default function Users() {

    const dispatch = useDispatch();
  
     useEffect(()=>{

        dispatch(loadAllUsers());
 
      }, []);

  return (
    <div className="container">
      <div className="col-2">
        <UserData />
      </div>
    </div>
  );
}
