import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../Features/User'

// using dipatcher to update the state
function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => {
            dispatch(login({name: "Kevin", age: 23, email: "kevin@gmail.com"}));
        }}>Login</button>

        <button onClick={() => {
            dispatch(logout())
        }}>
            Logout
        </button>
    </div>
  )
}

export default Login