import React from 'react'

const Form = () =>{
    return (
        <div>
            <form className="form">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Type the username..." />
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Type the email..." />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
