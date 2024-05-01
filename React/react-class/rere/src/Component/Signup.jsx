

function Signup() {
  return (
    <div>
        <div style = {{display:"flex",justifyContent:"center",paddingRight:"10px",alignItems:"center",}}>
       <form style={{border:"1px solid black",padding:"10px",width:"300px"}} method='post' action="">
         <input style={{width:"100%",padding:"10px"}} type="text" placeholder='Enter your firstname'/>
         <input style={{width:"100%",padding:"10px"}} type="text" placeholder='Enter your lastname'/>
         <input style={{width:"100%",padding:"10px"}} type="email" placeholder='Enter your email'/>

         <input style={{width:"100%",padding:"10px"}}  type="password" placeholder='Enter your password'/>
         <button style={{width:"100%",padding:"10px"}}  type='submit'>SignUp</button>
       </form>

       </div>
    
    </div>
  )
}

export default Signup