import {createContext, useContext,useEffect,useReducer } from "react";

const initialState={
    user:localStorage.getItem('user') != undefined ? JSON.parse(localStorage.getItem('user')):null,
    role:localStorage.getItem('role') || null,
    token:localStorage.getItem('token')||null
}

export const authContext = createContext(initialState);

const authReducer=(state,action)=>
{
    console.log("Action dispatched:", action);
    console.log("Previous state:", state);
    switch(action.type)
    {
        case 'LOGIN_START':
            return{
                user:null,
                role:null,
                token:null
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role
            };

        case 'UPDATE_PROFILE':
            return {
                ...state,
                user: action.payload
            };
        
        case 'LOGOUT':
            return{
                user:null,
                role:null,
                token:null
            }
        
        default:
            return state;
    }
};


export const AuthContextProvider=({children})=>
{
    const [state,dispatch]=useReducer(authReducer,initialState);

    useEffect(()=>
    {
        console.log("State updated:", state);
        localStorage.setItem('user',JSON.stringify(state.user))
        localStorage.setItem('token',state.token);
        localStorage.setItem('role',state.role);
    },[state])

    return <authContext.Provider value={{user:state.user,token:state.token,role:state.role,dispatch}}>
        {children}
    </authContext.Provider>
}