import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    let [newUser,setUser]=useState("");

    const createUser = (e)=>{
        e.preventDefault();
        newUser = setUser({firstName,lastName,email,password,confirm});
    }
    return (
    <>
        <h1>Register</h1>
        <form  onSubmit={createUser}>
            <br />
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e)=> setFirstName(e.target.value)} />
                {firstName.length<2&&firstName.length!==0?<p>First Name needs to be atleast 2 chars</p>:null}
            </div>
            <br />
            <div>
                <label >Last Name: </label>
                <input type="text" onChange={(e)=> setLastName(e.target.value)}/>
                {lastName.length<2&&lastName.length!==0?<p>Last Name needs to be atleast 2 chars</p>:null}
            </div>
            <br />
            <div>
                <label >Email: </label>
                <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                {email.length<2&&email.length!==0?<p>Email needs to be atleast 2 chars</p>:null}
                {email.length!==0&&!(email.includes("@"))?<p>Include @ format</p>:null}
            </div>
            <br />
            <div>
                <label >Password: </label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)}/>
                {password.length<2&&password.length!==0?<p>Password needs to be atleast 2 chars</p>:null}
            </div>
            <br />
            <div>
                <label >Confirm Password: </label>
                <input type="text" onChange={(e)=> setConfirm(e.target.value)}/>
                {confirm.length!==0 && confirm!==password? <p>Passwords must match</p>:null}
            </div>
            <br />
            <input type="submit" value="Sign up" />
        </form>


        <h1>your info</h1>
        <p>First Name: {newUser.firstName}</p>
        <p>Last Name: {newUser.lastName}</p>
        <p>Email: {newUser.email}</p>
        <p>Password: {newUser.password}</p>
        <p>Confirm Password: {newUser.confirm}</p>
    </>

    
  )
}

export default UserForm