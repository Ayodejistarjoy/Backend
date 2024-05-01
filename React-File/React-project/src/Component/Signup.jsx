import { useState } from 'react'
import '../Styles/Signup.css'
import axios from 'axios';



function Signup() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    let Url = "http://localhost:8000/student/register";
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password);
    axios.post(Url, {
        firstname,
        lastname,
        email,
        password,
    })
    .then((res) => {
        console.log(res.data);
        console.log("data sent");
    })
    .catch((err) => {
        console.log(err);
        console.log("data not sent");
    }
   
    );


}

    

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        
    <form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label >
            <input required="" placeholder=""  id='firstname' type="text" className="input"
            onChange={(e) => setfirstname(e.target.value)}
            />
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" id='lastname' type="text" className="input"
             onChange={(e) => setlastname(e.target.value)}
            />
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" id='email' type="email" className="input"
         onChange={(e) => setemail(e.target.value)}
        />
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" id='password' type="password" className="input"
         onChange={(e) => setpassword(e.target.value)}
        />
        <span>Password</span>
    </label>
    {/* <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
    </label> */}
    <button type='submit' onClick={handleSubmit} className="submit">Submit</button>
    <p className ="signin">Already have an account ? <a href="#">Signin</a> </p>
</form>

    </div>
    </>
  )
}

export default Signup