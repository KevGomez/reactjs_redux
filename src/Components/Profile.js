import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state) => state.user.value);
    const book = useSelector((state) => state.book.value)
    const theme = useSelector((state) => state.theme.value)
  return (
    <div style={{color:theme}}>
        <h2>Profile Page</h2>
        {/* Using User State */}
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>

        {/* Using Book State */}
        {/* <p>Book Name: {book.name}</p>
        <p>Book Pages: {book.pages}</p>
        <p>Book Author: {book.author}</p> */}
    </div>
  )
}

export default Profile