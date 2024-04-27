import { useMutation } from "react-query"
import { errorToast } from "../../../helpers/utils/error"
import { useNavigate } from "react-router-dom"
import { typeVerify } from "../../../types/Auth"
import { verify } from "../../../services/auth"
import { useCookies } from "react-cookie"
import axios from "axios"

const useVerifyMutation = () => {
  const [, setCookies] = useCookies(["token"]);
  const navigate = useNavigate()
  return useMutation(async (data: typeVerify) => await verify(data), {
    onSuccess: ({ token, result,error }) => {
      if (result === "error") {
        errorToast(error?.description)
      } else {
        // setCookies("token", token, { path: "/", maxAge: 3 * 24 * 60 * 60 * 1000,domain:"bitasia.ir",sameSite:"none" });
        setCookies("token", token, { path: "/", maxAge: 3 * 24 * 60 * 60 * 1000});
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        navigate("/")
      }
    },
    onError: (error: any) => {
      console.log(error.response.data)
      errorToast(error.response.data.API_ERROR.description)
    }
  })
}

export default useVerifyMutation