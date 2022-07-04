import React from "react";
import {useSelector} from 'react-redux'
import SquareLoader from "react-spinners/SquareLoader";
import users from './users.css';

export default function UserData() {
    const userData = useSelector((state) => state.usersReducer);

  return (
    <div className="container">
      <div className="pic">

      {userData?.loading ? 
        <SquareLoader />
        :
        userData?.users.map((user, idx)=>{
            return <p className="users" key={idx} >{user.name}</p>
        })
        }
      </div>
    </div>
    
  );
}
