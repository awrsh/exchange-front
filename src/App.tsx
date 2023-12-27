import Auth from "./pages/auth"
import Register from "./pages/auth/register"
import Verify from "./pages/auth/verify"


const Pages = [
  {
    path:"/",
    element:<Auth/>
  },
  {
    path:"/auth/verify",
    element:<Verify/>
  },
  {
    path:"/auth/register",
    element:<Register/>
  },
]

export default Pages

