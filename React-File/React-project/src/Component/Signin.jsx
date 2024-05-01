import '../Styles/Sign.css'

function Signin() {
  return (
    < >
      <div style = {{display:"flex",justifyContent:"center",paddingRight:"10px",alignItems:"center",color:"black",fontSize:"30px"}}>
       <form style={{border:"1px solid black",padding:"30px",alignItems:"center",justifyContent:"center",display:"flex",margin:"10px 0px",flexDirection:"column",width:"40%",backgroundColor:"white",borderRadius:"10px"}} action="" method='post'>
        <h3 style={{fontWeight:"bolder",color:"blue",fontSize:"25px"}}>SIGN IN</h3>
         <input style={{width:"100%",padding:"10px",margin:"10px 0px"}} type="email" placeholder='Enter your email'/>
         <input style={{width:"100%",padding:"10px",margin:"10px 0px"}}  type="password" placeholder='Enter your password'/>
         <button style={{width:"100%",padding:"10px",margin:"20px 0px",backgroundColor:"blue",color:"white",borderRadius:"6px",fontSize:"18px"}} type='submit'>SignIn</button>
       </form>
       </div>
    </>
    
  )
}

export default Signin