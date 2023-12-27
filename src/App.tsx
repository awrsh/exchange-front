import Auth from "./pages/auth"
import Verify from "./pages/auth/verify"


const Pages = [
  {
    path:"/",
    element:<p>testststsst</p>
  },
  {
    path:"/auth",
    element:<Auth/>
  },
  {
    path:"/auth/verify",
    element:<Verify/>
  }
]

export default Pages
