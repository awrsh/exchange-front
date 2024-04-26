import { useMutation } from 'react-query'
import { register } from '../../../services/auth'
import { typeRegister } from '../../../types/Auth'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { useNavigate } from 'react-router-dom'

const useRegisterMutation = () => {
  const navigate = useNavigate()
  return useMutation(async (data: typeRegister) => await register(data), {
    onSuccess: (data) => {
      if (data?.result === "error") {
        errorToast(data?.error?.message)
        return
      } else {
        successToast(data.message)
        navigate("/auth")
      }
    },
    onError: (error: any) => {
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useRegisterMutation