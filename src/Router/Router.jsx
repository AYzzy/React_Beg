 import Login from "../auth/Login"
 import SignUp from "../auth/SignUp"
 
 const router =[
  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/SignUp",
    element: <SignUp/>
  }

 ]

 export default router