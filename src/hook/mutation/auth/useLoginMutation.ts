import { useMutation } from 'react-query'
import { typeLogin } from '../../../types/Auth'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/auth'

const useLoginMutation = () => {
  const navigate = useNavigate()
  return useMutation(async (data:typeLogin) => await login(data),{
    onSuccess:(data,variables)=>{
      successToast(data.message)
      navigate(`/auth/verify?mobile=${variables.mobile}`)
    },
    onError:(error:any)=>{
      errorToast(error.response.data.error.description)
    }
  })
}

export default useLoginMutation