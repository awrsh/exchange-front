import Auth from "./pages/auth"
import Register from "./pages/auth/register"
import Verify from "./pages/auth/verify"
import Home from "./pages/home"


const Pages = [
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth",
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

