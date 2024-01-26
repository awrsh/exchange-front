import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import {  updateUser } from '../../../services/auth'
import useAuthStore from '../../../stores/user-store'

const useUpdateUserMutation = () => {
    const {user} = useAuthStore()
  return useMutation(async (data:any) => await updateUser(data,user?.id),{
    onSuccess:()=>{
     
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useUpdateUserMutation