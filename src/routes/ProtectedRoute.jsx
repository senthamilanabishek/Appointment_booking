import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

const ProtectedRoute = ({children,allwoedRoles}) => {

    const {token,role}=useContext(authContext);

    const isAllowed = allwoedRoles.includes(role);//is determine wether the user is allowed to access the route based on their role.
    const accessibleRoute =token && isAllowed ? children:<Navigate to='/login' replace={true}/>

    return accessibleRoute;
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute